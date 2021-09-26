/*<-----App.JS Are Stating Here */
import './App.css';
import Header from './Components/Header/Header';
import User from './Components/User/User';

/*<----- React BootStrap CDN File ----->*/
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <User></User>
    </div>
  );
}

export default App;
/*<-----App.JS Are Ending Here */