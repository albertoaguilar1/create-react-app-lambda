import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DemoCarousel from './components/carrousel/DemoCarousel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoCarousel />, div);
  ReactDOM.unmountComponentAtNode(div);
});
