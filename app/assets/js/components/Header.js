import { BaseElement } from "./BaseElement.js";

export class Header extends BaseElement {
  constructor() {
    super();
  }

  render() {
    this.innerHTML = `
        <div class="logo">${app.config.appName}</div>
      `;
  }
}
