import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import react, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import TaskData from './Tasks';
import Add from '../redux/action'


interface Istate{
    Tasks:[{heading:'',description:''}]
}

const CreateTask = () => {
    const [heading, setHeading] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const dispatch = useDispatch()

    const {Tasks} = useSelector((state:Istate)=>{
        return state
    })

   

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5%', }}>
                <Card >
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignitems: 'center' ,gap:'10px'}}>

                        <TextField placeholder='Task Heading' value={heading} variant='outlined' multiline onChange={(e) => {
                            setHeading(e.target.value)
                        }}></TextField>

                        <Typography>Here You Enter Your Task</Typography>

                        <TextField placeholder='Task Description' value={description} multiline
                            rows={4}  variant='outlined' onChange={(e) => {
                                setDescription(e.target.value)
                            }}></TextField>

                        <Button  variant='contained' disabled={heading.length < 1 || description.length < 1} sx={{background:'#0B8D81'}} onClick={()=>{
                            dispatch(Add(heading,description))
                        }}>Add Task</Button>
                    </CardContent>
                </Card>
            </div>
            <h4 style={{textAlign:'center'}}>Here is your Task Listed</h4>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px',flexWrap:'wrap'}}>
          {
                Tasks.map((obj)=>{
                    return <TaskData {...obj} />
                })
            }
          </div>
        </>
    )
}
export default CreateTask