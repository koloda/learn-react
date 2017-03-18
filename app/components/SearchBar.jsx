var React = require('react');

class SearchBar extends React.Component {
    onTextChanged(e) {
        let text = e.target.value.trim();
        this.props.filter(text);
    }

    render() {
        return (
            <input className="form-control" type="search" placeholder={this.props.placeholder} onChange={this.onTextChanged.bind(this)} />
        );
    }
}

module.exports = SearchBar;