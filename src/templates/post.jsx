import React from "react";
import Helmet from "react-helmet";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Hero from "../components/modules/Hero";
import Controls from "../components/modules/Controls";
import ConnectionsInPost from "../components/modules/ConnectionsInPost";

export default class PostTemplate extends React.Component {
  consolez = (ez) => {
    console.log(ez)
  }
  formatDate = (date) => {
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
    month = monthNames[d.getMonth()];

    return [day, month, year].join(' ');
  }
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const artists = postNode.fields.artist;
    const opuses = postNode.fields.opuses;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.id) {
      post.category_id = config.postDefaultCategoryID;
    }
    let opusPost = () => {
      return (
        <div className="blogPost">
          <Hero id={post.title} src={post.thumbnail.childImageSharp.sizes} height="400"/>
          <div className="basePad">
            <div className="flex center column">
              <h1>OPUS {post.opus}</h1>
              <h3>{post.title}</h3>
              <h4>{post.composedin}</h4>
            </div>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <div className="post-meta">
              <PostTags tags={post.tags} />
              {/* <SocialLinks postPath={slug} postNode={postNode} /> */}
            </div>
          </div>
          <ConnectionsInPost connections={artists}/>
          <Controls post={post}/>
          {/*<UserInfo config={config} />
          {/* }<Disqus postNode={postNode} /> */}
        </div>
      )
    }
    let artistPost = () => {
      return (
        <div className="blogPost">
          <Hero id={post.title} src={post.thumbnail.childImageSharp.sizes} height="400"/>
          <div className="basePad">
            <div className="flex center column">
              <h1>{post.title}</h1>
              <h4>{post.tags}</h4>
            </div>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <div className="post-meta">
              <PostTags tags={post.tags} />
              {/* <SocialLinks postPath={slug} postNode={postNode} /> */}
            </div>
          </div>
          <ConnectionsInPost connections={opuses}/>
          {/*<UserInfo config={config} />
          {/* }<Disqus postNode={postNode} /> */}
        </div>
      )
    }
    return (
      <div className="post">
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        {/*<SEO postPath={slug} postNode={postNode} postSEO />*/}
        <div className="postContent flex center column">
          {post.category === "opus" ? opusPost() : artistPost()}
        </div>
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(
      fields: {
        slug: { eq: $slug }
      }
    ) {
      html
      timeToRead
      excerpt
      id
      frontmatter {
        title
        opus
        artists
        composedin
        date
        category
        tags
        thumbnail {
          childImageSharp {
            sizes(maxWidth: 1920) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
      fields {
        slug
        artist {
          frontmatter {
            title
            tags
            thumbnail {
              childImageSharp {
                sizes(maxWidth: 1920, maxHeight: 1920) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          # all opuses of artist
          fields {
            slug
            opuses {
              frontmatter {
                title
              }
            }
          }
        }
        opuses {
          frontmatter {
            title
            opus
            thumbnail {
              childImageSharp {
                sizes(maxWidth: 1920, maxHeight: 1920) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          # all opuses of artist
          fields {
            slug
            artist {
              frontmatter {
                title
                tags
              }
            }
          }
        }
      }
    }
  }
`;
