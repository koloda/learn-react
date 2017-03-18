import React from 'react'
import ItemsList from '../components/ItemsList'
import NewItemForm from '../components/NewItemForm'
import {connect} from 'react-redux'
import Menu from '../components/Menu'
import dispatchActions from '../actions/contactApp'

class ContactsApp extends React.Component {
    render () {
        return (
            <div className="row">
                <div className="col-12">
                    <Menu />
                </div>
                <div className="col-sm-12 col-md-7">
                    <ItemsList items={this.props.items} title="Users list" meta={this.props.meta} loadItems={this.props.loadItems}/>
                </div>
                <div className="col-sm-12 col-md-5">
                    <NewItemForm addItem={this.props.addItem}/>
                </div>
            </div>
        );
    }
}

var mapStateProps = function(state, ownProps) {
    return {
        items: state.items,
        title: state.title,
        meta: state.meta,
        ownProps
    }
}

export default connect(mapStateProps, dispatchActions)(ContactsApp);