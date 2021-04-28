import React from 'react'
import Welcome from './components/Welcome'
import List from './components/List'
import Greeting from './components/Greeting'
import StudentProfile from "./components/StudentProfile";
import StudentForm from "./components/StudentForm";

function App() {

  const students = ['Ruu', 'Vitoria', 'Kevin', 'Jonah', 'Cesar', 'Nikki', 'Adrian', 'Damian']

  const courseStudents = [
      {
          id: 0,
          firstName: 'Kevin',
          lastName: 'Choi',
          coolShoes: true
      },
      {
          id: 1,
          firstName: 'Nikki',
          lastName: 'Allen',
          coolShoes: false,
          petName: 'Precious'
      }
  ]

  return (
    <>
      <Welcome />
      {/*  <h2>Students Array</h2>*/}
      {/*  {students.map(student =>*/}
      {/*      <Greeting key={student} firstName={student}/>*/}
      {/*  )}*/}
      {/*  <br/>*/}
      {/*  <h2>Course Students Array</h2>*/}
      {/*  {courseStudents.map(courseStudent =>*/}
      {/*      <StudentProfile key={courseStudent.id} student={courseStudent}/>*/}
      {/*  )}*/}
      {/*<p>This is React!</p>*/}
      {/*<List />*/}
      <StudentForm />
    </>
  )
}

export default App
