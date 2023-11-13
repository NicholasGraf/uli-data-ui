export class BasePage {
  constructor() {}
  setTitle(title) {
    document.title = `${app.config.appName} | ${title}`;
  }
}
