import { useState } from 'react';
// import { Link } from 'react-router-dom';

export default function HomepageItem(props) {
  const { name, thumb_image_url, logo_url, description } = props.item;
  const [itemClass, setItemClass] = useState('');

  const handlePointerEnter = () => {
    setItemClass('img-blur');
  };

  const handlePointerLeave = () => {
    setItemClass('');
  };

  return (
    <div
      className="hp-item-wrapper"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <div
        className={`item-bg-img ${itemClass}`}
        style={{ backgroundImage: `url(${thumb_image_url})` }}
      />
      <div className="item-content">
        <div className="logo-wrapper">
          <img src={logo_url} alt="logo" />
        </div>
        <div className="text-wrapper">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>

      {/* <Link to={`/home/${id}`}>More details about {id}</Link> */}
    </div>
  );
}
