/**
 * Created by TabTang on 2017/2/22.
 */
import React , { Component } from 'react';
import { connect }  from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from './actions'
import NoteList from './components/note_list'

class Notes extends Component {

    constructor(props){
        super(props)

    }

    componentWillMount(){
        const { actions } = this.props
        actions.asynloadNotes()
    }

    render() {
        const { actions , noteData } = this.props;
        return (
            <div className="notes_box">
                <div className="notes_sidebar">
                    <NoteList {...this.props} />
                </div>
                <div className="notes_content_box"></div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        notesData:state.notesReducers.noteData
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        actions:bindActionCreators(actions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Notes)