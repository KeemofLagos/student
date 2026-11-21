const students = require ("./model")
const studentsPage = (req,res) => {

    res.status (200).json(students)

}

const findOneStudent =  (req,res) => {
const id = req.params.studentId 

const student = students.find ((ele) => ele.id == id)
if (!student){
    return res.status(404).json ("Student with the id does not exist")
}

res.status (200).json(student) 
}

const addStudent = (req,res) => {
console.log(req.body) 

const studentProfile = { 

    name: req.body.name,
    score: req.body.score,
    remark: req.body.remark 
}
students.create(studentProfile)
res.status (201).json ("new students have been successfully created")
}
module.exports = {studentsPage, findOneStudent, addStudent} 