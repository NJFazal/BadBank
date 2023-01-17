function Home(){
    return (
      <Page
        center={
          <Card
            bgcolor="dark"
            header="BadBank"
            title="Welcome to the Bad Bank, Where Nothing is Safe!"
            text="Banking Made Sketchy."
            body={(<img src="bank.png" style={{position: "relative", width:"15rem", height:"auto", left: "50%", transform: "translate(-50%)"}} alt="Responsive image"/>)}
          />
        }
      />
    );  
  }