
function Header () {
  return(
      <>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <Title/>
      </>
  )
}


function Content() {
  return (
      <>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dicta.</h1>
        <Title/>
      </>
  )
}

function Footer() {
  return (
      <>
        <h1>bye</h1>
        <Title/>
      </>
  )
}

function Title() {
  return (
      <div>
        <h1>hello</h1>
      </div>
  )
}
function App() {
  return (
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
  );
}

export default App;
