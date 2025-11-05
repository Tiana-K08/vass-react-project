import { useState } from 'react';

import HomepageItem from './HomepageItem.jsx';

export default function HomepageContainer() {
  const [homepageItems, setHomepageItems] = useState([
    { itemTitle: 'Item 1', category: 'eCommerce' },
    { itemTitle: 'Item 2', category: 'Scheduling' },
    { itemTitle: 'Item 3', category: 'Enterprise' },
    { itemTitle: 'Item 4', category: 'eCommerce' },
    { itemTitle: 'Item 5', category: 'Scheduling' },
    { itemTitle: 'Item 6', category: 'Enterprise' },
  ]);

  const handleFilter = (filter) => {
    setHomepageItems(
      homepageItems.filter((item) => {
        return item.category === filter;
      })
    );
  };

  function renderHomepageItems() {
    return homepageItems.map((item, idx) => (
      <HomepageItem
        key={idx}
        title={item.itemTitle}
        url={'https://www.google.com/'}
      />
    ));
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
