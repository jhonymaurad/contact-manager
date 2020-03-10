import React from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends React.Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'joe@gmail.com',
        phone: '445-565-8976'
      },
      {
        id: 2,
        name: 'Mark Doe',
        email: 'mark@gmail.com',
        phone: '345-565-8976'
      },
      {
        id: 3,
        name: 'Julia Doe',
        email: 'julia@gmail.com',
        phone: '567-565-8976'
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
