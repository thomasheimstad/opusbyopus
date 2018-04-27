module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "Grieg | minutt for minutt", // Site title.
  siteTitleAlt: "Edvard Grieg, minutt for minutt, opus for opus", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "http://thomasheimstad.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Edvard Grieg, liste over alle opusnumrene", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "UA-118285877-1", // GA tracking ID.
  googleSiteVerification:"",
  disqusShortname: "http-grieg-minutt-for-minutt", // Disqus shortname.
  postDefaultCategoryID: "opus", // Default category for posts.
  userName: "KODE - Edvard Grieg Museum", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Bergen, Norge", // User location to display in the author segment.
  userAvatar: "", // User avatar to display in the author segment.
  userDescription:
    "Edvard Griegs opusliste er hele 74 verk lang!", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Twitter",
      url: "https://twitter.com/KODEBERGEN",
      iconClassName: 'FaTwitter'
    },
    {
      label: "Email",
      url: "mailto:info@troldhaugen.no",
      iconClassName: 'FaEnvelope'
    }
  ],
  copyright: "Copyright © 2018. KODE", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#3D9970", // Used for setting manifest and progress theme colors.
  backgroundColor: "#FDFEFD" // Used for setting manifest background color.
};
