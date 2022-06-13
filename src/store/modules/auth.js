import Api from "../../api/Api.js";
export default {
    namespaced: true,
    state: {
        isAuthenticated: false,
        token: null
    },
    getters: {
        getToken: state => state.token,
        getIsAuth: state => state.isAuthenticated,
    },

    actions: {
        registerUser: async ({ commit }, payload) => {
            const res = await Api.request("user", payload, "POST");
            if (res.status === 201) {
                console.log(res);
                const { data } = res.data;
                commit("setToken", data._token);
                commit("setIsAuth", true)
                return res;
            }
            console.error("did not create successfully, please fix this error in the future");

        },

        loginUser: async ({ commit }, payload) => {
            const res = await Api.request("token", payload, "POST");
            if (res.status === 200) {
                const { data } = res.data;
                commit('setToken', data._token);
                commit("setIsAuth", true);
                return res;
            }
            console.error("The status was not 200, handle this error in the future");

        },
        logoutUser: ({ commit }) => {
            localStorage.removeItem("_token");
            Api.token = null;
            commit("removeToken");
            commit("setIsAuth", false);
        },

        checkForUser: ({ commit }) => {
            const token = localStorage.getItem("_token");
            if (token) {
                commit("setToken", token);
                commit("setIsAuth", true);
            }
        }
    },

    mutations: {
        setToken: (state, token) => {
            state.token = token;
            Api.token = token;
            localStorage.setItem("_token", token);

        },
        removeToken: (state) => state.token = null,
        setIsAuth: (state, bool) => state.isAuthenticated = bool,
    }
}