import $ from 'jquery';

const APP_KEY = 'kid_HJtkbCBsM';
const APP_SECRET = 'a78684332b544cc98e6757c6da862179';
const BASE_URL = 'https://baas.kinvey.com';

function getBasicAuth() {
  return { 'Authorization': 'Basic ' + btoa(APP_KEY + ':' + APP_SECRET) };
}

function getKinveyAuth() {
  return { 'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken') };
}

function constructRequest(method, module, endpoint, auth) {
  return {
    method: method,
    url: `${BASE_URL}/${module}/${APP_KEY}/${endpoint}`,
    headers: auth === 'basic' ? getBasicAuth() : getKinveyAuth()
  };
}

function get(module, endpoint, auth) {
  return $.ajax(constructRequest('GET', module, endpoint, auth));
}

function post(module, endpoint, auth, body) {
  let request = constructRequest('POST', module, endpoint, auth);
  request.contentType = 'application/json';
  request.data = JSON.stringify(body);
  return $.ajax(request);
}

function update(module, endpoint, auth, body) {
  let request = constructRequest('PUT', module, endpoint, auth);
  request.contentType = 'application/json';
  request.data = JSON.stringify(body);
  return $.ajax(request);
}

function remove(module, endpoint, auth) {
  return $.ajax(constructRequest('DELETE', module, endpoint, auth));
}

export default {
  get,
  post,
  update,
  remove
};