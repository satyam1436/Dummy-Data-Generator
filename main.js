const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require("./models/Employee")

mongoose.connect("mongodb://localhost:27017/company")
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})

app.get('/generate', async (req, res) => {

    // Clear the colection Employee

    await Employee.deleteMany({})

    // Generate random data

    let names = ["Satyam", "Shabnam", "Shweta", "Swati", "Akash", "Aradhya", "Ankit", "Neha", "Saurav", "Gaurav"]
    let sal = [50000, 60000, 70000, 80000, 90000, 100000, 200000, 300000, 400000, 500000]
    let lang = ["Python", "Java", "CPP", "C", "MERN", "MEAN", "JavaScript", "Ruby", "Rust", "Go", "Kotlin"]
    let city = ["New York", "Mumbai", "Delhi", "Jamshedpur", "Patna", "Kolkata", "Bhopal", "Pune", "Raipur"]
    let isMan = [true, false]




    for (let i = 0; i < 10; i++) {


        let n = names[Math.floor(Math.random() * names.length)]
        // console.log(n)
        let s = sal[Math.floor(Math.random() * sal.length)]
        // console.log(s)
        let l = lang[Math.floor(Math.random() * lang.length)]
        // console.log(l)
        let c = city[Math.floor(Math.random() * city.length)]
        // console.log(c)
        let im = isMan[Math.floor(Math.random() * isMan.length)]
        // console.log(im)

        let e = await Employee.create({
            name: n,
            salary: s,
            language: l,
            city: c,
            isManager: im
        })

    }

    // let e = await Employee.create({
    //     name: "Satyam",
    //     salary: 4500000,
    //     language: "Python",
    //     city: "Jamshedpur",
    //     isManager: true
    // })
    // console.log(e)

    res.render('index', { foo: 'FOO' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
