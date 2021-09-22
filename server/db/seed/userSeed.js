const { User } = require("../model/user");
const { sequelize } = require("../connection");

User.sync({ force: true }).then(async () => {
  await User.create({
    username: "Kenzie",
    password: "Cat12345",
  });
  console.log("Created Tables and Completed Seeding");
  sequelize.close();
});
