import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
// const ASSIGNMENTS_URL = `${API_BASE}/assignments`;
// const COURSES_URL = `${API_BASE}/courses`;


const COURSES_URL = "https://kanbas-node-server-app-uu6q.onrender.com/api/courses";
const ASSIGNMENTS_URL = "https://kanbas-node-server-app-uu6q.onrender.com/api/assignments";



export const createAssignment = async (courseId, assignment) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/assignments`,
    assignment
  );
  return response.data;
};

export const findAssignmentsForCourses = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/assignments`);
  console.log(courseId)
//   console.log(response.data)
  return response.data;
};

export const toUpdateAssignment = async (assignmentId, assignment) => {
  const response = await axios.put(`${ASSIGNMENTS_URL}/${assignmentId}`, assignment);
  return response.data;
};

export const deleteAssignment = async (assignmentId) => {
  const response = await axios.delete(`${ASSIGNMENTS_URL}/${assignmentId}`);
  return response.data;
};