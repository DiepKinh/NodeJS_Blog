const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

const route = require("./routes");
const db = require("./config/db");

// Connect to db
db.connect();

const app = express();
const port = 3000;

// cấu hình file tỉnh ( từ các file trong public)
app.use(express.static(path.join(__dirname, "public")));

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTTP Logger
// app.use(morgan("combined"));

// Template engine
// exrname là định nghĩa lại cái đuôi, ban đầu nó là handlebars, nhưng dài nên định nghĩa lại
app.engine("hbs", handlebars({ extname: ".hbs" }));
app.set("view engine", "hbs");

// __dirname nó là sẽ đứng tại nơi cái index đang chạy là blog/src
app.set("views", path.join(__dirname, "resources", "views")); // thực ra nó như này :resources/views, nhưng vì để tích hợp trên nhiều hệ điều hành có thằng dùng / hay \ nên để như này để path.join tự chuyển

// Route init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
