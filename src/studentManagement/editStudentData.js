import React from 'react'
import { useContext } from 'react';
import { store } from '.';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditStudentData() {
    const {studentsData,setStudentsData} = useContext(store)
    const {studentID}= useParams()
    // console.log(studentID)
    const navigate = useNavigate()

     

     let  studentData= studentsData.find((student)=>{
             if(studentID==student.id){
                return true;
             }
     })
     //console.log(studentData)

   

     const [studentinputData,setStudentInputData] = useState({id:studentData.id,name:studentData.name,email:studentData.email,age:studentData.age,class:studentData.class,address:studentData.address,phone:studentData.phone.replace(/-/g, '')})
   
     const handleChange=(field,value)=>{
        setStudentInputData({...studentinputData,[field]:value})
    }

    const studentRegister=(e)=>{
        e.preventDefault();
        const isConfirmed = window.confirm("Are you sure you want to edit the student data?");
        if(isConfirmed){
            setStudentsData((prev)=>prev.map((student,index)=>{
            if(student.id==studentID){
                return studentinputData
            }else{
                return student
            }
        }))
        window.alert("Student Data Edited Successfully")
        setStudentInputData({id:"",name:"",email:"",age:"",class:"",address:"",phone:""})
        navigate("/studentManagement")
    }
       
    
     
       

    }
   

    ///console.log(studentinputData)



  return (<>
  <section id="editedSection">
    <div className='registerFormDiv'>
    <form onSubmit={studentRegister} >
                <div>
                    <label>Enter Student Name:</label><br/>
                    <input value={studentinputData.name} type='text' placeholder='Student Name' onChange={(e)=>{handleChange("name",e.target.value)}} />
                </div>
                <div>
                    <label>Enter Student Email:</label><br/>
                    <input value={studentinputData.email} type='email' placeholder='Student Email' onChange={(e)=>{handleChange("email",e.target.value)}} />
                </div>
                <div>
                    <label>Enter Student Age:</label><br/>
                    <input value={studentinputData.age} type='number' placeholder='Student Age' onChange={(e)=>{handleChange("age",e.target.value)}} />
                </div>
                <div>
                    <label>Enter Student Class:</label><br/>
                    <input value={studentinputData.class} type='text' placeholder='Student Class' onChange={(e)=>{handleChange("class",e.target.value)}} />
                </div>
                <div>
                <label>Enter Student Address :</label><br/>
                <input value={studentinputData.address} type='text' placeholder='Student Address' onChange={(e)=>{handleChange("address",e.target.value)}} />
                </div>
                <div>
                <label>Enter Student Phone Number:</label><br/>
                <input value={studentinputData.phone} type='number' placeholder='Student Phone Number' onChange={(e)=>{handleChange("phone",e.target.value)}} />
                </div>
                <div style={{textAlign:"center"}}><button style={{height:"40px", width:"100px"}} type='submit'>Edit</button></div>
            </form>
        

    </div>
  </section>
          
  </>)
}

export default EditStudentData