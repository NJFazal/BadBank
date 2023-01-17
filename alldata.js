function AllData() {
  const ctx = React.useContext(UserContext);
  const data = ctx.users;
  const tableCells = data.map((item) =>
    <tr>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.password}</td>
    </tr>
  );
  return (
    <>
      <h1>All Data</h1>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {tableCells}
        </tbody>
      </table>
    </>
  );
}