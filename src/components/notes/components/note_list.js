/**
 * Created by TabTang on 2017/3/5.
 */
import React , { Component , PropTypes } from 'react';
import NoteItem from './note_item';

export default class NotesList extends Component {
    constructor(props){
        super(props)
    }
    render(){

        const { actions , notesData } = this.props;

        let items = notesData.map( item =>{
            return <NoteItem key={`note_${item.id}`} {...item} />
        });

        return (
            <div className="note_list">
                <h4>笔记<span>共{notesData.length}条</span></h4>
                {items}
            </div>
    )
    }
}