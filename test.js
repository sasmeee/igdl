const instagramDl = require("./index");

const url = "https://www.instagram.com/reel/Co3tkGLL8nl/";

async function run() {
  try {
    const dataList = await instagramDl(url);
    console.log(dataList);
  } catch (error) {
    console.error("Error:", error);
  }
}

run();
