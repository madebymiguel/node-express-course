fs = require("fs").promises;

async function makeFile() {
  try {
    await fs.writeFile("./content/practice2.txt", "This is the first line.\n", {
      flag: "w",
    });

    for (let i = 2; i <= 10; i++) {
      await fs.appendFile("./content/practice2.txt", `This is line ${i}\n`, {
        flag: "a",
      });
    }
  } catch (error) {
    console.error(error);
  }
}
