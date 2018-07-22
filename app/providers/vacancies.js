import axios from 'axios';

export default {
    async getVacancies(params) {
        try {
            let response = axios.get('https://jobrum.com/Job/Search',params);
            return response.data;
        }
        catch (e) {

        }
    }
};
