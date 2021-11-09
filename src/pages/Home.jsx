import React, { useState } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import '../App.css';
import Main from '../components/Main/Main';
import load from '../images/crystal.gif';

function Home() {

	const [loading, setLoading] = useState(true);


	setTimeout(() => {
      setLoading(false);
	}, 1700)

	return (
		<body>
			<Header />
			{
			  !loading ? <Main /> : <img src={ load } alt='crystal load'/>
			}
			<Footer />
		</body>
	);
}

export default Home;