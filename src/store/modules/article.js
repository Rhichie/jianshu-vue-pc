import * as types from '../mutation-types'


const state = {
  article: {},
  updateArticle:{},
  searchWord:'',
};

const mutations = {
  [types.GET_ARTICLE](state,atticle){
    state.article = atticle;
  },
  [types.UPDATE_ARTICLE](state,atticle){
    state.updateArticle = atticle;
  },
  [types.CHANGE_SEARCH_WORD](state, searchWord){
    state.searchWord = searchWord
  }
};

const getters = {
  article : state => state.article,
  updateArticle : state => state.updateArticle,
  searchWord: state => state.searchWord
};
export default {
  state,
  getters,
  mutations
}

