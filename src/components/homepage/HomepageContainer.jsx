import { useState, useEffect } from 'react';
import axios from 'axios';

import HomepageItem from './HomepageItem.jsx';

export default function HomepageContainer() {
  const [homepageItems, setHomepageItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://tetkononenko.devcamp.space/portfolio/portfolio_items')
      .then((response) => {
        console.log(response);
        setHomepageItems(response.data.portfolio_items);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error?.message);
        setLoading(false);
      });
  }, []);

  const handleFilter = (filter) => {
    setHomepageItems(
      homepageItems.filter((item) => {
        return item.category === filter;
      })
    );
  };

  function renderHomepageItems() {
    return homepageItems.map((item) => (
      <HomepageItem key={item.id} item={item} />
    ));
  }

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h2>Welcome to my project</h2>
      <button onClick={() => handleFilter('eCommerce')}>eCommerce</button>
      <button onClick={() => handleFilter('Scheduling')}>Scheduling</button>
      <button onClick={() => handleFilter('Enterprise')}>Enterprise</button>
      {renderHomepageItems()}
    </>
  );
}
