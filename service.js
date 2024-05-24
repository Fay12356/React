import axios from 'axios'

const isDev = process.env.NODE_ENV === 'developmenr'
const ajax = axios.create({
    baseURL: isDev ? 'https://jsonplaceholder.typicode.com' : ''
})

ajax.interceptors.request.use((config) => {
    console.log(config)
    return config;
})

ajax.interceptors.response.use((resp) => {
    // console.log(config)
    if (resp.status === 200) {
        return resp.data
    } else {
        return {
            errMsg: 'unknown error'
        }
    }
    // return config;
})

export const getPosts = () => {
    return ajax.get('/posts')
}