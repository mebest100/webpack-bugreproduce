const express = require('express')

const app = express()


app.use(express.static("./dist"));
app.use("/test/",express.static("./dist")); // express静态资源管理 



const port = 9000;

module.exports = app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Listening on http://localhost:" + port + "\n");
});