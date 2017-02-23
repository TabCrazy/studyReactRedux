/**
 * Created by TabTang on 2017/2/22.
 */

const initState = {
    'title':'aaaa'
}
export default function notes(state = initState , action) {
    switch(action.type){
        case "ADD":
            console.log('add')

        default:
            return state
    }
}