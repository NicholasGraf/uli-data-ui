import { BaseElement } from "./BaseElement.js";

export class TableRow extends BaseElement {
  constructor(data) {
    super();
    this.columnObj = data ? data.columns : [];
  }
  connectedCallback() {
    if (!Object.keys(this.columnObj).length) {
      return;
    }
    this.render();
  }
  render() {
    if (!Object.keys(this.columnObj).length) {
      this.innerHTML = "Empty row.";
    }
    for (const [key, value] of Object.entries(this.columnObj)) {
      let column = new TableColumn(key, value);
      this.append(column);
    }
  }
}

export class TableColumn extends BaseElement {
  constructor(className, content) {
    super();
    this.content = content || "";
    this.className = className || "";
  }
  connectedCallback() {
    if (!this.content) {
      return;
    }
    this.render();
  }
  render() {
    this.innerHTML = this.content;
  }
}

export class AppTable extends BaseElement {
  constructor() {
    super();
  }
  get tableHead() {
    return this.querySelector(".table-head");
  }
  get tableBody() {
    return this.querySelector(".table-body");
  }
  render(data) {
    this.data = data || [];
    if (!this.data.length) {
      this.innerHTML = "Empty table.";
    }
    this.innerHTML = `
        <div class="table-head"></div>
        <div class="table-body"></div>
    `;
    if (this.data.head) {
      let row = new TableRow(this.data.head);
      this.tableHead.append(row);
    }
    if (this.data.body) {
      this.data.body.forEach((i) => {
        let rowObj = i,
          row = new TableRow(rowObj);
        this.tableBody.append(row);
      });
    }
  }
}
