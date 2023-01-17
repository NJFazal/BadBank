
function CreateAccount() {
  const ctx = React.useContext(UserContext);
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [disabledValue, setDisabledValue] = React.useState("disabled");

  React.useEffect(() => {
    if (name !== "" && email !== "" && password !== "") {
      setDisabledValue("");
    } else {
      setDisabledValue("disabled");
    }
  }, [name, email, password, ctx.users]);

  function validate(field, label) {
    if (!field || (label === 'password' && field.length < 8)) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(name, 'name')) {
      setStatus('Enter name');
      return;
    }
    if (!validate(email, 'email')) {
      setStatus('Enter email');
      return;
    }
    if (!validate(password, 'password')) {
      setStatus('Enter password (at least 8 characters)');
      return;
    }
    // Delete initial placeholder user account
    if (ctx.users[0].name === 'abel') {
      ctx.users.length = 0;
    }
    // Seed all new accounts with $100
    ctx.users.push({ name, email, password, balance: 100 });
    setShow(false);
  }

  function handleChange(e, setField) {
    setField(e.currentTarget.value);
  }

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Page
    center={
    <Card
      bgcolor="dark"
      header="Create Account"
      title="It All Starts Here"
      status={status}
      body={show ? (
        <>
          Name<br />
          <input type="input" required className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => handleChange(e, setName)} /><br />
          Email address<br />
          <input type="input" required className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => handleChange(e, setEmail)} /><br />
          Password<br />
          <input type="password" required className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => handleChange(e, setPassword)} /><br />
          <button type="submit" className="btn btn-light" disabled={disabledValue} onClick={handleCreate}>Create Account</button>
        </>
      ) : (
        <>
          <h5>Success</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
        </>
      )}
    />
      }
      />
  )
}

export default CreateAccount;
