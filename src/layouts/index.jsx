import React from "react";
import Helmet from "react-helmet";
import '../css/index.scss';
import NavBar from "../components/modules/NavBar";
import Nav from "../components/modules/Nav";
import config from "../../data/SiteConfig";
export default class MainLayout extends React.Component {
  state = {
    lang: "no",
    showLangContent: false,
    showNav: false
  }
  handleLangClick = (e) => {
    if(this.state.lang == "no" && e.target.id == "en"){
      this.setState({
        lang: "en"
      })
    } else if(this.state.lang == "en" && e.target.id == "no"){
      this.setState({
        lang: "no"
      })
    }
    this.setState({
      showLangContent: !this.state.showLangContent
    })
  }
  handleNavClick = () => {
    this.setState({
      showNav: !this.state.showNav
    })
  }
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";
    if (currentPath === "") {
      title = "Home";
    } else if (currentPath === "tags/") {
      title = "Tags";
    } else if (currentPath === "kategorier/") {
      title = "Kategorier";
    } else if (currentPath === "info/") {
      title = "Info";
    } else if (currentPath.indexOf("tags/")) {
      const tag = currentPath
        .replace("tags/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.indexOf("kategorier/")) {
      const category = currentPath
        .replace("kategorier/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `${capitalize(category)}`;
    }
    return title;
  }
  componentDidMount = () => {
    window.scrollTo(0,1);
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
          <meta name="google-site-verification" content={config.googleSiteVerification} />
          <meta name="mobile-web-app-capable" content="yes" />
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel='stylesheet'/>
          <link href="https://fonts.googleapis.com/css?family=Pathway+Gothic+One" rel='stylesheet'/>
          <script src="https://griegminuttforminutt.no/intersection-observer.js"></script>

        </Helmet>
        <div>
          <NavBar
            handleLangClick = {((e) => this.handleLangClick(e))}
            handleNavClick = {(() => this.handleNavClick())}
            showNav = {this.state.showNav}
            showLangContent = {this.state.showLangContent}
            lang = {this.state.lang}
          />
          <Nav
            showNav = {this.state.showNav}
            handleNavClick = {(() => this.handleNavClick())}
            loc = {this.props.location.pathname}
          />
          <div
            className={this.state.showNav ? 'overlay' : 'overlayOut'}
            onClick={this.state.showNav ? this.handleNavClick : null}>
          </div>
          {children()}
        </div>
      </div>
    )
  }
}
