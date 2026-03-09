// Frontend
// var signIn = document.getElementById("sign-in");
// var signUp = document.getElementById("sign-up");

// function signInFn() {
//   signUp.style.display = "none";
//   signIn.style.display = "block";
// }

// function signUpFn() {
//   signUp.style.display = "block";
//   signIn.style.display = "none";
// }

// function closeModel() {
//   signUp.style.display = "none";
//   signIn.style.display = "none";
// }

// var uname = document.getElementById("username");
// var phone = document.getElementById("contact");
// var mailId = document.getElementById("email");
// var pwd = document.getElementById("password");
// let form = document.getElementById("input-form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   //   console.log(uname.value, phone.value, mailId.value, pwd.value);

//   let formData = {
//     username: uname.value,
//     contact: phone.value,
//     email: mailId.value,
//     password: pwd.value,
//   };

//   console.log(formData);

//   axios.post("http://127.0.0.1:8080/createUser", formData).then((msg) => {
//       console.log("User registered successfully", msg);
//       alert("User registered successfully");
//       uname.value = "";
//       phone.value = "";
//       mailId.value = "";
//       pwd.value = "";
//     }).catch((err) => {
//       alert("Registration failed");
//       console.log("Registration failed", err);
//     });
// });


// Importing packages
const mysql = require("mysql2")
const express = require("express");
const cors = require("cors");

// Initialising 
const app = express();
app.use(express.json());
app.use(cors());

// Creating DB connection
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "#Mysql@15899",
  database: "mydb"
});

// Creating user functionality
app.post("/createUser", (req, res) => {
  console.log(req);
  try {
    const { username, contact, email, password } = req.body;
    const query = `INSERT INTO clients (username, contact, email, password) VALUES ('${username}', '${contact}', '${email}', '${password}')`;
    con.query(query, function(err, result){
        if (err) 
            throw err;
        console.log("1 record inserted", result);
        res.status(200).send("User created successfully")
    })
  } catch (err) {
    res.status(400).send(err)
    console.log(err)
  }
});

// Main server
const startServer = () => {
  app.listen(8080, () => {
    console.log("Server listening at port 8080");
  });

  // Connecting DB
  con.connect(function (err) {
    if (err) throw err;
    console.log("DB Connected successfully");
  });
};

startServer();
