

function Withdraw() {
  const ctx = React.useContext(UserContext);
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const currentUserBalance =
    ctx.users[ctx.users.length - 1]
    && ctx.users[ctx.users.length - 1].balance;
  const [balance, setBalance] = React.useState(currentUserBalance);
  const [disabledValue, setDisabledValue] = React.useState("disabled");

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(amount, 'amount')) {
      setStatus('Enter amount');
      return;
    }
    if (Number(amount) <= Number(balance)) {
      setBalance(Number(balance) - Number(amount));
      setShow(false);
    } else {
      setStatus('Insufficient funds');
    }
  }

  React.useEffect(() => {
    ctx.users[ctx.users.length - 1].balance = balance;
    if (amount !== "") {
      setDisabledValue("");
    } else {
      setDisabledValue("disabled");
    }
  }, [amount, balance, ctx.users]);

  function handleChange(e, setField) {
    if (isNaN(e.target.value)) {
      setStatus('Please enter a number');
      return;
    } else {
      setStatus('');
      setField(e.target.value);
    }
  }

  function clearForm() {
    setAmount('');
    setShow(true);
  }

  return (
<Page
    center={
      <Card
        bgcolor="dark"
        header="Withdraw"
        title="Withdraw Funds From Your Account Here"
        status={status}
        body={show ? (
          <>
            <p>Balance: {balance}</p>
            Withdraw Amount<br />
            <input type="input" required className="form-control" id="amount" placeholder="Enter withdrawal amount" value={amount} onChange={e => handleChange(e, setAmount)} /><br />
            <button type="submit" className="btn btn-light" disabled={disabledValue} onClick={handleCreate}>Make Withdrawal</button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <p>New Balance: {balance}</p>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdrawal</button>
            </>
        )}
      />
    
    }
    />
  )
}
