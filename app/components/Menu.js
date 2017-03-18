import React from 'react';
import {Link} from 'react-router';

export default class Menu extends React.Component {
    render () {
        return (
            <div>
                <ul className="nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" activeClassName="active">About</Link>
                    </li>
                </ul>
            </div>
        );
    }
}