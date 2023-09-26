import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDdmYzAwOTRlM2FlZjE5NGQ5YzZkYTVjNWVjZmNhMyIsInN1YiI6IjY1MGUxNDhjZjI5ZDY2MDExY2ZjNDQwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e7aW9p2YrK8d01n23eEU5BpKjo00MfDTlG1yS5xkAW0'
    }
})

export default api