const app = require("./index");
const connect = require("./configs/db");

app.listen(3000, async function () {
  await connect();
  console.log("listening on port 3000");
});
