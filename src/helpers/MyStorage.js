import AsyncStorage from '@react-native-async-storage/async-storage';

const wrappers = {
  setItem(key, value) {
    AsyncStorage.setItem(key, ''.concat(value));
  },

  getItem(key) {
    return AsyncStorage.getItem(key);
  },

  removeItem(key) {
    return AsyncStorage.removeItem(key);
  },
};

export default class MyStorage {
  user_token = '@user_token';
  user_doc_verified='@user_doc_verified'
  theme = '@theme';

  setUserToken(info) {
    wrappers.setItem(this.user_token, info);
  }

  getUserToken() {
    return wrappers.getItem(this.user_token);
  }

  removeUserToken() {
    return wrappers.removeItem(this.user_token);
  }
  setUserdoc(info) {
    wrappers.setItem(this.user_doc_verified, info);
  }

  getUserdoc() {
    return wrappers.getItem(this.user_doc_verified);
  }

  removeUserdoc() {
    return wrappers.removeItem(this.user_doc_verified);
  }
 
}
