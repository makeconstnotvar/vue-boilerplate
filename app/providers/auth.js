''
import axios from 'axios';

export default {
  
  async login(data) {
    
    let response = await axios.post('http://dev-rabota.integrum.net/Account/Authentication', data, {withCredentials: true});
    return response.data;
    
  }
}
