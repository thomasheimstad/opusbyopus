import React from 'react';

export default class ScrollToAnchor extends React.Component {
  state = {
    opacity: 0
  }
  getElementY = query => {
    return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
  }
  doScrolling = (element, duration) => {
  	let startingY = window.pageYOffset
    let elementY = this.getElementY(element)
    // If element is close to page's bottom then window will scroll only to some position above the element.
    let targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
  	let diff = targetY - startingY
    // Easing function: easeInOutCubic From: https://gist.github.com/gre/1650294
    let easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
    let start
    if (!diff) return
  	// Bootstrap our animation - it will get called right before next frame shall be rendered.
  	window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp
      // Elapsed miliseconds since start of scrolling.
      let time = timestamp - start
  		// Get percent of completion in range [0, 1].
      let percent = Math.min(time / duration, 1)
      // Apply the easing.
      // It can cause bad-looking slow frames in browser performance tool, so be careful.
      percent = easing(percent)
      window.scrollTo(0, startingY + diff * percent)
  		// Proceed with animation as long as we wanted it to.
      if (time < duration) {
        window.requestAnimationFrame(step)
      }
    })
  }
  setTimer = () => {
    setTimeout(() =>
      this.setState({
        opacity: 1
      }),1500
    )
  }
  componentDidMount = () => {
    this.setTimer();
  }
  render = () => {
    let styles = {
      zIndex: "99",
      opacity: this.state.opacity,
      transition: "0.5s ease-in",
      marginBottom: '1rem'
    }
    return(
      <div style={styles}>
        {this.props.children}
        <div onClick={() => { this.doScrolling("#"+this.props.anchorId, this.props.scrollSpeed) }} className="mouse scrollToAnchorMouse">
          <div className="scrollbutton scrollToAnchorButton"></div>
        </div>
      </div>
    )
  }
}
