import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Client.css'; // Custom CSS for additional styles
import acc from '../../Assets/logo1.webp'
import mahindra from '../../Assets/logo2.webp'
import bajaj from '../../Assets/logo3.webp'
import philips from '../../Assets/logo4.webp'
import essar from '../../Assets/logo5.webp'
import edelweiss from '../../Assets/logo6.webp'
import bajajhin from '../../Assets/logo7.webp'
import futuregrp from '../../Assets/logo8.webp'
import cosco from '../../Assets/logo9.webp'
import jmbaxi from '../../Assets/logo10.webp'
const clients = [
  { logo: acc, alt: 'aac' },
  { logo: mahindra, alt: 'mahindra' },
  { logo: bajaj, alt: 'bajaj' },
  { logo: philips, alt: 'philips' },
  { logo: essar, alt: 'essar' },
  { logo: edelweiss, alt: 'edelweiss' },
  { logo: bajajhin, alt: 'bajajhin' },
  { logo: futuregrp, alt: 'futuregrp' },
  { logo: cosco, alt: 'cosco' },
  { logo: jmbaxi, alt: 'jmbaxi' },
];

const Client = () => {
  return (
    <>
          <p className="text-center bgPP my-4">Our Clients</p>
          <div className="client-section">
      <div className="container">
        <div className="row">
          {clients.map((client, index) => (
            <div className="col-6 col-md-2 my-2" key={index}>
              <img src={client.logo} alt={client.alt} className="img-fluid client-logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  
  );
};

export default Client;
