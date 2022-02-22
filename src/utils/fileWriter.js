import fs from "fs";

const filePaths = {
  javascript: "src/languageFiles/javascript/index.js",
  javac: "src/languageFiles/java/HelloWorld.java",
  c: "src/languageFiles/C/main.c",
  python: "src/languageFiles/python/main.py",
};
async function write_source_code_to_file(source_code, lang) {
  fs.writeFileSync(filePaths[lang], source_code, (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
}

export { write_source_code_to_file };
