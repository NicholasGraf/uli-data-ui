import { BaseElement } from "./BaseElement.js";

export class App extends BaseElement {
  constructor() {
    super();
  }

  render() {
    this.innerHTML = `
        <app-header></app-header>
        <page-container></page-container>
    `;
  }
}
