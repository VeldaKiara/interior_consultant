import './App.css';
import {
  Nav,
  Midbody,
} from "./components";
import Routes from "./routes/Routes";
const App =() => {
  return (
    <div className="App min-h-screen bg-black bg-cover">
      <Routes />
      <Nav />
      <Midbody />
       </div>  
  );
}

export default App;
