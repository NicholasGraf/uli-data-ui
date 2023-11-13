import { config } from "../../config.js";
import { init } from "./core/Init.js";
import { api } from "./core/Api/Api.js";
import { Events } from "./core/Events.js";
import { Router } from "./core/Router.js";
import { Components } from "./core/Components.js";
import { Transformer } from "../js/core/Api/Transformer.js";

let appObject = {
  api: api,
  config: config,
  events: new Events(),
  components: new Components(),
  transformer: new Transformer(),
};
appObject.router = new Router(appObject.config, appObject.events, appObject.storage);

init(appObject);
