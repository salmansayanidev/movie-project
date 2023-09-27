import "bootstrap/dist/css/bootstrap.css"
import "../index.css"



const Banner = () => {
    return (
        <>
            <section className="banner">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="banner-content">
                                <h1 className="banner-title">Welcome.</h1>
                                <h3 className="banner-sb-title">Millions of movies, TV shows and people to discover. Explore now.</h3>
                                <input type="search" className="banner-input" name="" id="" placeholder="Search for a movie, tv show, person"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;