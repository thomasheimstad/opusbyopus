import React from 'react';
import FadeInWrapper from '../modules/FadeInWrapper';
import NavLink from 'gatsby-link';


export default class TreeView extends React.Component {
  state = {
    scrollTop: 0,
    spanHeight: 0,
    viewScrollPct: 0
  }
  handleScroll = () => {
    let opus = document.getElementById(`${this.props.path}`)
    let distance = opus.getBoundingClientRect().top;
    let viewHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let viewScrollPct = distance/viewHeight*100;
    this.setState({
      scrollTop: distance,
      viewScrollPct: viewScrollPct
    })
  }
  componentDidMount = () => {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
    this.setState({
      spanHeight: document.getElementById(`${this.props.path}`).clientHeight / 15 || document.getElementById(`${this.props.path}`).scrollHeight / 15 ||
      document.getElementById(`${this.props.path}`).offsetHeight / 15
    })
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }
  render = () => {
    let equalScrollTopChecker = this.props.percentage >= this.state.viewScrollPct+this.state.spanHeight;
    return(
      <FadeInWrapper id={this.props.title}>
        <div className="opusHandler">
          <NavLink excact to={this.props.path} className="flex row">
            <span id={this.props.path} className={equalScrollTopChecker ? "fatso" : "thinman"}></span>
            <div className="flex column wrap">
              <h2>
                {this.props.category == "opus" ? "Opus "+this.props.title : this.props.title}
              </h2>
              <p>
                {this.props.workname ? this.props.workname : this.props.tags}
              </p>
            </div>
          </NavLink>
        </div>
      </FadeInWrapper>
    )
  }
}
