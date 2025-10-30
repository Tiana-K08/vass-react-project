import HomepageItem from './HomepageItem.jsx';

export default function HomepageContainer() {
  const homepageItems = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
  ];

  function renderHomepageItems() {
    return homepageItems.map((item, idx) => (
      <HomepageItem key={idx} title={item} url={'https://www.google.com/'} />
    ));
  }

  return (
    <>
      <h2>Portfolio items go here ...</h2>
      {renderHomepageItems()}
    </>
  );
}
