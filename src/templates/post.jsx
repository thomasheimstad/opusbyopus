import React from "react";
import Helmet from "react-helmet";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import NavLink from 'gatsby-link';
import Hero from "../components/modules/Hero";
import Controls from "../components/modules/Controls";
import Media from "../components/modules/Media";
import ConnectionsInPost from "../components/modules/ConnectionsInPost";
import PageNotFound from '../pages/404';
import GriegNightCircle250 from '../posts/img/GriegNightCircle250.png';
import PageImg from '../posts/img/GriegMinuttForMinutt.jpg';

export default class PostTemplate extends React.Component {
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
      let today = new Date().toISOString();
      if(post.date < today) {
        return (
          <div className="blogPost">
            <Hero id={post.title} src={post.thumbnail.childImageSharp.sizes} height="400"/>
            <div className="basePad">
              <div className="flex center column">
                <div className="flex center column">
                  { post.title <= 74 ? <h1>OPUS {post.title}</h1> : <h1>EG {post.title}</h1> }
                  <h3>{post.workname}</h3>
                  {post.dedicatedTo ? <h5>Dedikert til {post.dedicatedTo}</h5> : null}
                  <h4>{post.composedin}</h4>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
              {post.author ? <div><h4 style={{textAlign: 'left', padding: '0 0 1rem'}}>Forfatter: {post.author}</h4></div> : null}
              <div className="post-meta">
                <PostTags tags={post.tags} />
                {/* <SocialLinks postPath={slug} postNode={postNode} /> */}
              </div>
            </div>
            <ConnectionsInPost
              connections={artists}
              startDate={post.startDate}
              startTime={post.startTime}
              location={post.location}
              nrkLink={post.nrkLink}
              opus={post.title}
            />
            <Controls post={post}/>
            {/*<UserInfo config={config} />
            {/* }<Disqus postNode={postNode} /> */}
          </div>
        )
      } else {
        return (
          <div className="pageNotFound flex center column basePad" style={{height: '100%', width: '100%'}}>
            <img src={GriegNightCircle250} alt="Grieg minutt for minutt logo" style={{height: "200px", marginBottom: "3rem"}}/>
            <div className="flex center column">
              <h2>Innholdet her er fortsatt hemmelig.</h2>
              <h2>Du må nok vente i spenning.</h2>
              <h2>Følg med og hold deg oppdatert.</h2>
              <h2>Vi publiserer litt etter litt.</h2>
            </div>
            <Controls post={post}/>
            <div className="button"><NavLink to="/opus-for-opus">Returner til opuslisten her.</NavLink></div>
          </div>
        )
      }
    }
    let artistPost = () => {
      let today = new Date().toISOString();
      if(post.date < today){
        return (
          <div className="blogPost">
            <Hero id={post.title} src={post.thumbnail.childImageSharp.sizes} height="400"/>
            <div className="basePad">
              <div className="flex center column">
                <h1>{post.title}</h1>
                <h4>{post.tags}</h4>
              </div>
              <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
              { post.medialink ? (<div className="mediaView"><Media title={post.title} medialink={`${post.medialink}?rel=0`} /></div>) : ''}
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
      } else {
        return (
          <PageNotFound />
        )
      }
    }
    return (
      <div className="postContainer">
        <Helmet>
          <title>{post.category == "opus" ? `Op. ${post.title} | ${config.siteTitle}` : `${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO pageImg={PageImg}/>
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
        workname
        startDate
        startTime
        location
        nrkLink
        artists
        medialink
        composedin
        dedicatedTo
        author
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
            category
            tags
            thumbnail {
              childImageSharp {
                sizes(maxWidth: 360, maxHeight: 360, cropFocus: CENTER) {
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
            category
            workname
            thumbnail {
              childImageSharp {
                sizes(maxWidth: 360, maxHeight: 360, cropFocus: CENTER) {
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
