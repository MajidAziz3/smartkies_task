import Toast from 'react-native-simple-toast'
import MyStorage from '../helpers/MyStorage';
import { useSelector } from 'react-redux';

const _TIMEOUT = 15000;
let BASE_URL = "https://new.smartkies.com/api/";
let ONLINE_STATUS = true;


const _REGISTER_PATH = "auth/register";

// GET Request
const sendGetRequest = async (_url, _params, headers) => {
  _url = BASE_URL + _url;
  console.log("API _url", _url)
  let token=await new MyStorage().getUserToken()
  if (!headers) {
    headers = {
      'Content-Type': 'application/json'
    }
  } 
  
  else{
    console.log("test",token)
    headers = {
      'Content-Type': 'application/json',
      "Authorization":`Bearer ${token}`
    }
  }

  try {
    let response = await fetch(_url, {
      method: 'GET',
      headers: headers,
    })
    return response
  } catch (error) {
    setTimeout(() => {
      Toast.showWithGravity(
        'Unable to connect with server',
        Toast.LONG,
        Toast.TOP
      )
    }, 400)
    return error
  }
};

// POST Request
const sendPostRequest = async (
  _url,
  _body,
  headers,
) => {
  _url = _url
console.log("api uri>>>>>>",_url)
  if (!_body) {
    _body = {}
  }

  if (!headers) {
    headers = {
      'Content-Type': 'application/json'
    }
  } 

  try {
    let response = await fetch(_url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(_body)
    })
    console.log("response",response)
    return response
  } catch (error) {
    setTimeout(() => {
      Toast.showWithGravity(
        'Unable to connect with server',
        Toast.LONG,
        Toast.TOP
      )
    }, 400)
    return error
  }
};





const Signup = async (body) => {

  const url = BASE_URL+_REGISTER_PATH;
  return sendPostRequest(url, body);

}
const GetToken=async(uri)=>{
  const url=uri
  return sendGetRequest(url)
}

export {
  Signup,GetToken
};
