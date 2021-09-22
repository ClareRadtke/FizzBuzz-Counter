const express = require("express");
const session = require("express-session");
const { sequelize } = require("./db/connection");
const { User } = require("./db/model/user");
const { seedUser } = require("./db/seed/userSeed");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  session({
    secret: "gT3TESk4yaV0G9Rm38cZ",
    cookie: {},
    maxAge: 900000,
    rolling: true,
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
      db: sequelize,
    }),
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Login route
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        username,
      },
    });
    if (!user) {
      res
        .status(401)
        .send({ message: "Incorrect username or password, please try again" });
      return;
    }
    const validPassword = await user.checkPassword(password);
    if (!validPassword) {
      res
        .status(401)
        .send({ message: "Incorrect username or password, please try again" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;
      res.status(200).json({ username: user.username });
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

sequelize
  .sync({ force: false })
  .then(seedUser)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Now listening to server: http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error(err));
