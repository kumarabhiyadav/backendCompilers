import { execPromise } from "../utils/helper.js";

async function c_lang() {
  try {
    let result = await execPromise("gcc main.c -o main");
    result = await execPromise("main.exe");

    console.log(result);
    return result;
  } catch (error) {
    // console.log(error.message);
    return error.message;
  }
}

async function python_lang() {
  try {
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
    let result = await execPromise("javac HelloWorld.java");
    result = await execPromise("cd languageFiles/java");

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
