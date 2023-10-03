import "bootstrap/dist/css/bootstrap.css"
import "../index.css"
import { useState , useEffect } from "react"
import api from '../api'




const Banner = () => {


    const [search , setSearch] = useState([])

    useEffect(() => {

        const searchMovies = async () => {
            const res = await api.get(`/search/movie?query=${search}&api_key=fd7fc0094e3aef194d9c6da5c5ecfca3`)

            if (res.status === 200) {
                
                setSearch(res.data.results)

            } 
        }
        searchMovies();

    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearch('')
    };
    
    return (
        <>
            <section className="banner">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="banner-content">
                                <h1 className="banner-title">Welcome.</h1>
                                <h3 className="banner-sb-title text-none">Millions of movies, TV shows and people to discover. Explore now.</h3>
                                <form onSubmit={handleSubmit} className="banner-search-area">
                                    <input onChange={e => setSearch(e.target.value)} type="text" className="banner-input" name="" id="" placeholder="Search for a movie, tv show, person"/>
                                    <button type="submit" className="banner-btn">search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;