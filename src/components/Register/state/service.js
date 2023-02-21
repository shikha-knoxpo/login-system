import axios from 'axios';

export const registerProfile  = async(registerDetails)=>{
    const response = await axios({
        method:"POST",
        data:registerDetails,
        url:"https://delta.mathiti.tech/wp-json/hire360/v1/candidate-user-registration/"
    });
    console.log(response.data);
    return response.data;
};