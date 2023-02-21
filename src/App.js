import logo from './logo.svg';
import './App.css';
import Login from "./components/Login"
import Register from "./components/Register";
import { Detail } from './components/Dashboard/Detail';
import { useRoutes } from 'react-router';
import routes from './routes/routes';



function App() {
  const routing = useRoutes(routes);

  return (
    <div className="App">
{routing}
    </div>
  );
}

export default App;
