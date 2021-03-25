import express, { json } from "express";
import middleware from "./middleware.js";
const app = express();
const port = 3000;

//to parse post body and convert to json, in restful.http
app.use(express.json());
app.use(middleware());

app.post("/", (req, res) => {
  // var sum = Number(req.query.a) + Number(req.query.b);

  res.json({
    //  query: req.query,
    //ip: req.ip,
    //body: req.body,
    answer: Number(req.body.a) + Number(req.body.b),
  });
  //res.json({ amir: "55" });
});

//3ways to get data from user :
//1-in get request recive data in query mode.
//2-in post request , recive data inside body of req.
//3-using path names in app.get function inside app.js (below)
app.get("/", (req, res) => {
  // res.type("application/json");
  var ans = Number(req.query.a) + Number(req.query.b);

  res.json({
    // params: req.params,
    // query: req.query,
    // ip: req.ip,
    // body: req.body,
    C: req.query.c,
    answer: ans,
  });
});
//making a loop and it will start the server, it is a app.listen uses a port  to response to requests. its express's webserver.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
