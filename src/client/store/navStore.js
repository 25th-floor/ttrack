import moment from 'moment';
import myro from 'myro';

import * as timeUtils from '../../common/timeUtils';

const router = myro({
    '/month/:month': 'month',
});

function dispatchRouter() {
    return router(document.location.pathname);
}

function activeMonthFromRoute(route) {
    if (route && route.$name === 'month' && route.$params.month) {
        // todo : check if month is valid!
        return moment(route.$params.month, 'YYYY-MM', true);
    } else {
        return timeUtils.getMomentToday();
    }
}

export default onChange => {
    const notify = () => onChange ? onChange() : null;
    let activeMonth = timeUtils.getMomentToday();

    const dispatch = () => {
        const route = dispatchRouter();
        activeMonth = activeMonthFromRoute(route);
    };

    return {
        init() {
            window.onpopstate = () => {
                dispatch();
                notify();
            };
            dispatch();
            return Promise.resolve();
        },
        getActiveMonth() {
            return activeMonth;
        },
        gotoMonth(month) {
            const path = router.month({ month: month.format('YYYY-MM') });
            activeMonth = month;
            window.history.pushState(null, '', path);
            notify();
        },
    };
};
