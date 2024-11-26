import React from 'react'
import { useParams } from 'react-router-dom'
import { store } from '.';
import { useContext } from 'react';

function StudentDataView() {
    const {studentsData,setStudentsData} = useContext(store)
    const {studentID}= useParams()
     //console.log(studentID)

     let  studentData= studentsData.find((student,index)=>{
             if(studentID==student.id){
                return true;
             }
     })

 //  console.log(studentData)
  return (<>
         <section id="studentDataContainer">
          <div className='studentDatacontainer'>
             
            {studentData ?  
                   <div className='studentDataview'  style={{marginTop:"40px"}}>
                      <h1 style={{textAlign:"center",margin:"0px"}}>Student Data<hr></hr></h1>
                    <p><b>Student Name</b>    : {studentData.name}</p>
                    <p><b>Student Email</b>   : {studentData.email}</p>
                    <p><b>Student Age</b>     : {studentData.age}</p>
                    <p><b>Student Class</b>   : {studentData.class}</p>
                    <p><b>Student Phone</b>   : {studentData.phone.replace(/-/g, '')}</p>
                    <p><b>Student Address</b> : {studentData.address}</p>
                   </div>
                   
            :""}
          </div>
         </section>
      
  </>)
}

export default StudentDataView