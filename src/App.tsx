import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ButtonAppBar from './components/AppBar';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import CreateTask from './components/CreateTask';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
   <Provider store={store}>
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<ButtonAppBar/>}>
        <Route index element={<Home/>}/>
        <Route path='add-new-task' element={<CreateTask/>}/>
        <Route path='*' element={<PageNotFound/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
   </Provider>
  );
}

export default App;
