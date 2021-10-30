import React, { useState } from 'react';
import FFContext from './FFContext';

function FFProvider({children}) {

    const [news, setNews] = useState([]);

	const contextValue = {
		news,
		setNews,
	};

	return (
		<FFContext.Provider value={ contextValue }>
			{children}
		</FFContext.Provider>
	)
}

export default FFProvider;
