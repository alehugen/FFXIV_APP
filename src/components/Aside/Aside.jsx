import React, { useContext, useEffect } from 'react';
import FFContext from '../../context/FFContext';
import maintenanceAPI from '../../services/maintenance';
import '../Aside/Aside.css';

function Aside() {

  const { maintenance, setMaintenance } = useContext(FFContext);

  async function getStatus() {
    const m = await maintenanceAPI();
    setMaintenance(m);
  }

  useEffect(() => {
   getStatus();
  }, []);

  return (
    <div className='aside-box'>
      <h2>Maitenances</h2>
      {
        maintenance ? maintenance.map((status, index) => <div key={ index } className='aside-card'>
         <h3>{ status.title }</h3>
         <p>Starts: { Date(status.start) } </p>
         <p>End: { Date(status.end) }</p>
         <a href={ status.url } target='_blank' rel="noreferrer">MORE INFO</a>
        </div>).slice(0, 11) : null
      } 
    </div>
  )
}

export default Aside;