import React, { Component } from "react";
import {connect} from 'react-redux';
import {sendReminder} from '../../actions';

import "./SendMessage.css";

export class SendMessage extends Component {

	handleSubmit(e) {
  	e.preventDefault();
		this.props.dispatch(sendReminder(this.props.authToken, this.props.eventID))
	}

  render() {
    return (
		<div className="send-message sidebar-item">
			<div className="title-option">Send a Message</div>
			<form onSubmit={this.handleSubmit.bind(this)}>
				<textarea name="message" cols="40" rows="5"></textarea>
				<div className="attach-send">
					<button className="send">send</button>
				</div>
			</form>
		</div>
    )
  }
}

const mapStateToProps = state => ({
	authToken: state.rsvp.authToken,
	eventID: state.rsvp.event.id
})

export default connect(mapStateToProps)(SendMessage);