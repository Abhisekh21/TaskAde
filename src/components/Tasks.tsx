import { Card, CardContent, Typography } from '@mui/material'
import react from 'react';
interface childprops {
    heading: string,
    description: string
}

const TaskData = (props: childprops) => {
    const { heading, description } = props
    console.log(1)
    return (
        <>
            <Card style={{display:'flex',justifyContent:'center',alignItems:'center',border:'1px solid red'}}>
                <CardContent>
                    <Typography variant='h5' sx={{fontWeight:'bold'}}>{heading}</Typography>
                    <Typography variant='h6'>{description}</Typography>

            </CardContent>

        </Card >

            </>
    )

}

export default TaskData