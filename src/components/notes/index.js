/**
 * Created by TabTang on 2017/2/22.
 */
import React , { Component } from 'react';
import { connect }  from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './actions';
import NoteList from './components/note_list';
import NoteContent from './components/note_content';
import NoteContentDefault from './components/note_content_default';

class Notes extends Component {

    constructor(props){
        super(props)

    }

    componentWillMount(){
        const { actions } = this.props;
        actions.asynloadNotes()
    }

    render() {
        const { actions , notesData , showNoteData , isEdit } = this.props;
        let cont = showNoteData ? <NoteContent showNoteData={showNoteData} actions={actions} /> : <NoteContentDefault  actions={actions} />;
        let editCont = isEdit ? <NoteContent showNoteData={showNoteData} actions={actions} /> : cont;
        return (
            <div className="notes_box">
                <div className="notes_sidebar">
                    <NoteList actions={actions} notesData={notesData} />
                </div>
                <div className="notes_content_box">
                  {editCont}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        notesData:state.notesReducers.noteData,
        showNoteData:state.notesReducers.showNote,
        isEdit:state.notesReducers.isEdit
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        actions:bindActionCreators(actions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Notes)
