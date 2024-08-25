const Add=(heading:string,description:string)=>{
    return {
        type:'Add',
        payload:{heading,description}
    }

}

export default Add