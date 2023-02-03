const api = require("./constants");

const getbaseUrl = () => {
    let url = {
        api: api.BASE_URL,
    };
    return url;
};

module.exports = {
  baseUrl: getbaseUrl(),
};
