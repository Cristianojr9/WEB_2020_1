const initialState = {
    num1: 0,
    num2: 0
}

function reducer(state = initialState, action){
    switch(action.type){
        case 'NOVO_NUM1':
            return {
                ...state,
                num1: action.payload
            }
        case 'NOVO_NUM2':
            return {
                ...state,
                num2: action.payload
            }
        default:
            return state
    }
}

export default reducer;