import React from 'react';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

class Contact extends React.Component {
  state = {
    showContactInfo: false
  };

  onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };

  onEditClick = () => {
    console.log('test');
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{' '}
                <i
                  className="fas fa-sort-down"
                  onClick={this.onShowClick}
                  style={{ cursor: 'pointer' }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                ></i>
                <Link
                  className="fas fa-edit"
                  style={{
                    cursor: 'pointer',
                    float: 'right',
                    color: 'green',
                    marginRight: '1rem'
                  }}
                  to={`contact/edit/${id}`}
                ></Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item"> Email: {email}</li>
                  <li className="list-group-item"> Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
