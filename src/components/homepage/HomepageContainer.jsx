import { useState } from 'react';

import HomepageItem from './HomepageItem.jsx';

export default function HomepageContainer() {
  const [state, setState] = useState({
    pageTitle: 'Welcome to my project',
    homepageItems: [
      { itemTitle: 'Item 1' },
      { itemTitle: 'Item 2' },
      { itemTitle: 'Item 3' },
      { itemTitle: 'Item 4' },
      { itemTitle: 'Item 5' },
      { itemTitle: 'Item 6' },
    ],
  });

  function renderHomepageItems() {
    return state.homepageItems.map((item, idx) => (
      <HomepageItem
        key={idx}
        title={item.itemTitle}
        url={'https://www.google.com/'}
      />
    ));
  }

  return (
    <>
      <h2>{state.pageTitle}</h2>
      {renderHomepageItems()}
    </>
  );
}
