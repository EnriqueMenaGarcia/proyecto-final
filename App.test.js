import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
import React from 'react';
 
import Menu from '../menu/Menu';
import Jumbotron from './jumbotron/Jumbotron'; // Este Componente lo crearé a continuación 
import Detalles from './detalles/Detalles'; // Este Componente lo crearé a continuación 
import Footer from '../footer/Footer';
 
 
class Nosotros extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<Menu />
 
			<main role="main" className="flex-shrink-0 mt-5">
		        
				<Jumbotron /> // Este Componente lo crearé a continuación 
				<Detalles /> // Este Componente lo crearé a continuación 
 
	  		</main>
 
	  		<Footer />
 
	  		</>


import Menu from '../menu/Menu';
import Jumbotron from './jumbotron/Jumbotron'; // Este Componente lo crearé a continuación 
import Detalles from './detalles/Detalles'; // Este Componente lo crearé a continuación 
import Footer from '../footer/Footer';


