export const local = async (arg) => {
  if (typeof arg == "string") {
    arg = {
      url: arg,
    };
  }
  let response = await fetch(arg.url)
    .then((res) => {
      if (!res) {
        res = "";
      }
      res = arg.responseType && arg.responseType == "json" ? res.json() : res.text();
      return res;
    })
    .catch((error) => {
      return arg.errorCallback ? arg.errorCallback(error) : console.error(error);
    });
  if (arg.callback) {
    arg.callback(response);
  }
  return response;
};
