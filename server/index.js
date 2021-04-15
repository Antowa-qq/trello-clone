const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");

const app = express();

app.use(cors());
app.use(express.json({ extended: true })); // для парсинга json-а, который прилетает в запросе
app.use("/", routes);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

    app.listen(PORT, () => {
      console.log(`App has been started on poort 5000`);
    });
  } catch (e) {
    console.log(`Server error ${e.message} `);
    process.exit(1);
  }
};

start();
