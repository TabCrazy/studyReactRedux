/**
 * Created by TabTang on 2017/3/5.
 */
import * as types from '../constants/';

const initData = [
        {
            "id":10001,
            "title":"我的第一篇笔记",
            "content":"我的第一篇日记的内容就是学习react、react-router、",
            "time":"2017-3-5",
        },
        {
            "id":10002,
            "title":"我的第二篇笔记",
            "content":"我的第二篇日记的内容就是学习redux、react-redux、redxu-thunk",
            "time":"2017-3-5",
        }
    ]

export const addNote = (title,content)=>{
    return {
        type:types.ADD_NOTE,
        title,
        content
    }
}

export const loadNotes = (data)=>{
    return {
        type:types.LOAD_NOTES,
        data
    }
}

export function asynloadNotes(){
    //异步ajax请求放置此处
    return dispatch=>{
        setTimeout( ()=>{
            dispatch( loadNotes(initData) )
        },10)

    }
}

export const showNote = (data)=>{
  return {
    type:types.VIEW_NOTE,
    data
  }
}

export function asynShowNote(id){
  return dispatch=>{
    let showData = initData.filter( item=> item.id === id )
    setTimeout(  ()=>{
      dispatch( showNote( showData[0] ) )
    },10)
  }
}
