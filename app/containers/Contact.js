import React from 'react'
import {connect} from 'react-redux'
import Menu from '../components/Menu'

class Contact extends React.Component {
    render () {
        console.log(this.props.item)
        return (
            <div className="row">
                <div className="col-12">
                <Menu />
                </div>
                {this.props.item
                    ?
                    <table>
                        <tbody>
                            <tr>
                                <td>Name:</td>
                                <td>{this.props.item.name}</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>{this.props.item.email}</td>
                            </tr>
                            <tr>
                                <td>Age:</td>
                                <td>{this.props.item.age}</td>
                            </tr>
                        </tbody>
                    </table>
                    :
                    <div>
                        <h3>404</h3>
                        <p>Contact not found</p>
                    </div>
                }
            </div>
        );
    }
}

var mapStateProps = function(state, ownProps) {
    return {
        item: function () {
            return state.items.filter(function(it) {
                return Number(it.id) == Number(ownProps.params.id);
            })[0];
        }(),
        ownProps
    }
}

export default connect(mapStateProps)(Contact);