import { useState, useEffect } from 'react'
import api from '../api'
import "bootstrap/dist/css/bootstrap.css"
import '../../src/index.css'


const TrendingMovies = () => {

  const [datas, setDatas] = useState([])
  

  useEffect(() => {
  
    const getMovies = async () => {
      const res = await api.get('movie/popular')
      
      if ( res.status === 200 ){
        setDatas(res.data.results)

        // console.log(res)
      } 
      
    }

    getMovies()

  }, []);
  return (
    <>
        <div className="container">
            <div className="row">
                {datas && datas.length ? (
                    datas.map( (data) => (
                    <div className="col-md-4 col-12 mt-4">
                        <div className="catogries-cards">
                             <h1>{data.title}{data.name}</h1>
                            <p>{data.release_date}</p>
                            {/* <img src={data.poster_path} alt="" /> */}
                        </div>
                    </div>
                    ))
                    ) : (
                    null
                )}
            </div>
        </div>
    </>
  )
}

export default TrendingMovies;
