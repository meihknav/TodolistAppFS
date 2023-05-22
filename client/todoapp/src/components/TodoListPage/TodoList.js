import { useState,useEffect } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import JobItem from '../JobItem/JobItem';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import * as httpRequest from './api/httpRequest';
function TodoListPage() {
const [jobValue,setJobValue] = useState('');
  const [jobs,setJobs] = useState([]);

  //getJobs to set jobs state
  console.log(jobs);
  const getJobs = async () => {
    try{
       await axios.get('http://localhost:3000/data')
      .then(res => res.data)
      .then((jobs) => {setJobs(jobs)});
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect (()=>{
    getJobs();
  },[])

  //Delete Jobs
  const handleDeleteJob = async(id) => {
    try{
         const res = await axios.delete(`http://localhost:3000/data/${id}`,{
            "job": jobValue ,
            "time": 24,
            "description": "finish all math exercise"
        })
        console.log(res.data);
        const deleteId = id;
        console.log(deleteId);
        const newjobs = jobs.filter(job=> job.id !== deleteId)
        setJobs(newjobs);
      }
      catch (error) {
        console.log(error);
      }
  }

  //Add 1 job
  const handlePostJob = (value) => {
    try{
    axios.post('http://localhost:3000/data',{
          "job": value,
          "time": 24,
          "description": "finish all math exercise"
      })
      .then(res => {
        const result = res.data
        return result
      })
      .then((result)=> {setJobs([...jobs,result])})
    }
    catch (error) {
      console.log(error);
    }
  }
   //Render
    return ( 
        <div className='wrapper'>
        <div className="inner">
          <header className='header'>
            <h1 className='title'>ToDoList </h1>
          </header>
          <div className='content' >
            <div className='input-area'>
            <Input value={jobValue} placeholder="TYPE JOB IN HERE" className="input" onChange={(e)=>{
              setJobValue(e.target.value)
            }}/>
            <Button title="Add" className="btn" color="red" width="90px" onClick={()=>{
              handlePostJob(jobValue)
              }}/> 
         
    
            </div>
            {
              jobs && jobs.map((item) => {
                return (
                <>
                <JobItem title={item.job} />
                <Button title="Delete" className="btn" color="red" width="90px" onClick={()=>{
                  handleDeleteJob(item.id)
                  }}/>
                </>
                )
              })

            }

            <div className="btn-action" style={{marginLeft : 200}}>
                <Link to="/edit"><Button title="Edit" className="btn" color="green" width="50px"/></Link>
            </div>
          </div>
        </div>
       </div>
     );
}
export default TodoListPage;