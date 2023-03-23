import axios from 'axios'

const URL = 'http://localhost:5000/table'

export const loading = async () => {
    const res = await (await axios.get(URL + '/getTable')).data
    return res;
}

export const api = async () => {

}


