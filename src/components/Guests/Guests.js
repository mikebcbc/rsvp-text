import React, { Component } from 'react';
import ReactTable from 'react-table';

import 'react-table/react-table.css';

export default class Guests extends Component {
	render() {
	  const data = [{
	    name: {
	    	first: 'Tanner',
	    	last: 'Linsley'
	    },
	    rsvp: 'yes',
	    group: 'Groomsman'
	  }];

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
	  <ReactTable data={data} columns={columns} />
	  )
	}
}
