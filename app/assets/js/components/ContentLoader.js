import { BaseElement } from "./BaseElement.js";

export class ContentLoader extends BaseElement {
  constructor() {
    super();
    this.loaderText = this.textContent != "" ? this.textContent : "Loading...";
  }
  render() {
    this.innerHTML = `<div class="loader-img"></div>
                      <div class="loader-text">${this.loaderText}</div>`;
  }
}
