import { storage } from "@/firebase/firebase.js";
import { ref, uploadBytes } from "firebase/storage";

const state = () => ({
  fileList: [],
});
const getters = {
  getFileList(state) {
    return state.fileList;
  },
};
const mutations = {
  SET_FILE_LIST(state, files) {
    state.fileList = state.fileList.concat(files);
  },
  REMOVE_FILE(state, lastModified) {
    const index = state.fileList.findIndex((item) => item.lastModified === lastModified);
    state.fileList.splice(index, 1);
  },
  SUBMIT_FILE(state) {
    state.fileList = [];
  }
};
const actions = {

  uploadFile({ commit }, files) {
    commit("SET_FILE_LIST", files)
  },
  removeFile({ commit }, lastModified) {
    commit("REMOVE_FILE", lastModified)
  }, 
  submitFile({commit, getters}) {
    let files = getters.getFileList;
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      let storageRef = ref(storage, "dropzone/" + file.name);
      uploadBytes(storageRef, file)
      .then(() => {
        commit("SUBMIT_FILE");
      })
      .catch((error) => {
          console.log(error)
      });
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
