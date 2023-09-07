import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MaterialList from './components/materials/MaterialList';
import MaterialDetails from './components/materials/MaterialDetails';
import CreateMaterial from './components/materials/CreateMaterial';
import { PatronsList } from './components/patrons/PatronsList.js';
import { PatronDetails } from './components/patrons/PatronDetails.js';
import { CheckoutList } from './components/checkouts/CheckoutList.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<App />}
      >
        <Route path="materials">
          <Route
            index
            element={<MaterialList />}
          />
          <Route
            path=":id"
            element={<MaterialDetails />}
          />
          <Route
            path="create"
            element={<CreateMaterial />}
          />
        </Route>
        <Route path="patrons">
          <Route
            index
            element={<PatronsList />}
          />
          <Route
            path=":id"
            element={<PatronDetails />}
          />
        </Route>
        <Route path="checkouts">
          <Route
            index
            element={<CheckoutList />}
          />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
