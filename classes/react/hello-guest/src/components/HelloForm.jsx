/* eslint-disable react/prop-types */
import './HelloForm.css';

function HelloForm({ setUsername }) {
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    setUsername(username);
    e.target.reset();
  };

  return (
    <form className="hello-form" style={{ marginTop: '20px' }} onSubmit={submitHandler}>
      <input type="text" name="username" />
      <button>Login</button>
    </form>
  );
}

export default HelloForm;
