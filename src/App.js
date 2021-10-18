import './App.css';
import {
  Nav,
  Midbody,
  Midbodyleft,
} from "./components";
import Routes from "./routes/Routes";
const App =() => {
  return (
    <div className="App min-h-screen bg-black bg-cover">
      <Routes />
      <Nav />
      <Midbody />
      <Midbodyleft />
       </div>  
  );
}

export default App;
