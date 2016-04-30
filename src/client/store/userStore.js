'use strict';

import localStorage from '../localStorage';
import resource from '../resource';

const LS_USER = 'ls.user';

export default onChange => {
    const users = resource.collection('/api/users');
    const activeUserId = localStorage.getItem(LS_USER, {}).activeUserId;
    let activeUser = null;
    const notify = () => onChange ? onChange() : null;
    return {
        init() {
            return users.load().then(() => {
                if (activeUserId) {
                    activeUser = users.list().find(user => user.get('usr_id') === activeUserId);
                }
                notify();
            });
        },
        getUsers() {
            return users.list();
        },
        getActiveUser() {
            return activeUser;
        },
        login(user) {
            activeUser = user;
            localStorage.setItem(LS_USER, { activeUserId: user.get('usr_id') });
            notify();
        },
        logout() {
            activeUser = null;
            localStorage.setItem(LS_USER, {});
            notify();
        },
    };
};
