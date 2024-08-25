
const reducer= (state = { Tasks: [{heading:'New Task',description:'New Task Description'}] }, action: any) => {
    switch (action.type) {
        case 'Add':
            return { ...state, Tasks: [...state.Tasks, action.payload] }
        default:
            return state
    }
}
export default reducer