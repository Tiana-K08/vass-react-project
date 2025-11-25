import { Link } from 'react-router-dom';

export default function HomepageItem(props) {
  const { id, name, url, thumb_image_url, logo_url, description } = props.item;

  return (
    <>
      <img src={thumb_image_url} alt="bg-image" />
      <img src={logo_url} alt="bg-image" />
      <h3>{name}</h3>
      <p>{url}</p>
      <p>{description}</p>
      <Link to={`/home/${id}`}>More details about {id}</Link>
    </>
  );
}
