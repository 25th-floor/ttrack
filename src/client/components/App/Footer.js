import React, { PropTypes } from 'react';

import Motto from '../Motto';

import styles from './less/Footer.less';

const { object } = PropTypes;

/**
 *
 * @param {object} build object containing specific build and/or git information
 * @returns {string} representing build info and/or git hash
 */
const getBuildInfo = build => {
    let buildInfo = '';
    if (build && Object.keys(build).length > 0) {
        buildInfo = ' | ';
        if (build.build) buildInfo += `build-${build.build}-`;
        if (build.git) buildInfo += ` ${build.git} `;
    }

    return buildInfo;
};

const Footer = ({ motto, build }) => (
    <footer className={ `${styles.footer} footer` }>
        <div className="container-fluid">
            <div className={ `${styles['footer-copyright']} footer-copyright` }>
                {motto
                    ? <small className={styles['tt-motto']}>
                    <Motto house={motto.house} motto={motto.motto} />
                </small> : ''
                }
                <i className="fa fa-copyright" />
                <a href="http://25th-floor.com">25th-floor GmbH</a>
                <span>{getBuildInfo(build)}</span>
            </div>
        </div>
    </footer>
);

Footer.propTypes = {
    motto: object,
    build: object,
};

export default Footer;
