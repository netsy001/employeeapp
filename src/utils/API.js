import axios from "axios";
const BASEURL = 'https://randomuser.me/api/';
console.log(BASEURL);
const APIKEY = "&apikey=trilogy";
console.log(APIKEY);

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};