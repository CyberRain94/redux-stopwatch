import React from 'react';
import { Provider } from 'react-redux';
import store from "./app/store";
import Stopwatch from './features/counter/Stopwatch';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Draggable from "react-draggable";
  const App: React.FC = () => {
  return (
    <Provider store={store}>
        <Draggable>
        <div id="StopWatch" >
      <div id="CheckInTimer" className="container pt-5 jumbotron">
      <div id="quote-box" className="container text-center card">
        <div className="card-body">
          <Stopwatch />
        </div>
      </div>
      <footer id='footer' className="text-center">
        Coded by:
        <a href={"https://github.com/CyberRain94"} target="_blank">
          CyberRain94
        </a>
      </footer>
    </div>
    </div>
    </Draggable>
    </Provider>
  )
};

export default App;