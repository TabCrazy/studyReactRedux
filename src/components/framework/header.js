/**
 * Created by TabTang on 2017/2/22.
 */
import React , { Component  } from 'react';
import { Link } from 'react-router';

class Head extends Component {
    render() {
        return (
            <header  className = "header">
                <div className = "logo"> LOGO </div>
                <div className = "menu">
                    <ul>
                        <li><Link to="/" activeClassName="curr" onlyActiveOnIndex={true}>Metro</Link></li>
                        <li><Link to="/notes" activeClassName="curr">Notes</Link></li>
                    </ul>
                </div>
            </header >
        )
    }
}
export default Head