import Home from "./pages/Home"
import { Provider } from 'react-redux';
import store from "./redux/store";
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={
          <div className='flex flex-col items-center justify-center'>
            <Home />
          </div>} />

      </Routes>
    </Provider>
  )
}

export default App
