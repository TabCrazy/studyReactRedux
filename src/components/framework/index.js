/**
 * Created by TabTang on 2017/2/22.
 */
import React , { Component  } from 'react';
import Head from './header';
import Foot from './footer';

class Framwork extends Component {
    render() {
        return (
            <div className="wrap">
                <Head/>
                <div className="content">
                    {this.props.children}
                </div>
                <Foot/>
            </div>
        )
    }
}
export default Framwork