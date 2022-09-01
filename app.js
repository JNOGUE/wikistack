const express = require("express");
const app = express();
const morgan = require("morgan");
const layout = require("./views/layout");
const { db, Page, User } = require("./models");
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/users");

app.use("/wiki", wikiRouter);

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res, next) => {
  // res.send(layout("This is the page with CSS"));
  res.redirect("/wiki");
});

// ... other stuff

const init = async () => {
  // await Page.sync();
  // await User.sync();
  await db.sync({ force: true });
  // make sure that you have a PORT constant
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

init();
