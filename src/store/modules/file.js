import { storage } from "@/firebase/firebase.js";
import { ref, listAll, deleteObject, uploadBytes } from "firebase/storage";

const state = () => ({
  fileList: [],
});
// getters
const getters = {
    fileList(state) {
        return state.fileList;
    }
};
// mutations
const mutations = {
  GET_FILE_LIST(state, newList) {
    state.fileList = newList;
  },
};
// actions
const actions = {
    getFileList({commit}) {
        const listRef = ref(storage, "dropzone");
        listAll(listRef)
          .then((res) => {
              let newList = res.items.map((itemRef) => {
              return {
                bucket: itemRef.bucket,
                name: itemRef.name,
                fullPath: itemRef.fullPath,
              };
            });
            commit("GET_FILE_LIST", newList);
          })
          .catch((error) => {
            console.log(error);
          });
      },
    uploadFile({ dispatch }, files) {
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            let storageRef = ref(storage, "dropzone/" + file.name);
            uploadBytes(storageRef, file)
            .then(() => {
                dispatch("getFileList");
            })
            .catch((error) => {
                console.log(error)
            });
        }
    },
    removeFile({ dispatch }, name) {
        let deleteFile="dropzone/" + name;
        const desertRef = ref(storage, deleteFile);
        deleteObject(desertRef)
        .then(() => {
            dispatch("getFileList");
        })
        .catch((error) => {
            console.log(error)
        });
    }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
