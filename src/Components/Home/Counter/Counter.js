import React, { useEffect, useRef, useState } from 'react';
import './Counter.css'
const CounterCard = ({ title, count, description }) => (
  <div className="col-md-6 col-lg-3 col-sm-6">
    <div className="card text-center">
      <div className="card-body">
        <h1 className="card-title">{count}+</h1>
        <p className="card-text">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

const Counter = () => {
  const [counts, setCounts] = useState({
    propertiesSold: 0,
    happyClients: 0,
    agents: 0,
    listings: 0,
  });

  const counterRef = useRef(null);

  const startCounting = () => {
    const targets = {
      propertiesSold: 200,
      happyClients: 150,
      agents: 25,
      listings: 300,
    };

    const incrementCounts = (key, target) => {
      const increment = Math.ceil(target / 100);
      let currentCount = 0;

      const interval = setInterval(() => {
        if (currentCount < target) {
          currentCount += increment;
          if (currentCount > target) {
            currentCount = target;
          }
          setCounts((prevCounts) => ({
            ...prevCounts,
            [key]: currentCount,
          }));
        } else {
          clearInterval(interval);
        }
      }, 20);
    };

    Object.keys(targets).forEach((key) => incrementCounts(key, targets[key]));
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounting();
          observer.unobserve(counterRef.current); // Stop observing after counting starts
        }
      });
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div className='counter-outer'>
    <div className="container" ref={counterRef}>
      <div className="row">
        <CounterCard title="Properties Sold" count={counts.propertiesSold} description="Successfully sold properties." />
        <CounterCard title="Happy Clients" count={counts.happyClients} description="Clients satisfied with our service." />
        <CounterCard title="Real Estate Agents" count={counts.agents} description="Professional agents on our team." />
        <CounterCard title="Active Listings" count={counts.listings} description="Properties currently listed." />
      </div>
    </div>
    </div>
  );
}

export default Counter;
