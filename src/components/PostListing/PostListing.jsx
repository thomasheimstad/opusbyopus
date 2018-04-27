import React from "react";
import Link from 'gatsby-link'
import FadeInWrapper from "../modules/FadeInWrapper";
import Header from "../modules/Header";
import TreeView from './TreeView';
import ArtistView from './ArtistView';

export default class PostListing extends React.Component {
  state = {
    view: this.props.view,
    scrollTop: 0,
    percentage: 0,
    postList: [],
    postListQuest: []
  }
  handleScroll = () => {
    let h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight',
        ih = window.innerHeight;
    let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - (ih || h.clientHeight)) * 100;
    let distance =
      document.getElementById(`treeHider`).getBoundingClientRect().top;
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
          workname: postEdge.node.frontmatter.workname,
          startDate: postEdge.node.frontmatter.startDate,
          startTime: postEdge.node.frontmatter.startTime,
          location: postEdge.node.frontmatter.location,
          composedin: postEdge.node.frontmatter.composedin,
          dedicatedTo: postEdge.node.frontmatter.dedicatedTo,
          author: postEdge.node.frontmatter.author,
          date: postEdge.node.frontmatter.date,
          category: postEdge.node.frontmatter.category,
          excerpt: postEdge.node.excerpt,
          timeToRead: postEdge.node.timeToRead,
          thumbnail: postEdge.node.frontmatter.thumbnail,
          description: postEdge.node.frontmatter.description,
        })
      };
      if(postEdge.node.frontmatter.title && postEdge.node.frontmatter.date <= today ) {
        postListPusher();
      }
    });
    postList.sort(function(a,b){
      return parseInt(a.title) - parseInt(b.title)
    })
    this.setState({
      postList: postList
    })
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
    if(this.state.view === "treeView") {
      window.addEventListener('scroll', this.handleScroll);
    }
    this.getPostList()
  }
  componentWillUnmount = () => {
    if(this.state.view === "treeView") {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
  render = () => {
    // TREEVIEW RENDER METHOD
    if(this.state.view == "treeView") {
      return (
        <div id={this.state.view} className={`${this.state.view}`} style={{backgroundImage: "url(" + this.props.img + ")"}} >
          <Header percentage={this.state.percentage} />
            {/* Your post list here. */
            this.state.postList.map(post =>
              <div key={post.title}>
                  <TreeView {...post} percentage={this.state.percentage} treeHiderScrollTop={this.state.scrollTop}/>
              </div>
            )}
        </div>
      )
    } // ARTISTVIEW RENDER METHOD
    else if(this.state.view === "artistView") {
      let questList = [];
      let renderMethod = (postList) => {
        return (
          <div id={this.state.view} className={`${this.state.view} flex wrap center basePad`} >
              {/* Your post list here. */
              postList.map(post =>
                <div key={post.title}>
                    <ArtistView {...post}
                      percentage={this.state.percentage}
                      treeHiderScrollTop={this.state.scrollTop}
                      height="200"
                    />
                </div>
              )}
          </div>
        )
      } // CHECK WHICH ARTIST TYPE FILTER TO APPLY
      if(this.props.artistType) {
        if(this.props.artistType === "alle"){
          return renderMethod(this.state.postList)
        } else if(this.props.artistType.length>0) {
          this.state.postList.forEach(post=>{
            if(post.tags.indexOf(this.props.artistType) !== -1){
              questList.push(post)
            }
          })
          return renderMethod(questList);
        }
      } else {
        return renderMethod(this.state.postList)
      }
    } //DEFAULT RENDER METHOD
    else {
      <div className="flex center" id={this.state.view}>
        {/* Your post list here. */
        this.state.postList.map(post =>
          <div key={post.title} >
            <Link to={post.title}><p>
              {post.title}
            </p></Link>
          </div>
        )}
      </div>
    }
  }
}
