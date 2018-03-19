import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: ${props => props.height || 'auto'};

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
    font-family: 'object-fit: ${props => props.fit || 'cover'} !important; object-position: ${props => props.position || '50% 50%'} !important;'
  }
`
export default class BgImage extends React.Component {
  state = {
    windowWidth: '',
    windowHeight: ''
  }
  handleResize = () => {
    let w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;
        this.setState({
          windowWidth: x,
          windowHeight: y
        })
  }
  componentDidMount = () => {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
  }
  render = () => {
    let divHeightOrd = this.props.height;
    let divHeightMobile = this.props.height/2;

    return (
      <StyledImage sizes={this.props.sizes}
        height={this.state.windowWidth > 768 ? this.props.height+"px" : this.props.height/2+"px"}
        position={this.props.position}
        fit={this.props.fit} />
    )
  }
}
