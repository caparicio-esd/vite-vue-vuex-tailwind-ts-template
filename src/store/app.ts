const state = () => ({
  name: "carlos",
});

const getters = {
  getName(state, getters, rootState) {
    return state.name;
  },
};

const mutations = {
  SET_NAME(state, newName) {
    state.name = newName;
  },
};

const actions = {
  setName({ commit, state }, { newName }) {
      commit("SET_NAME", newName)
  },
};

export default {
    namespaced: true, 
    state, 
    getters, 
    mutations, 
    actions
}
