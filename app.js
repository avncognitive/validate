const express = require("express");
//const indexRouter = require("./routes/index");
const app = express();
var cors = require('cors')
const indexRouter = require("./routes/index");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// all routes to the server should come with /api and redirects to /
app.use(cors());
app.use("/", indexRouter(app));


/* local env */

const http = require("http");
const PORT = 3000;

//listen for request on port 3000, and as a callback function have the port listened on logged
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
/*end local env*/
