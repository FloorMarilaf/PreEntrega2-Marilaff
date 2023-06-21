
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Main from './components/pages/main';


function App() {
  return (
    <div>
        <NavBar />
        <ItemListContainer greeting={'Bienvenidos a Flower Child'} />
        <Main />

        
    </div>
  );
}

export default App;
