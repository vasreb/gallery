import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import User from './../User/User.jsx';
import fetchData from './../../actions/fetchData';

class Users extends React.Component {
    componentDidMount() {
        this.load();
    }

    load = () => {
        this.props.dispatch(fetchData('https://jsonplaceholder.typicode.com/users', 'users'));
    }

    render() {
        const { users, isError, isLoading } = this.props;

        if (isError.isError) {
            return ( <div className="users">
                <h2 className="users__title">Oops! This is error:</h2>
                <p className="users__title--error">{isError.error.toString()}</p>
                <h2 className="users__title--button" onClick={this.load}>Press to try again</h2>
            </div>
            )
        }

        const userCards = users.map(user => (<li key={user.id}><User user={user} /></li>))
        return (
            <div className="users">
                <h2 className="users__title">{isLoading ? 'Loading...' : 'Users:'}</h2>
                <ul className="users__list">
                    {userCards}
                </ul>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

function mapStateToProps(state) {
    const {users, isError, isLoading} = state;
    return {
        users,
        isError,
        isLoading
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);