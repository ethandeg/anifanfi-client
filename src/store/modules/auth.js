import Api from "../../api/Api.js";
export default {
    namespaced: true,
    state: {
        test: [1, 2, 3],
        token: null
    },
    getters: {
        test: state => state.test,
        getToken: state => state.token,
    },

    actions: {
        registerUser: async({commit},payload) => {
            const res = await Api.request("user",payload,"POST");
            if(res.status === 201){
                console.log(res);
                const {data} = res.data;
                commit("setToken", data._token);
                return res;
            }
            console.error("did not create successfully, please fix this error in the future");

        },

        loginUser: async({commit}, payload) =>{
            const res = await Api.request("token",payload,"POST");
            if(res.status ===200){
                const {data} = res.data;
                commit('setToken', data._token);
                return res;
            }
            console.error("The status was not 200, handle this error in the future");

        }
    },

    mutations: {
        setToken: (state, token) => {
            state.token = token;
            Api.token=token;
        }
    }
}