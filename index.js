import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/create-post", (req, res) => {
  res.render("createPost.ejs");
});

app.get("/manage-blogs", (req, res) => {
  res.render("manageBlog.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
