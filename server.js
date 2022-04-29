// import mongoose & express
const mongoose = require("mongoose");
const express = require("express");

// intrduce express method & port
const app = express();
const PORT = process.env.PORT || 9527;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes"));

// useFindAndModify: True by default. Set to false to make findOneAndUpdate() and findOneAndRemove() use native findOneAndUpdate() rather than findAndModify().

// useNewUrlParser: MongoDB driver has deprecated their current connection string parser. Because this is a major change, they added the useNewUrlParser flag to allow users to fall back to the old parser if they find a bug in the new parser. You should set useNewUrlParser: true unless that prevents you from connecting.

//useUnifiedTopology: False by default. Set to true to opt in to using the MongoDB driver's new connection management engine. You should set this option to true, except for the unlikely case that it prevents you from maintaining a stable connection.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/snsdb", {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// all executed methods log output to console
mongoose.set("debug", true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
