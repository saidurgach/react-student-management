import React, { useEffect } from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { store } from '.';
import { useNavigate } from 'react-router-dom';
import AllStudentsData from './allStudentsData';
import FilteredStudents from './filterStudents';





function StudentManagement() {

    const {studentsData,setStudentsData,filterData,setFilterData} = useContext(store)
    const[searchInputData,setSearchInputData] = useState("")
   
    useEffect(()=>{
        let filterStudentsData = studentsData.filter((student,index)=>{
            if(`${student.name}${student.email}${student.class}`.toLowerCase().includes(searchInputData.toLowerCase())==true){
                return true
            }
        })
        setFilterData(filterStudentsData)
    },[searchInputData])

    function display(){
        if(filterData.length>0 && searchInputData!=""){
            return <FilteredStudents/>
        }else if(filterData.length==0 && searchInputData!=''){
             return <div><b>No Student Found</b></div>
        }
        else{
            return <AllStudentsData/>
        }
    }


  return (
   <>
   <section id="studentData">
   

   
        <div style={{marginTop:"55px",padding:"0px"}}>
            <h1 style={{textAlign:"center",margin:"2px",padding:"0px"}}>Student List</h1>
            <input className='searchInput' value={searchInputData} type='text' placeholder='Search Student Name or email or class' onChange={(e)=>{setSearchInputData(e.target.value)}}/>
            {display()}
        </div>
   </section>
   </>
  )
}

export default StudentManagement