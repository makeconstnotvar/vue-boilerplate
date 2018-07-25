import axios from 'axios';

export default  {
    async getFilter() {
        try {
            let response = await axios.get('https://jobrum.com/job/GetFilter');
            return response.data;
        }
        catch (e) {

        }
    }
};