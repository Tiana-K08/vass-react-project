export default function HomepageItem(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        link
      </a>
    </>
  );
}
