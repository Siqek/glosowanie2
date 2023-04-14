const express = require(`express`)
const cors = require(`cors`)
const mysql = require(`mysql`)

const app = express()

const port = 8080

app.use(cors())

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "project"
})

con.connect((err) => {
    if (err) console.log(err)
    else console.log("connected to DB")
})
app.get(`/`, (req, res) => {
    res.send("ok /")
})

app.get(`/select/cand`, (req, res) => {
    const sql = "SELECT * FROM `Candidates`"

    con.query(sql, (err, result, fileds) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

app.get(`/select/voters`, (req, res) => {
    const sql = "SELECT * FROM `Voters`"

    con.query(sql, (err, result, fileds) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

//app.get(`/select/countVoters`, (req, res) => {
//    
//})


app.listen(port)