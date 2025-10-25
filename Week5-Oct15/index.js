const express = require('express');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log("request coming through");
  next();
});

app.get('/', (req, res) => {
  res.send({ msg: "Health Check" })
});

app.get('/test', (req, res) => {
  res.send({ msg: "Test Msg" })
});

let users = [
  {
    name: 'finn',
    age: 28, 
    email: 'finn@gmail.com'
  },  
  {
    name: 'damien',
    age: 30, 
    email: 'damien@gmail.com'
  },
];

app.get('/users', (req, res) => {
  res.send({ success: true, data: users })
});

// POST: Send back user (Name, age, email)
app.post("/user", (req, res) => {
  // const name = req.body.name;
  // const age = req.body.age;
  // const email = req.body.email;
  const { name, email, age } = req.body;

  const newUser = { name: name, age: age, email: email };
  
  users.push(newUser);
  res.send( { success: true, data: newUser } );
});

// DELETE
app.delete("/users", (req, res) => {
  const index = users.findIndex((user) => user.name === req.body.name);

  if (index === -1) {
    res.send({ success: false, error: "No user was found with that name"});
  }

  // if valid element found
  users.splice(index, 1);
  res.send({ success: true, data: users});
});

// PUT / PATCH
app.put("/users", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  const index = users.findIndex((user) => user.name === name);
  
  if (index === -1) {
    res.send({ success: false, error: "No user was found with that name"});
  }

  const updatedUser = {...users[index], age};
  users[index] = updatedUser;

  res.send({ success: true, data: users});
});

app.listen(3000, () => { console.log("Running Server")});

