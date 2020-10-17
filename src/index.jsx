import React from 'react';
import {render} from 'react-dom';
import App from './app.jsx';

const root = document.getElementById('root');

render(<App />, root);

if (module.hot) {
    module.hot.accept();
}
