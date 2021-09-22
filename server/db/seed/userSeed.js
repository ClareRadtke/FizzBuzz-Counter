const { User } = require("../model/user");
const { sequelize } = require("../connection");

function seedUser() {
  User.sync({ force: true }).then(async () => {
    await User.create({
      id: 1,
      username: "Kenzie",
      password: "Cat12345",
    });
    console.log("Created Tables and Completed Seeding");
  });
}

module.exports.seedUser = seedUser();
