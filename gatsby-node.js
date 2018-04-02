const path = require("path");
const _ = require("lodash");
const webpackLodashPlugin = require("lodash-webpack-plugin");

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let slug;
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`;
    }
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "opus")
    ) {
      slug = `/opus${_.kebabCase(node.frontmatter.opus)}`;
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }
    createNodeField({ node, name: "slug", value: slug });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const postPage = path.resolve("src/templates/post.jsx");
    const tagPage = path.resolve("src/templates/tag.jsx");
    const categoryPage = path.resolve("src/templates/category.jsx");
    resolve(
      graphql(
        `
        {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  tags
                  category
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `
      ).then(result => {
        if (result.errors) {
          /* eslint no-console: "off"*/
          console.log(result.errors);
          reject(result.errors);
        }

        const tagSet = new Set();
        const categorySet = new Set();
        result.data.allMarkdownRemark.edges.forEach(edge => {
          if (edge.node.frontmatter.tags) {
            edge.node.frontmatter.tags.forEach(tag => {
              tagSet.add(tag);
            });
          }

          if (edge.node.frontmatter.category) {
            categorySet.add(edge.node.frontmatter.category);
          }

          createPage({
            path: edge.node.fields.slug,
            component: postPage,
            context: {
              slug: edge.node.fields.slug
            }
          });
        });

        const tagList = Array.from(tagSet);
        tagList.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagPage,
            context: {
              tag
            }
          });
        });

        const categoryList = Array.from(categorySet);
        categoryList.forEach(category => {
          createPage({
            path: `/categories/${_.kebabCase(category)}/`,
            component: categoryPage,
            context: {
              category
            }
          });
        });
      })
    );
  });
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-javascript") {
    config.plugin("Lodash", webpackLodashPlugin, null);
  }
};

// we use sourceNodes instead of onCreateNode because at this time plugins
// will have created all nodes already and we can link both opuses to artists
// and reverse link on artists to opuses
exports.sourceNodes = ({ boundActionCreators, getNodes, getNode }) => {
  const { createNodeField } = boundActionCreators

  const opusesOfArtists = {}
  const artistsOfOpuses = {}

  // iterate thorugh all markdown nodes to link books to author
  // and build author index
  const getArtistNodeByName = name => getNodes().find(
    node2 =>
      node2.internal.type === `MarkdownRemark` &&
      node2.frontmatter.title === name
  )

  // iterate thorugh all markdown nodes to link books to author
  // and build author index
  const markdownNodes = getNodes()
    .filter(node => node.internal.type === `MarkdownRemark`)
    .forEach(node => {
      if (node.frontmatter.artists) {
        const artistNodes = node.frontmatter.artists instanceof Array
          ? node.frontmatter.artists.map(getArtistNodeByName) // get array of nodes
          : [getArtistNodeByName(node.frontmatter.artists)] // get single node and create 1 element array

        // filtered not defined nodes and iterate through defined authors nodes to add data to indexes
        artistNodes.filter(artistNode=> artistNode).map(artistNode => {
          // if it's first time for this author init empty array for his books
          if (!(artistNode.id in opusesOfArtists)) {
            opusesOfArtists[artistNode.id] = []
          }
          // add book to this author
          opusesOfArtists[artistNode.id].push(node.id)

          // if it's first time for this book init empty array for its authors
          if (!(node.id in artistsOfOpuses )) {
            artistsOfOpuses[node.id] = []
          }
          // add author to this book
          artistsOfOpuses[node.id].push(artistNode.id)
        })
      }
    })

  Object.entries(opusesOfArtists).forEach(([artistNodeId, opusIds]) => {
    createNodeField({
      node: getNode(artistNodeId),
      name: `opuses`,
      value: opusIds,
    })
  })

  Object.entries(artistsOfOpuses).forEach(([opusNodeId, artistIds]) => {
    createNodeField({
      node: getNode(opusNodeId),
      name: `artist`,
      value: artistIds,
    })
  })
}
    {/* OLD VERSION SINGLE ARTIST// iterate thorugh all markdown nodes to link opuses to artist
    // and build artist index
    const markdownNodes = getNodes()
      .filter(node => node.internal.type === `MarkdownRemark`)
      .forEach(node => {
        if (node.frontmatter.artist) {
          // Trying to map through all artists per opus
          node.frontmatter.artist.forEach(artist => {
            const artistNode = getNodes().find(
              node2 =>
                node2.internal.type === `MarkdownRemark` &&
                node2.frontmatter.title === artist
            )
            if (artistNode) {
              createNodeField({
                node,
                name: `artist`,
                value: artistNode.id,
              })

              // if it's first time for this artist init empty array for his opuses
              if (!(artistNode.id in opusesOfArtists)) {
                opusesOfArtists[artistNode.id] = []
              }
              // add opus to this artist
              opusesOfArtists[artistNode.id].push(node.id)
            }
          })
        }
      })

    Object.entries(opusesOfArtists).forEach(([artistNodeId, opusIds]) => {
      createNodeField({
        node: getNode(artistNodeId),
        name: `opuses`,
        value: opusIds,
      })
    })
  }
  END OF OLD VERSION*/}
