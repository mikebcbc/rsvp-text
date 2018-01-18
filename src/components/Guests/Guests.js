import React, { Component } from 'react';
import ReactTable from 'react-table';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
import AddGuest from '../AddGuest/AddGuest';

import { toggleGuest, fetchEvent } from "../../actions";
import 'react-table/react-table.css';
import './Guests.css';

export class Guests extends Component {
	componentWillMount() {
		if (this.props.loggedIn) {
			this.props.dispatch(fetchEvent(this.props.authToken));
    }
	}

	render() {
	  const columns = [{
	    Header: 'First',
	    accessor: 'name.first'
	  }, 
	  {
	  	Header: 'Last',
	  	accessor: 'name.last'
	  },
	  {
	    Header: 'RSVP',
	    accessor: 'rsvp',
	    Cell: row => (
	    	row.value === true ? <div><span>YES</span><span> NO</span></div> : <div><span>YES</span><span> NO</span></div>
	    )
	  },
	  {
	    Header: 'Group',
	    accessor: 'group'
	  }];

	  return ([
	  <ReactTable data={this.props.guests} columns={columns} key="1">
	  	{(state, makeTable, instance) => {
	  		return (
	  			<div className="guests">
	  				<div className="guests-header">
	  					<h4>{this.props.event.name}</h4>
	  					<button onClick={(e) => this.props.dispatch(toggleGuest(true))}>+</button>
	  				</div>
	  				{makeTable()}
	  			</div>
	  		)
	  	}}
	  </ReactTable>,
	  <Modal open={this.props.addModalOpen} onClose={() => this.props.dispatch(toggleGuest(false))} little key="2">
	  	<h2>Add a Guest</h2>
	  	<AddGuest />
	  </Modal>
	  ])
	}
}

const mapStateToProps = state => ({
	guests: state.rsvp.guests,
	authToken: state.rsvp.authToken,
	loggedIn: state.rsvp.authToken !== null,
	addModalOpen: state.rsvp.addModalOpen,
	event: state.rsvp.event
})

export default connect(mapStateToProps)(Guests);