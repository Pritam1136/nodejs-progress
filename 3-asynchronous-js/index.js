const fs = require("fs");
const { resolve } = require("path");
const superagent = require("superagent");

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) reject("Could not find file. 😒😒😒");
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) {
        reject("could not find.");
      }
      resolve("Success !!!!!!");
    });
  });
};

readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    //   console.log(data);

    return superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random
`
    );
  })
  .then((res) => {
    // console.log(res.body.message);
    return writeFilePro("dog-img.txt", res.body.message);
  })
  .then(() => {
    console.log("Random dog image saved to file !");
  })
  .catch((err) => {
    console.log(err);
  });

// fs.readFile(`${__dirname}/dog.txt`, "utf-8", (err, data) => {});
