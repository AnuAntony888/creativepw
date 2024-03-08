import logo from './logo.svg';
import './App.css';
import Navigate from './Navigates/Navigate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MetaComponent } from './ReusableComponent/Reusab';



function App() {
  return (
    <div className="App">
     <MetaComponent/>
      <Navigate />
          <ToastContainer />
    </div>
  );
}

export default App;
