import axios from 'axios';

export default  {
    async getFilter() {
        try {
            let response = await axios.get('/api/filter/vacancies/select');
            return response.data;
        }
        catch (e) {

        }
    }
};