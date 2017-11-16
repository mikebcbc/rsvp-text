import React, { Component } from 'react';
import ReactTable from 'react-table';
import {connect} from 'react-redux';

import {addGuest} from '../../actions';
import 'react-table/react-table.css';
import './Guests.css';

export class Guests extends Component {
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
	    accessor: 'rsvp'
	  },
	  {
	    Header: 'Group',
	    accessor: 'group'
	  }];

	  return (
	  <ReactTable data={this.props.guests} columns={columns}>
	  	{(state, makeTable, instance) => {
	  		return (
	  			<div className="guests">
	  				<div className="guests-header">
	  					<h4>Smith Wedding Guest List</h4>
	  					<button>+</button>
	  				</div>
	  				{makeTable()}
	  			</div>
	  		)
	  	}}
	  </ReactTable>
	  )
	}
}

const mapStateToProps = state => ({
	guests: state.rsvp.guests
})

export default connect(mapStateToProps)(Guests);