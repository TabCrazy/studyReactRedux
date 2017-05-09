/**
 * Created by gy-01 on 2017/5/9.
 */
import React , {Component} from 'react';

export default class NoteContentDefault extends Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="content_default">
        <h5>欢迎您！你接下来可以做。</h5>
        <div className="tips">请点击列表预览文章</div>
        <div className="add_note_btn">点击新建文章</div>
      </div>
    )
  }

}
