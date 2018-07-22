import axios from 'axios';

const vacanciesProvider = {
    async getFilter() {
        try {
            let response = await axios.get('https://jobrum.com/job/GetFilter');
            return response.data;
        }
        catch (e) {

        }
    }
};
export {vacanciesProvider};