import { useState } from 'react';

import HomepageItem from './HomepageItem.jsx';

export default function HomepageContainer() {
  const [homepageItems, setHomepageItems] = useState([
    { itemTitle: 'Item 1', category: 'eCommerce', url: 'item-1' },
    { itemTitle: 'Item 2', category: 'Scheduling', url: 'item-2' },
    { itemTitle: 'Item 3', category: 'Enterprise', url: 'item-3' },
    { itemTitle: 'Item 4', category: 'eCommerce', url: 'item-4' },
    { itemTitle: 'Item 5', category: 'Scheduling', url: 'item-5' },
    { itemTitle: 'Item 6', category: 'Enterprise', url: 'item-6' },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFilter = (filter) => {
    setHomepageItems(
      homepageItems.filter((item) => {
        return item.category === filter;
      })
    );
  };

  function renderHomepageItems() {
    return homepageItems.map((item, idx) => (
      <HomepageItem key={idx} title={item.itemTitle} url={item.url} />
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
