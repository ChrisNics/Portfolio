const dotenv = require("dotenv");
const express = require("express");
const app = express();
const path = require("path");
const Email = require("./public/email");

dotenv.config({ path: "./config.env" });

app.use(express.json({ limit: "10kb" }));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "public"));
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/email", async (req, res) => {
  const email = req.body.email;
  await new Email(email).sendHire();

  res.status(200).json({
    status: "success",
  });
});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(process.env.PORT || 5000);

// Next one is successfull message if the email sa actually sent.
