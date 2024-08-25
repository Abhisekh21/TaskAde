import { Button } from '@mui/material';
import react from 'react';
import { useNavigate } from 'react-router-dom';

const  PageNotFound = ()=>{
    const navigate = useNavigate()
    return (
        <>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <img src='./images/404.png' style={{maxWidth:'500px',maxHeight:'400px'}}></img>
            <Button variant='outlined' onClick={()=>{
                navigate('/')

            }}>GO TO HOMEPAGE</Button>
        </div>
        </>
    )
}
export default PageNotFound