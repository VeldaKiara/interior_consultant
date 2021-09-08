import './App.css';
import {
  Nav
} from "./components";
import Routes from "./routes/Routes";
const App =() => {
  return (
    <div className="App min-h-screen bg-black">
      <Routes />
      <Nav />
       </div>  
  );
}

export default App;
