import express from "express";
import { c_lang, python_lang, java_lang } from "./compilers/compilers.js";

const app = express();

app.get("/c", async function (req, res) {
  let data = await c_lang();
  console.log(data);
  await setTimeout(() => {}, 2000);
  return res.json({
    result: true,
    data,
  });
});
app.get("/python", async function (req, res) {
  let data = await python_lang();
  console.log(data);
  await setTimeout(() => {}, 2000);
  return res.json({
    result: true,
    data,
  });
});

app.get("/java", async function (req, res) {
  let data = await java_lang();
  console.log(data);
  await setTimeout(() => {}, 2000);
  return res.json({
    result: true,
    data,
  });
});

// app.post("/", (req, res) => {
//   return res.send("Received a POST HTTP method");
// });

// app.put("/", (req, res) => {
//   return res.send("Received a PUT HTTP method");
// });

// app.delete("/", (req, res) => {
//   return res.send("Received a DELETE HTTP method");
// });

app.listen(3000, () => console.log(`Example app listening on port 3000!`));