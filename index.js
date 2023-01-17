function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'Nicky',email:'njf@njf.com',password:'secret',balance:100}], userInfo:{loggedIn: false, userRef:0}}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/createaccount/" component={CreateAccount} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);