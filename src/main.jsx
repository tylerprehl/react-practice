import React from 'react'
import ReactDOM from 'react-dom/client'
// import Router from './router-components/Router'
import Image from './fetch-data-components/Image'

import './index.css'

// to see the page created for the Router lesson, display 'Router'
// to see the page created for the Data Fetching lesson, display 'Image'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Image />
  </React.StrictMode>
);
