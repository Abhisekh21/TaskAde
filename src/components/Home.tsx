import react from 'react';
import styles from './Home.module.css'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className={styles.imageContainer}>
                <img src="https://Abhisekh21.github.io/TaskAde/images/home.webp" alt="HOME" className={styles.home} />
                <div className={styles.box}>
                    <p style={{ color: 'black', fontWeight: 'bolder', fontSize: '50px', textAlign: 'center' }}>Change the way you manage your<br></br> Task with taskade</p>
                    <Button variant="contained" sx={{ position: 'relative', left: '40%', fontSize: '20px', padding: '10px', backgroundColor: '#0B8D81' }} onClick={() => {
                        navigate('add-new-task')

                    }}>CREATE TASK</Button>

                </div>
            </div>
        </>
    )
}
export default Home