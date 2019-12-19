const Colors = require("./colorsModel.js");
const db = require("../data/dbConfig.js");

describe("colors model", function() {
  beforeEach(async () => {
    await db("colors").truncate();
  });

  describe("insert()", function() {
    it("should add color to db", async function() {
      await Colors.insert({ name: "White" });
      await Colors.insert({ name: "Blue" });
      await Colors.insert({ name: "Black" });
      await Colors.insert({ name: "Red" });
      await Colors.insert({ name: "Green" });
      await Colors.insert({ name: "Colorless" });

      const colors = await db("colors");
      expect(colors).toHaveLength(6);
    });
  });
});
