const NodeGeoCoder = require("node-geocoder");
const options = {
  provider: "mapquest",
  httpAdapter: "https",
  apiKey: "9CdH3sADeVqxIpGdRx0TSNmb6874qINA",
  formatter: null,
};
const geocoder = NodeGeoCoder(options);
module.exports = geocoder;
