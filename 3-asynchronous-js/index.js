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

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(data);
    const res1pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res2pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res3pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const all = await Promise.all([res1pro, res2pro, res3pro]);

    const imgs = all.map((el) => el.body.message);

    console.log(imgs);
    await writeFilePro("dog-img.txt", imgs.join("\n"));

    console.log("Random dog image saved to file !");
  } catch (err) {
    console.log(err);
    throw err;
  }
  return `2: ready`;
};

(async () => {
  try {
    console.log("1. Dog pic");
    const x = await getDogPic();
    console.log(x);
    console.log(`3. Got a dog`);
  } catch (err) {
    console.log(`error 😒😒😒😒😒`);
  }
})();

/*
console.log("1. Dog pic");
getDogPic()
  .then((x) => {
    console.log(x);
    console.log(`3. Got a dog`);
  })
  .catch((err) => {
    console.log(`error 😒😒😒😒😒`);
  });
*/

/*
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
*/
