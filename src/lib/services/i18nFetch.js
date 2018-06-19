import XHRBackend from "i18next-xhr-backend";

export function ajaxFetch(url, { init = {} } = {}, callback) {
  fetch(url, init)
    .then((res) => {
      if (res.ok) {
        return res.text()
          .then((json) => {
            callback(json, res);
          });
      }

      return callback("", res);
    });
}

export class FectchBackend extends XHRBackend {
  constructor(services, opts = {}) {
    const options = Object.assign({ ajaxFetch }, opts);

    super(services, options);

  }
}