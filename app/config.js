export const config = {
  appName: "Uli's IoT Data",
  appRootSelector: "app-root",
  pageContainerSelector: "page-container",
  routes: {
    "/": {
      active: true,
      display: "Home",
      html: "pages/Home/home.html",
      css: "pages/Home/home.css",
      js: "pages/Home/home.js",
    },
  },
  events: {
    pageLoaded: "pageLoaded",
  },
};
