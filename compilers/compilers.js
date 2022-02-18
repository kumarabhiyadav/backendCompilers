import { execPromise } from "../utils/helper.js";

const filesPath = "src/languageFiles";

async function c_lang() {
  try {
    let result = await execPromise("cd");
    execPromise(`cd ${filesPath}/C`);
    result = await execPromise("cd");

    return result;

    // let result = await execPromise("gcc main.c -o main");
    // result = await execPromise("main.exe");

    console.log(result);
    return result;
  } catch (error) {
    // console.log(error.message);
    return error.message;
  }
}

async function python_lang() {
  try {
    execPromise(`cd ${filesPath}/python`);
    let result = await execPromise("python main.py");

    console.log(result);
    return result;
  } catch (error) {
    // console.log(error.message);
    return error.message;
  }
}

async function java_lang() {
  try {
    execPromise(`cd ${filesPath}/java`);
    let result = await execPromise("javac HelloWorld.java");
    result = await execPromise(`cd ${filesPath}/java`);
    result = await execPromise("java HelloWorld");

    console.log(result);
    return result;
  } catch (error) {
    // console.log(error.message);
    return error.message;
  }
}
// c_lang();

export { c_lang, python_lang, java_lang };
