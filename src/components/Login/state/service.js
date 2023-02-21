import axios from 'axios';

export const loginProfile  = async(loginDetails)=>{
    const response = await axios({
        method:"GET",
        url:"https://delta.mathiti.tech/wp-json/hire360/v1/validate_user"
    });
    console.log(response.data);
    return response.data;
};