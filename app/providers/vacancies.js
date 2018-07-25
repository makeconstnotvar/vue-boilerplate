import axios from 'axios';

export default {
    async getVacancies(params) {
        try {
            let response = await axios.get('https://jobrum.com/Job/Search',params);
            return response.data.data;
        }
        catch (e) {

        }
    }
};
