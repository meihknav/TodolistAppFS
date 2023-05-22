import { useState } from "react";
import axios from "axios";
function UpdateForm() {

    const [jobUpdate, setJobUpdate] = useState({
        jobName: '',
        id: ''
    })
    const [jobs,setJobs] = useState([]);
    console.log(jobs);
    console.log('re-render')
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
    
    const handlePutJob = async (data) => {
        try{
        await axios.put(`http://localhost:3000/data/${data.jobId}`,{
              "job": data.jobName ,
              "time": 24,
              "description": "finish all math exercise"
          })
          .then(res => {
            const result = res.data
            return result;
          })
          .then((result)=>{setJobs([...jobs,result])})
        }
        catch (error) {
          console.log(error);
        }
      }

    const handleChangeJob = (e) => {
        setJobUpdate({...jobUpdate,jobName: e.target.value});
    }
    const handleChangeJobId = (e) => {
        setJobUpdate({...jobUpdate,id: e.target.value});
    }

    const handleSubmitJob = (e) => {
        e.preventDefault();
        const jobData = {
            jobName: jobUpdate.jobName,
            jobId: jobUpdate.id,
        }
        getJobs();
        handlePutJob(jobData);
    }

    return ( 
        <form onSubmit={handleSubmitJob} className="job-form" style={{padding : '20px'}}>
            <div className="job-form__controls">
                <div className="job-form__control">
                    <label>JobName</label>
                    <input value={jobUpdate.jobName} type="text" placeholder="Type Job You Want Update" onChange={handleChangeJob}></input>
                </div>
                <div className="job-form__control">
                    <label>Id</label>
                    <input value={jobUpdate.id} type="text" placeholder="Type ID Job You Want Update" onChange={handleChangeJobId}></input>
                </div>
            </div>
            <button type="submit">Update Job</button>
        </form>
     );
}

export default UpdateForm
