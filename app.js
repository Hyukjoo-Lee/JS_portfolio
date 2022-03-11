// Express sever
const express = require("express");
const app = express();

const data = require("./data.json").projects;

// Static route for css and client side JS
// Reference the public folder (setting middleware)
app.use("/static", express.static("public"));
app.use(express.json());

app.set("view engine", "pug");

//index
app.get("/", (req, res) => {
  res.render("index", { data });
});

//about
app.get("/about", (req, res) => {
  res.render("about");
});

//projects
app.get("/projects/:id", (req, res) => {
  const projectId = req.params.id;
  let targetprojects = data[projectId];

  res.render("project", { targetprojects });
});

//server
app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
