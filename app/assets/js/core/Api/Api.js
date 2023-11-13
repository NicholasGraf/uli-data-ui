import { get } from "./Get.js";
import { local } from "./Local.js";

class Api {
  constructor(get, local) {
    this.api = null;
    this.get = get;
    this.local = local;
    this.accessToken = null;
  }
  setApi(url) {
    this.api = url;
  }
  setAccessToken(token) {
    this.accessToken = token;
  }
  getAuthorizationHeaders() {
    return `bearer ${this.api.accessToken}`;
  }
  getJsonHeaders() {
    let headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    if (api.accessToken) {
      headers.Authorization = this.getAuthorizationHeaders();
    }
    return headers;
  }

  /* START Custom Endpoints
  -------------------------------------------------------------*/

  // GET API Data
  getIotData(callback, errorCallback) {
    return get.get({
      url: this.api,
      headers: this.getJsonHeaders(),
      callback: callback,
      errorCallback: errorCallback,
      responseType: "json",
    });
  }

  // GET Local JSON Demo
  getDemoData(callback, errorCallback) {
    return this.local({
      url: "/data/data.json",
      responseType: "json",
      callback: callback,
      errorCallback: errorCallback,
    });
  }
}

export const api = new Api(get, local);
