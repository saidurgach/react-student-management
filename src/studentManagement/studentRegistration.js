import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { store } from '.'


function StudentRegistration() {

    let {studentsData,setStudentsData} = useContext(store)
  //  console.log(studentsData)
    const [studentinputData,setStudentInputData] = useState({id:"",name:"",email:"",age:"",class:"",address:"",phone:""})

    const handleChange=(field,value)=>{
        setStudentInputData({...studentinputData,[field]:value})
    }

    const studentRegister=(e)=>{
        e.preventDefault();
        let largestStudentID=studentsData[0].id
        for(let i=1;i<studentsData.length;i++){
                 if(studentsData[i].id>largestStudentID){
                    largestStudentID=studentsData[i].id
                 }
        }
        
        const studentDataWithID = {...studentinputData,id:largestStudentID+1}
        setStudentsData([studentDataWithID,...studentsData])
        setStudentInputData({id:"",name:"",email:"",age:"",class:"",address:"",phone:""})
        window.alert("Student Registre Successfully")
    }
   


  return (
       <section id="studentRegistrationSection">
        <div className='registerFormDiv'>
            <h1 style={{textAlign:"center",margin:"0px"}}>Student Register Form<hr></hr></h1>
            <form onSubmit={studentRegister}>
                <div>
                    <label>Enter Student Name:</label><br/>
                    <input value={studentinputData.name} type='text' placeholder='Student Name' onChange={(e)=>{handleChange("name",e.target.value)}} required/>
                </div>
                <div>
                    <label>Enter Student Email:</label><br/>
                    <input value={studentinputData.email} type='email' placeholder='Student Email' onChange={(e)=>{handleChange("email",e.target.value)}} required />
                </div>
                <div>
                    <label>Enter Student Age:</label><br/>
                    <input value={studentinputData.age} type='number' placeholder='Student Age' onChange={(e)=>{handleChange("age",e.target.value)}} required />
                </div>
                <div>
                    <label>Enter Student Class:</label><br/>
                    <input value={studentinputData.class} type='text' placeholder='Student Class' onChange={(e)=>{handleChange("class",e.target.value)}} required />
                </div>
                <div>
                <label>Enter Student Address :</label><br/>
                <input value={studentinputData.address} type='text' placeholder='Student Address' onChange={(e)=>{handleChange("address",e.target.value)}} required />
                </div>
                <div>
                <label>Enter Student Phone Number:</label><br/>
                <input value={studentinputData.phone} type='number' placeholder='Student Phone Number' onChange={(e)=>{handleChange("phone",e.target.value)}} required />
                </div>
                <div style={{textAlign:"center"}}><button style={{height:"40px", width:"100px"}} type='submit'>Register</button></div>
            </form>
        </div>
       </section>
  )
}

export default StudentRegistration
