const express = require("express");
const bodyParser = require("body-parser");

const App = express();

const port = process.env.PORT || 3000;

App.use(bodyParser.urlencoded({ extended: false }));
App.use(bodyParser.json());

const Companies = require("./api/Companies");
const Employees = require("./api/Employees");

App.use("/companies", Companies);
App.use("/employees", Employees);

App.use((req, res, next) => {
  res.header("Access-Controll-Allow-Origin", "*");
  res.header("Access-Controll-Allow-Header", "*");
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Controll-Allow-Methods",
      "PUT , POST , PATCH , DELETE , GET"
    );
    return res.status(200).json({});
  }
  next();
});

App.use((req, res, next) => {
  const error = new Error("Not find any");
  error.status = 404;
  next(error);
});

App.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

App.listen(port, () => console.log(`server run on port ${port}`));
