
import React, { createContext} from 'react';
import { BrowserRouter,Routes,Route, NavLink } from 'react-router-dom';
import StudentRegistration from './studentRegistration';
import StudentManagement from './studentManagement';
import { StudentDataArr } from './intialStdudentData';
import { useState } from 'react';
import "./index.css"
import StudentDataView from './studentDataView';
import EditStudentData from './editStudentData';

export let store=createContext()
   
   
function Index() {
    const [studentsData,setStudentsData] = useState(StudentDataArr)
    const [filterData,setFilterData]  = useState([])

 //   console.log(StudentDataArr)

  return (<>
  <store.Provider value={{studentsData,setStudentsData,filterData,setFilterData}}>
  <BrowserRouter>
      <section id="navSection">
        <div className="navBar">
       <NavLink className="navlinks"  to="/"><h2>Student Register</h2></NavLink>
       <NavLink className="navlinks" to="/studentManagement"><h2>Student Activity</h2></NavLink>
       </div>
       </section>

       <Routes>
        <Route path="/" element={<StudentRegistration/>}/>
        <Route path="/studentManagement" element={<StudentManagement/>}/>
        <Route path="/oneStudentDataView/:studentID"  element={<StudentDataView/>}/>
        <Route path="/editDtudentData/:studentID"   element={<EditStudentData/>}/>
       </Routes>
       </BrowserRouter>
       </store.Provider>
  </>)
}

export default Index