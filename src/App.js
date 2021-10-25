import './App.css';
import {
  Nav,
  Midbody,
  Midbodyleft,
  Footer,
} from "./components";
import Routes from "./routes/Routes";
const App =() => {
  return (
    <div className="App min-h-screen bg-black ">
      <Routes />
      <Nav />
      <Midbody />
      <Midbodyleft />
      <Footer />
       </div>  
  );
}

export default App;
