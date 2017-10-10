import React from 'react';
import ReactDOM from 'react-dom';
import React from './React';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<React />, div);
});
