const dns = require("dns");

dns.resolve4("sergij14.dev", (err, address) => {
  console.log(address);
});
