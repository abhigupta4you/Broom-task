import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app =express();

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'broom'

})
db.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err);
    } else {
      console.log("Connected to MySQL");
    }
  });

  app.post("/api/saveData", (req, res) => {
    const { name, email, username, password, cnfpassword } = req.body;
    const sql = "INSERT INTO data (name, email, age, city, country) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [name, email, username, password, cnfpassword], (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.json({ message: "  saved successfully!" });
      }
    });
  });


app.listen(8081, ()=>{
    console.log("running successfully")
});