const express = require ("express")
const PORT = 4545
const app = express ()
require("./db")
app.use(express.json())
const {studentsPage, findOneStudent, addStudent} = require ("./studentsController")
const students = require ("./student")

app.get ("/:allStudents", studentsPage)

app.get ("/username/:fullname", (req,res) => {
const name = req.params.fullname
res.status (200).json(`welcome mr ${name}`)
})

app.get ("/student/:studentId", findOneStudent)

app.post("/newStudent", addStudent)

app.listen (PORT, () => { 
console.log ("my app is running on port 4545")

})
