import { useParams } from 'react-router-dom';

export default function HomepageItemDetail() {
  const { slug } = useParams();

  // TODO: .find()

  return <h1>Detail for {slug}</h1>;
}
