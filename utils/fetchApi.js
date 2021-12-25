import axios from 'axios';

export const baseUrl ='https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'ed853e35f3msh37e36a27d662bc8p1e474ejsnb397c6721b9a'
          }
    });

    return data;
}