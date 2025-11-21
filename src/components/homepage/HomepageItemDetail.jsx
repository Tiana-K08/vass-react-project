import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function HomepageItemDetail() {
  const { slug } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://tetkononenko.devcamp.space/portfolio/portfolio_items')
      .then((response) => {
        const items = response.data.portfolio_items;
        const itemFound = items.find((i) => String(i.id) === slug);

        if (itemFound) {
          setItem(itemFound);
        } else {
          setError('Item not found');
        }

        setLoading(false);
      })
      .catch((error) => {
        setError(error?.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <h1>
      Detail for {slug}: {item.name}
    </h1>
  );
}
