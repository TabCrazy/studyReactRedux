/**
 * Created by TabTang on 2017/3/5.
 */
import React , { Component , PropTypes } from 'react';

export default class NoteItem extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const {content,title,time} = this.props;

        return (
            <div className="note_item">
                <div className="note_item_title">{title}</div>
                <div className="note_item_time">{time}</div>
                <div className="note_item_content">{content}</div>
            </div>
        )
    }
}