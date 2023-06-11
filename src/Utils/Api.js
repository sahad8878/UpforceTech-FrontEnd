
import axios from '../Axios/Axios'

export const baseUrl = 'https://upfrocetech-backend.onrender.com';
// export const baseUrl = 'http://localhost:8080'
 

export const addUserData = async (postData) => {
    try{
        console.log(postData,"postData");
        const response = await axios.post(`/add-userData`, postData);
        return response.data;
    }catch(error) {
        console.error('Error add userdata:', error);
        throw error;
    }
}

export const fechUserData = async (currentPage,search) => {
    try {
        const response = await axios.get(`/fech-userData?page=${currentPage}&limit=2&search=${search}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching userData:', error);
        throw error;
      }
}


export const fechEditUserData = async (userId) => {
    try {
        const response = await axios.get(`/fech-editUserData?userId=${userId}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching EditUserData:', error);
        throw error;
      }
}

export const updateUserData = async (data) => {
    try {
        const response = await axios.post(`/edit-UserData`,data);
        return response.data;
      } catch (error) {
        console.error('Error fetching EditUserData:', error);
        throw error;
      }
}

export const deleteUserData = async (id) => {

  try {
    const response = await axios.delete(`/delet-UserData?id=${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching EditUserData:', error);
    throw error;
  }
}

export const viewUserDetails = async (id) => {

  try {
    const response = await axios.get(`/view-UserDetails?id=${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching EditUserData:', error);
    throw error;
  }
}