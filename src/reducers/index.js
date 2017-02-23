/**
 * Created by TabTang on 2017/2/22.
 */

import { combineReducers } from 'redux';

//
import metroReducers from '../components/metro/reducers/';
import notesReducers from '../components/notes/reducers/';

const rootReducers = combineReducers({
    metroReducers,
    notesReducers
})

export default rootReducers;