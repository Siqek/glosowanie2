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

app.get(`/select/:table`, (req, res) => {
    const table = req.params.table
    const sql = `SELECT * FROM ${table}`

    con.query(sql, (err, result, fields) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

//app.get(`/select/count/:table`, (req, res) => {
//    const table = req.params.table
//    const sql = `SELECT COUNT(*) as len FROM ${table}`
//
//    con.query(sql, (err, result, fields) => {
//        if (err) console.log(err)
//        else res.send(result)
//    })
//})

app.get(`/insert/voter/:pesel/:cand`, (req, res) => {
    const sql = `INSERT INTO voters VALUES (null, '${req.params.pesel}', '${req.params.cand}')`

    con.query(sql, (err, result, fields) => {
        if (err) console.log(err)
        else res.send("added")
    })
})

app.get(`/insert/cand/:name/:surname`, (req, res) => {
    const sql = `INSERT INTO candidates VALUES (null, '${req.params.name}', '${req.params.surname}')`

    con.query(sql, (err, result, fields) => {
        if (err) console.log(err)
        else res.send("added")
    })
})

app.listen(port)