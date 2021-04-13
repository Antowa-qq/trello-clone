const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();

app.use(express.json({ extended: true }));
app.use("/", routes);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://antowa:123456789aa@cluster0.eadar.mongodb.net/trello-clone?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
    );

    app.listen(5000, () => {
      console.log(`App has been started on poort 5000`);
    });
  } catch (e) {
    console.log(`Server error ${e.message} `);
    process.exit(1);
  }
};

// mongodb+srv://antowa:admin:123456789aa@cluster0.eadar.mongodb.net/trello-clone?retryWrites=true&w=majority

start();
