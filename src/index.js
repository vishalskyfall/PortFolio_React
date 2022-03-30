import React,{useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// After
function AppWithCallbackAfterRender() {
  useEffect(() => {
    // console.log('rendered');
  });

  return <App />
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<AppWithCallbackAfterRender />);