import React from 'react';
import { ContactContainer } from './contact-styles';

export default class ContactInfo extends React.Component {
  constructor(props: any) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  submitForm(ev: any) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }

  render() {
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xbjpyrkk"
        method="POST"
      >
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Message:</label>
        <input type="text" name="message" />
        {/* {this.state.status === 'SUCCESS' ? (
          <p>Thanks!</p>
        ) : ( */}
        <button>Submit</button>
        {/* )} */}
        {/* {this.state.status === 'ERROR' && <p>Ooops! There was an error.</p>} */}
      </form>
    );
  }
}
