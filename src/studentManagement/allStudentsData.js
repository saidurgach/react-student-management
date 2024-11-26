import React from 'react'
import { store } from '.'
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ITEMS_PER_PAGE = 8;

function AllStudentsData() {
    const{studentsData,setStudentsData} = useContext(store)

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(studentsData.length / ITEMS_PER_PAGE);

    
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = studentsData.slice(indexOfFirstItem, indexOfLastItem);

  
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const getPaginationRange = () => {
        const range = [];
        const totalButtonsToShow = 3; 

        let startPage = Math.max(2, currentPage - 1);
        let endPage = Math.min(totalPages - 1, currentPage + 1); 

       
        if (currentPage === 1) {
            endPage = Math.min(totalButtonsToShow, totalPages - 1);
        } else if (currentPage === totalPages) {
            startPage = Math.max(2, totalPages - totalButtonsToShow);
        }

       
        for (let i = startPage; i <= endPage; i++) {
            range.push(i);
        }

        return range;
    };



    const navigate = useNavigate()
    //console.log(studentsData)
    
        
        const deleteStudent=(studentID)=>{
            //console.log(studentID)
                  let afterDeleteStudentData = studentsData.filter((student,index)=>{
                        if(student.id!=studentID){
                          //  console.log(student.id)
                            return true
                        }
                  })
                //  console.log(afterDeleteStudentData)
                  setStudentsData(afterDeleteStudentData)
        }
    


  return (<>

<table className="studentTable">
                <tr style={{height:"20px",backgroundColor:"gray"}}>
                    <th>Student Name</th>
                    <th>Student Email</th>
                    <th>Student Class</th>
                    <th>Actions</th>
                </tr>
                { currentItems.map((student,index)=>{
                    return(<>
                    <tr style={{textAlign:"center"}}>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.class}</td>
                    <td className='btnTD'>
                        <button className='viewBtn' onClick={()=>{navigate(`/oneStudentDataView/${student.id}`)}}>View</button>
                        <button className='deleteBtn' onClick={()=>{deleteStudent(student.id)}}>Delete</button>
                        <button className='editBtn' onClick={()=>{navigate(`/editDtudentData/${student.id}`)}}>Edit</button>
                    </td>
                    </tr>
                    </>)
                })}
                </table>
               
           

              
            {/* Pagination Controls */}
            <div className='paginationDiv'>
                <div className='paginationInnerDiv'>
                <button className='paginationButtonsArrows'  onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} style={{color: currentPage === 1 ? 'gray' : 'black',cursor: currentPage === 1 ? 'not-allowed' : 'pointer' ,backgroundColor: currentPage === 1 ? "blanchedalmond":"aqua"  }}>
               <span style={{display:"flex",alignItems:"center",justifyContent:"center"}}> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
  <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
</svg>Previous</span>
                </button>

                <button className='paginationButtons' onClick={() => handlePageChange(1)} disabled={currentPage === 1} style={{color: currentPage === 1 ? 'gray' : 'black',cursor: currentPage === 1 ? 'not-allowed' : 'pointer' ,backgroundColor: currentPage === 1 ? "blanchedalmond":"aqua"  }}>
                    1
                </button>

                {currentPage > 3 && <span>....</span>}
                {getPaginationRange().map((pageNumber) => (
                    <button style={{margin:"0px",color: currentPage === pageNumber ? "gray" : "black",cursor: currentPage === pageNumber ? 'not-allowed' : 'pointer',backgroundColor: currentPage === pageNumber ? "blanchedalmond":"aqua" }} className='paginationButtons'
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        disabled={pageNumber === currentPage}
                      >
                        {pageNumber}
                    </button>
                ))}
                {currentPage < totalPages - 2 && <span>....</span>}
                {totalPages > 1 && (
                    <button style={{margin:"0px",color: currentPage === totalPages ? 'gray' : 'black',cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',backgroundColor: currentPage === totalPages ? "blanchedalmond":"aqua"  }} className='paginationButtons' onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>
                        {totalPages}
                    </button>
                )}

                <button className="paginationButtonsArrows" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} style={{color: currentPage === totalPages ? 'gray' : 'black',cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' ,backgroundColor: currentPage === totalPages ? "blanchedalmond":"aqua" }}>
                   <span style={{ display: 'flex', alignItems: 'center',justifyContent:"center" }}>Next<svg style={{color:"black"}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
  <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
</svg></span>
                </button>
            </div>
            </div>
  </>)
}

export default AllStudentsData