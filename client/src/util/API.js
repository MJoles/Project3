import axios from "axios";

export default {
  // Gets all jobs
  getJobs: function() {
    return axios.get("/jobs");
  },
  // Gets the jobs with the given id
  getJobs: function(id) {
    return axios.get("/jobs/" + id);
  },
  // Deletes the jobs with the given id
  deleteJobs: function(id) {
    return axios.delete("/jobs/" + id);
  },
  // Saves a job to the database
  saveJobs: function(jobData) {
    return axios.post("/newjob", jobData);
  }
};
