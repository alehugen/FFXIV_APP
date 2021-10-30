import React, { useState } from 'react';
import FFContext from './FFContext';

function FFProvider({children}) {

    const [topics, setTopics] = useState([]);

	const contextValue = {
		topics,
		setTopics,
	};

	return (
		<FFContext.Provider value={ contextValue }>
			{children}
		</FFContext.Provider>
	)
}

export default FFProvider;
