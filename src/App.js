import { Provider } from 'react-redux/es/exports';
import RouterDom from './assets/Routes/Router';
import { store } from './Services/Redux/Store';


function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterDom />
      </Provider>

    </div>
  );
};

export default App;
