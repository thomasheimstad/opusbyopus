import React from "react";
import Helmet from "react-helmet";
import Nav from "../components/modules/Nav";
import '../css/index.scss';
import config from "../../data/SiteConfig";
export default class MainLayout extends React.Component {
  state = {
    lang: "no",
    showLangContent: false,
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
    } else if (currentPath === "categories/") {
      title = "Categories";
    } else if (currentPath === "about/") {
      title = "About";
    } else if (currentPath.indexOf("tags/")) {
      const tag = currentPath
        .replace("tags/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.indexOf("categories/")) {
      const category = currentPath
        .replace("categories/", "")
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
        </Helmet>
        <div>
          <Nav handleLangClick={((e) => this.handleLangClick(e))} showLangContent={this.state.showLangContent} lang={this.state.lang}/>
          {children()}
        </div>
      </div>
    )
  }
}
