import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users/1';

export const getUserWithAxios = async () => {
    const { data } = await axios.get(url);
    return data;
};


export const getUserWithFetch = async () => {

    //algo

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    
    return data;
}; 
