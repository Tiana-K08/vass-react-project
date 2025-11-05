export default function NavigationContainer() {
  return (
    <div>
      <button>Home</button>
      <button>About</button>
      <button>Contact</button>
      <button>Blog</button>
      {false ? <button>Add Blog</button> : null}
    </div>
  );
}
