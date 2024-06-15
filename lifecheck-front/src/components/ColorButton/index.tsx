import React from 'react';

const ColorButton = ({ color, children, onClick }) => {
	// Define a base className with common styles
	const baseClassName =
		'inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-0';

	// Dynamically generate the className by appending the color class
	const className = `${baseClassName} bg-${color}-500 hover:bg-grey-600 focus:bg-${color}-600 active:bg-${color}-700 dark:bg-${color}-500 dark:hover:bg-${color}-600 dark:focus:bg-${color}-600 dark:active:bg-${color}-700`;

	return (
		<button type="button" className={className} onClick={onClick}>
			{children}
		</button>
	);
};

export default ColorButton;
