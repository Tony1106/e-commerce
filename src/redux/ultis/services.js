import axios from "axios";

//GET PRODUCT PAGINATE
function get(url) {
  return axios
    .get(url)
    .then(res => res)
    .catch(err => console.log(err));
}
//POST
function post(url, data) {
  return axios
    .post(url, data)
    .then(res => res)
    .catch(err => console.log(err));
}

export { get, post };
