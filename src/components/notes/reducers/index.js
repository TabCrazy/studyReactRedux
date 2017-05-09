/**
 * Created by TabTang on 2017/2/22.
 */
import * as types from '../constants'

const initState = {
    noteData:[],
    showNote:null,
    isEdit:false
}
export default function notes(state = initState , action) {
    switch(action.type){
        case types.LOAD_NOTES:
            return {
                ...state,
                noteData:action.data
            }
            break;
      case types.VIEW_NOTE:
            return {
              ...state,
              showNote:action.data
            }
            break;
        default:
            return state
    }
}
