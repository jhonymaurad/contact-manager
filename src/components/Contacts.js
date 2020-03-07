import React from 'react';
import Contact from './Contact';

class Contacts extends React.Component {
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
    ]
  };
  render() {
    const { contacts } = this.state;
    return (
      <>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </>
    );
  }
}

export default Contacts;
