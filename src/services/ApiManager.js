import Toast from 'react-native-simple-toast'
import MyStorage from '../helpers/MyStorage';

const _TIMEOUT = 15000;
let BASE_URL = "https://api.zipexpress.co/api/v1/";
let ngrok="http://481db11672a6.ngrok.io"
// let BASE_URL = ngrok+"/api/v1/";

let ONLINE_STATUS = true;

const LOGIN = 'auth/login';


const _REGISTER_PATH = "auth/register";
const GET_ALL_PACKAGE="drivers/list-packages"
const GET_PROFILE_DATA="drivers/profile"
const SEND_EMAIL='drivers/package/send-delivery-email'
const ASSIGN_PACKAGE="drivers/assign-package"
const PKG_STATUS_UPDATE="drivers/package-status"
const DRVR_UPDATE='drivers/update'
const DRVR_UPLOAD='v1/drivers/docs'

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

// PUT Request
const sendPutRequest = async (_url, _body, headers) => {
  _url = BASE_URL + _url;
  console.log("API _url", _url)
  if (!_body) {
    _body = {}
  }
  let token=await new MyStorage().getUserToken()
  if (!headers) {
    headers = {
      'Content-Type': 'application/json'
    }
  } 
  else{
    headers = {
      'Content-Type': 'application/json',
      "Authorization":`Bearer ${token}`
    }
  }

  try {
    let response = await fetch(_url, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(_body)
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


const Login = async (body) => {
  const url = BASE_URL +LOGIN;

  return sendPostRequest(url, body);
}






const Signup = async (body) => {

  const url = BASE_URL+_REGISTER_PATH;
  return sendPostRequest(url, body);

}

const driverSign = async (body) => {

  const url = BASE_URL+SEND_EMAIL;
  console.log(url,body)
  return sendPostRequest(url, body,"headers");

}


const docUpload=async(body)=>{
  
  const url = BASE_URL+DRVR_UPLOAD;
  return sendPostRequest(url, body,"headers");
}

const AllPackages=async()=>{
  const url=GET_ALL_PACKAGE
  return sendGetRequest(url,null,"headers")
 }
 const userData=async()=>{
  const url=GET_PROFILE_DATA
  return sendGetRequest(url,null,"headers")
 }

const assignPkg=async(id)=>{
  const url=ASSIGN_PACKAGE+'/'+id
  
 return sendPutRequest(url,null,"headers")
}
const PkgStatusUpdate=async(id,body)=>{
  const url=PKG_STATUS_UPDATE+'/'+id
  
 return sendPutRequest(url,body,"headers")
}
const DriverUpdate=async(body)=>{
  const url=DRVR_UPDATE
  
 return sendPutRequest(url,body,"headers")
}


export {
  Login,
  Signup,AllPackages,userData,assignPkg,PkgStatusUpdate,DriverUpdate,driverSign,docUpload
};
