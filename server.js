const express = require("express");
const dotenv = require("dotenv");
//const logger = require("./middleware/logger");
//const morgan = require("morgan");
const colors = require("colors");
const errorHandler = require("./middleware/error");

const connectDB = require("./config/db");

const bootcamps = require("./routes/bootcamps");
const courses = require("./routes/courses");
// load env vars
dotenv.config({ path: "./config/config.env" });
connectDB();

const app = express();

// body parser
app.use(express.json());

//app.use(logger);
//dev logging middleware
// if (process.env.NODE_ENV === "devlopment") {
//   app.use(morgan("dev"));
// }
// mount routers
app.use("/api/v1/bootcamps", bootcamps);
app.use("/api/v1/courses", courses);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
  )
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //close the server and exit process
  server.close(() => process.exit(1));
});
