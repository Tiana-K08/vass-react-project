import loginImage from '../assets/images/auth/login.jpg';

export default function Auth() {
  return (
    <div className="main-auth">
      <div
        className="left-column"
        style={{ backgroundImage: `url(${loginImage})` }}
      />
      <div className="right-column">Login ...</div>
    </div>
  );
}
