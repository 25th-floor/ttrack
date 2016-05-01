import React, { PropTypes } from 'react';

import Navigation from '../Navigation';
import AppFooter from './Footer';

import styles from './less/App.less';

const { object, func } = PropTypes;

const App = ({ motto, logout, user, build, children }) => (
    <div className={styles['site-container']}>
        <div className="container-fluid">
            <Navigation motto={motto} onLogout={logout} activeUser={user} />
            <div>{ children }</div>
        </div>
        <AppFooter motto={motto} build={build} />
    </div>
);

App.propTypes = {
    motto: object.isRequired,
    logout: func.isRequired,
    user: object.isRequired,
    build: object,
    children: object,
};

export default App;
