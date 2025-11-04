import { useState } from 'react';

import HomepageItem from './HomepageItem.jsx';

export default function HomepageContainer() {
  const [homepageTitle, setHomepageTitle] = useState('Welcome to my project');
  const [homepageItems, setHomepageItems] = useState([
    { itemTitle: 'Item 1' },
    { itemTitle: 'Item 2' },
    { itemTitle: 'Item 3' },
    { itemTitle: 'Item 4' },
    { itemTitle: 'Item 5' },
    { itemTitle: 'Item 6' },
  ]);

  const handleHomepageTitleUpdate = () => {
    setHomepageTitle('Something else ...');
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
      <h2 onClick={handleHomepageTitleUpdate}>{homepageTitle}</h2>
      {renderHomepageItems()}
    </>
  );
}
