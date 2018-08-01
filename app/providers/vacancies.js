import axios from 'axios';

export default {
    async getVacancies(params) {
        try {
            let response = await axios.get('/api/vacancies/select',params);
            return response.data;
        }
        catch (e) {

        }
    }
};
