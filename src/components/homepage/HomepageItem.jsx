import { Link } from 'react-router-dom';

export default function HomepageItem(props) {
  // thumb_image_url, logo_url, description
  const { id, name, url } = props.item;

  return (
    <>
      <h3>{name}</h3>
      <p>{url}</p>
      <Link to={`/home/${id}`}>More details about {id}</Link>
    </>
  );
}
