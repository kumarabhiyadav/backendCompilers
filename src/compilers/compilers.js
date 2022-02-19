import { execPromise } from "../utils/helper.js";


const filePathsAndExcuter = {
  'javascript': 'node src/languageFiles/javascript/index.js',
  'javac': 'javac src/languageFiles/java/HelloWorld.java',
  'java': 'java src/languageFiles/java/HelloWorld',
  'c': 'gcc src/languageFiles/C/main.c -o main',
  'c-output': 'src/languageFiles/C/main.exe',
  'python': 'py src/languageFiles/python/main.py'
}



async function c_lang() {
  try {
    let result = await execPromise(filePathsAndExcuter.c);
    console.log(result);
    result = await execPromise(filePathsAndExcuter["c-output"]);
    console.log(result);
    return result;
  } catch (error) {
    // console.log(error.message);
    return error.message;
  }
}

async function python_lang() {
  try {
    let result = await execPromise(filePathsAndExcuter.python);

    return result;
  } catch (error) {
    return error.message;
  }
}




async function java_lang() {
  try {

    let result = await execPromise(filePathsAndExcuter.javac);
    result = await execPromise(filePathsAndExcuter.javac);
    return result;
  } catch (error) {
    return error.message;
  }
}

async function javascript_lang() {
  try {
    let result = await execPromise(filePathsAndExcuter.javascript);
    return result;
  } catch (error) {
    return error.message;
  }
}
// c_lang();

export { c_lang, python_lang, java_lang, javascript_lang, };
