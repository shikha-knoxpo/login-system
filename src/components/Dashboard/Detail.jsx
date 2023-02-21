import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import image1 from "./images/image1.png";
import HelpIcon from '@mui/icons-material/Help';

export const Detail = () => {
    const details = [{id:1},{id:2},{id:3}]
    return(
        <>
         <p style={{fontSize:'20px'}}>Work in progress</p>
        <div style={{display:'flex'}}>
        {details.map((e)=>{
            return(<>
           
        <div style={{margin:'10px',borderRadius:'15px',alignItems:'start',alignContent:'start',textAlign:'left'}}>
        <img src={image1} style={{borderRadius:'10px'}} ></img>
        <p style={{color:'grey',fontWeight:'bold',margin:'0px'}}>Communication and Skills</p>
        <p style={{color:'grey',margin:'0px'}}>Effective Communication</p>
        <HelpIcon sx={{ fontSize: 20,marginTop:'5px' }}></HelpIcon>
        <span style={{color:'grey',margin:'0px',fontSize:'15px',margin:'0px',padding:'0px'}}>10 Questions</span>
        </div>

        
            </>)
        })}

        
        </div>
        <div style={{display:'flex'}}>
        {details.map((e)=>{
            return(<>
           
        <div style={{margin:'10px',borderRadius:'15px',alignItems:'start',alignContent:'start',textAlign:'left'}}>
        <img src={image1} style={{borderRadius:'10px'}} ></img>
        <p style={{color:'grey',fontWeight:'bold',margin:'0px'}}>Communication and Skills</p>
        <p style={{color:'grey',margin:'0px'}}>Effective Communication</p>
        <HelpIcon sx={{ fontSize: 20,marginTop:'5px' }}></HelpIcon>
        <span style={{color:'grey',margin:'0px',fontSize:'15px',margin:'0px',padding:'0px'}}>10 Questions</span>
        </div>

        
            </>)
        })}

        
        </div>
        
        
        </>
    )
}

export default Detail;