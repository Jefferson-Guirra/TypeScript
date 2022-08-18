"use strict";
const verifyUser = (user, sentUser) => {
    return user.password === sentUser.password && user.user === sentUser.user;
};
console.log(verifyUser({ password: 123, user: 'jefferson' }, { password: 123, user: 'jefferson' }));
