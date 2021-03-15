import Home from './home';
import Navbar from './navbar'


function App() {
  const link="https://www.google.com";
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <a href={link}>Google</a>
        <Home/>
      </div>
    </div>
  );
}

export default App;
