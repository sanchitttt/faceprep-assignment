import Home from "./pages/Home"
import { Provider } from 'react-redux';
import store from "./redux/store";


function App() {
  return (
    <Provider store={store}>
      <div className='flex flex-col items-center justify-center'>
        <Home />
      </div>
    </Provider>
  )
}

export default App
