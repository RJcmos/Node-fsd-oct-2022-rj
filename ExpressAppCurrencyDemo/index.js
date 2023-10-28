const express = require("express");
const server = express();

const currencyRoutes = require("./routes/currencies.routes");

// I am Regestring ROUTES

server.use("/currencies", currencyRoutes);
// server.use("/blog");

const port = 3005;
server.listen(port, () => {
  console.log("listing on the port ExpressAppCurrencyDemo ", port);
});