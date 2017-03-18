var React = require('react');

class NewItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {buttonClass: '', formClass:'hidden'};
    }

    showForm () {
        this.setState({buttonClass: 'hidden', formClass: ''});
    }

    onFormSubmit (e) {
        e.preventDefault();
        let user = {};

        user.id = new Date().getTime();
        user.name = this.refs.name.value.trim();
        user.email = this.refs.email.value.trim();
        user.age = this.refs.age.value.trim();
        user.pass = this.refs.pass.value.trim();

        this.props.addItem(user);
        this.refs.name.value = this.refs.email.value = this.refs.age.value = this.refs.pass.value = this.refs.passRepeat.value = '';
    }

    validateUser () {
        console.log('---validation---')

        if (this.refs.pass.value !== this.refs.passRepeat.value) {
            this.refs.passRepeat.setCustomValidity('Passwords must match');
        } else {
            this.refs.passRepeat.setCustomValidity('');
        }
    }

    elog(e) {
        console.log(e);
    }

    render() {
        return (
            <div>
                <button className={"btn show-form-btn " + this.state.buttonClass} onClick={this.showForm.bind(this)}>Add new user</button>
                <form ref="form" onSubmit={this.onFormSubmit.bind(this)} className={"form " + this.state.formClass}>
                    <input className="form-control" type="text" ref="name" required placeholder="Name" minLength="3" />
                    <input className="form-control" type="email" ref="email" required placeholder="Email" />
                    <input className="form-control" type="number" ref="age" required placeholder="Age" min="18" max="150" step="1" />
                    <input className="form-control" type="password" ref="pass" required placeholder="Password" onInput={this.validateUser.bind(this)} />
                    <input className="form-control" type="password" ref="passRepeat" required placeholder="Confirm password" onInput={this.validateUser.bind(this)} />
                    <input className="btn brn-success" type="submit" value="Save" onClick={this.elog} />
                </form>
            </div>
        );
    }
}

module.exports = NewItemForm;