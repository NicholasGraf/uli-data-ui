import { BasePage } from "../../assets/js/components/BasePage.js";

export class Home extends BasePage {
  constructor() {
    super();
    this.data = null;
  }

  get pageContainer() {
    return document.querySelector(app.config.pageContainerSelector);
  }

  async update(route) {
    this.setTitle(route.display);
    let tableDemo = document.querySelector("#tableDemo");

    /** Local Demo JSON Data */
    let data = await app.api.getDemoData();

    /** Real API Endpoint Data */
    // app.api.setApi("https://yourApiUrl.com/getEndpoint");
    // let data = await app.api.getIotData();

    if (!data || !data.results) {
      this.pageContainer.innerHTML = "API Get Demo Data failed.";
    }

    tableDemo.render({
      head: {
        columns: {
          id: "ID",
          device_id: "Device ID",
          time: "Time",
          tempurature: "Temperature",
          humidy: "Humidity",
          pressure: "Pressure",
        },
      },
      body: app.transformer.forAppTable(data.results),
    });
  }
}
