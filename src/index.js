import express from "express";
import eFileUpload from "express-fileupload";
import bodyParser from "body-parser";
import cors from "cors";
import {
  c_lang,
  python_lang,
  java_lang,
  javascript_lang,
} from "./compilers/compilers.js";
import { write_source_code_to_file } from "./utils/fileWriter.js";

const app = express();
app.use(eFileUpload());
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: "500mb" }));

app.use(
  bodyParser.urlencoded({
    limit: "500mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.post("/c", async function (req, res) {
  let { source_code } = req.body;
  console.log(source_code);
  await write_source_code_to_file(source_code, req.url.replace("/", ""));
  let data = await c_lang();

  return res.json({
    result: true,
    data,
  });
});
``;
app.post("/python", async function (req, res) {
  let { source_code } = req.body;

  await write_source_code_to_file(source_code, req.url.replace("/", ""));
  let data = await python_lang();
  return res.json({
    result: true,
    data,
  });
});

app.post("/java", async function (req, res) {
  let { source_code } = req.body;

  await write_source_code_to_file(source_code, req.url.replace("/", ""));
  let data = await java_lang();
  return res.json({
    result: true,
    data,
  });
});

app.post("/javascript", async function (req, res) {
  let { source_code } = req.body;
  await write_source_code_to_file(source_code, req.url.replace("/", ""));
  let data = await javascript_lang();
  return res.json({
    result: true,
    data,
  });
});

app.get("/", (req, res) => {
  return res.send("code-compiler-server working");
});

// app.put("/", (req, res) => {
//   return res.send("Received a PUT HTTP method");
// });

// app.delete("/", (req, res) => {
//   return res.send("Received a DELETE HTTP method");
// });

app.listen(3010, () => console.log(`Example app listening on port 3010!`));
