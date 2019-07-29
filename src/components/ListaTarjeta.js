import React from 'react';
import Tarjeta from './Tarjeta';

const ListaTarjeta = ({ robots }) => {
	return (
		<div>
			{
				robots.map((user, i) => {
					return (
						<Tarjeta 
							key={i} 
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email}
						/>
					);
				})	
			}
		</div>
	);
}

export default ListaTarjeta;