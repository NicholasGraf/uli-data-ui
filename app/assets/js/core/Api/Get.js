class Get {
  constructor() {}
  async get(url, headers, callback, errorCallback, responseType) {
    return await fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((data) => {
        if (responseType === "blob") {
          return data.blob();
        }
        if (responseType === "text") {
          return data.text();
        }
        return res;
      })
      .then((res) => {
        if (callback) {
          callback(res);
          return;
        }
        return res;
      })
      .catch((error) => {
        if (errorCallback) {
          errorCallback(error);
          return;
        }
        console.error(error);
      });
  }
}

export const get = new Get();
