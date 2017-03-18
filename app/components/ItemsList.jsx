var React = require('react');
var SearchBar = require('./SearchBar');
import {Link} from 'react-router';

class ItemsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: props.items};
        console.log('===CONSTRUCT===')
    }

    componentDidMount() {
        if (!this.props.meta.cached)
            this.props.loadItems();
    }

    componentWillReceiveProps(props) {
        if (this.props != props) {
            this.setState({items: props.items});
        }
    }

    filterList(text) {
        let items = this.props.items.filter(function(item) {
            return (item.name.toLowerCase().search(text.toLowerCase()) !== -1);
        });
        this.setState({items});
    }

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <ul className="list-group">
                    <li className="list-group-item" key="search-li-item">
                        <SearchBar filter={this.filterList.bind(this)} placeholder="Filter items" />
                    </li>
                    {
                        this.state.items.map(function(item) {
                            return (<li key={item.email + item.name} className="list-group-item">
                                <Link to={'/contact/' + item.id}>{item.name}</Link>
                            </li>)
                        })
                    }
                    {this.props.meta.loading?
                        <li className="list-group-item" key="loading-li-item">Loading...</li>
                        :
                        ''
                    }
                </ul>
            </div>
        );
    }
}

module.exports = ItemsList;