import Api from "../api/Api";
export function guardRoutes(to, from, next) {
    const isAuthenticated = Api.token ? true : false;
    if (isAuthenticated) {
        next();
    } else {
        next("/login")
    }
}


export function guardAuthRoutes(to, from, next) {
    const isAuthenticated = Api.token ? true : false;
    if (!isAuthenticated) {
        next();
    } else {
        next("/")
    }
}


