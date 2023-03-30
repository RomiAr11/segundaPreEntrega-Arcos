
import './App.css';
import ItemListContainer from './components/ItemListContainer/itemlistcontainer';
import ItemList from './components/itemlist/ItemList';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailsContainer from './components/item/item';

const App = () => {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<ItemListContainer greeting={"Nuestros productos mas vendidos"}/> }/>
      <Route path='/item' element= {<ItemDetailsContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Productos filtrados con categorias"}/> }/>
      <Route path='/item/:itemId' element= {<ItemDetailsContainer/>}/>
     </Routes>
     </BrowserRouter>
    </div>
    
  )
}

export default App;
