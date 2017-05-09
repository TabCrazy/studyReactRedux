/**
 * Created by TabTang on 2017/3/5.
 */
import React , { Component , PropTypes } from 'react';

export default class NoteContent extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const {showNoteData} = this.props
        return (
            <div className="note_content">
                <div className="note_content_title">{showNoteData.title}</div>
                <div className="note_content_time">{showNoteData.time}</div>
                <div className="note_content_content">{showNoteData.content}</div>
            </div>
        )
    }
}
