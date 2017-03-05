/**
 * Created by TabTang on 2017/2/22.
 */
import * as types from '../constants'

const initState = {
    noteData:[]
}
export default function notes(state = initState , action) {
    switch(action.type){
        case types.LOAD_NOTES:
            return {
                ...state,
                noteData:action.data
            }
            break;
        default:
            return state
    }
}