import { useState, useEffect } from 'react';
import axios from 'axios';

import HomepageItem from './HomepageItem.jsx';

export default function HomepageContainer() {
  const [homepageItems, setHomepageItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get('https://tetkononenko.devcamp.space/portfolio/portfolio_items')
      .then((response) => {
        console.log(response);
        setHomepageItems(response.data.portfolio_items);
      })
      .catch((error) => {
        console.log(error);
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
      <HomepageItem
        key={item.id}
        slug={item.id}
        title={item.name}
        url={item.url}
      />
    ));
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }
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
