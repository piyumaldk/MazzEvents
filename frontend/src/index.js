import ReactDOM from 'react-dom';
import React from "react";
/*import './index.css';*/
import App from './App';



/*import '@fortawesome/fontawesome-free/css/all.min.css';*/
// import "bootstrap-css-only/css/bootstrap.min.css";
/*import "mdbreact/dist/css/mdb.css";*/
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

, document.getElementById("root"));


