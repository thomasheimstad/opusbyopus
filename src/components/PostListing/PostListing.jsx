import React from "react";
import Link from 'gatsby-link'
import FadeInWrapper from "../modules/FadeInWrapper";
import Header from "../modules/Header";
import TreeView from './TreeView';

export default class PostListing extends React.Component {
  state = {
    view: this.props.view,
    scrollTop: 0,
    percentage: 0
  }
  handleScroll = () => {
    let h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight',
        ih = window.innerHeight;
    let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - (ih || h.clientHeight)) * 100;
    let distance = document.getElementById(`treeHider`).getBoundingClientRect().top;
    this.setState({
      percentage: percent,
      scrollTop: distance
    })
  }
  getPostList() {
    let today = new Date().toISOString();
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      let postListPusher = () => {
        postList.push({
          path: postEdge.node.fields.slug,
          tags: postEdge.node.frontmatter.tags,
          cover: postEdge.node.frontmatter.cover,
          title: postEdge.node.frontmatter.title,
          opus: postEdge.node.frontmatter.opus,
          composedin: postEdge.node.frontmatter.composedin,
          date: postEdge.node.frontmatter.date,
          category: postEdge.node.frontmatter.category,
          excerpt: postEdge.node.excerpt,
          timeToRead: postEdge.node.timeToRead,
          thumbnail: postEdge.node.frontmatter.thumbnail,
          description: postEdge.node.frontmatter.description,
        })
      };
      if(postEdge.node.frontmatter.opus || postEdge.node.frontmatter.category === "blog" || this.props.tags || this.props.categories ) {
        postListPusher();
      } else if(postEdge.node.frontmatter.concertDate > today ) {
        postListPusher();
      }
    });
    return postList;
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
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }
  render = () => {
    let defaultPostList = (...props) => {
      return (
        <div className="flex center">
          <p>
            {props[0]} <br/>
            {props[1]}
          </p>
        </div>
      )
    }
    const allThePosts = this.getPostList();
    let checkView = (allPost) => {
      if (this.state.view == "treeView") {
        return (
          <div id={this.state.view} className={`${this.state.view}`} style={{backgroundImage: "url(" + this.props.img + ")"}} >
            <Header percentage={this.state.percentage} />
              {/* Your post list here. */
              allPost.map(post =>
                <div key={post.title}>
                    <TreeView {...post} percentage={this.state.percentage} treeHiderScrollTop={this.state.scrollTop}/>
                </div>
              )}
          </div>
        )
      } else {
        return (
          <div className="flex center" id={this.state.view}>
            {/* Your post list here. */
            allPost.map(post =>
              <div key={post.title} >
                <Link to={post.title}><p>
                  {post.title}
                </p></Link>
              </div>
            )}
          </div>
        )
      }
    }
    return checkView(allThePosts)
  }
}
