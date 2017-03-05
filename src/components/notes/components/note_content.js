/**
 * Created by TabTang on 2017/3/5.
 */
import React , { Component , PropTypes } from 'react';

export default class NoteContent extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="note_content">
                <div className="note_content_title"></div>
                <div className="note_content_time"></div>
                <div className="note_content_content"></div>
            </div>
        )
    }
}