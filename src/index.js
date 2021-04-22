import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { App } from './views/App';
import store from './store/store';

// Global styles
import 'sanitize.css/sanitize.css';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Route path="/" component={App} />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
