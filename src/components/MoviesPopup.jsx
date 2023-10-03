import React from 'react'

export default function MoviesPopup({overview, name, title, img, vote}) {
  return (
    <div className='row'>
        <div className='col-9'>
            <div className='movies-popup'>
                <div className="row">
                    <div className="col-2">
                        <div className='popup-leftarea'>
                            <img className='img-fluid popularmovie-img' src={"https://image.tmdb.org/t/p/w500/" + img} alt="" />
                        </div>
                    </div>
                    <div className='col-10'>
                        <div className='popup-rightarea'>
                            <div className='d-flex align-items-center justify-content-between mb-2'>
                                <h2 className='mb-0'>{title}{name}</h2>
                                <span>{vote}</span>
                            </div>
                            <p>{overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}
