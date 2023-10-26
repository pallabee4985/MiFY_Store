import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { ContextData } from './Component/Context/ContextData';
import { ContexFilterData } from './Component/Context/ContexFilterData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ContextData>
        <ContexFilterData>
            <App />
        </ContexFilterData>
    </ContextData>
  </BrowserRouter>
)


