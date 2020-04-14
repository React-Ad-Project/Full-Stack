import React from 'react'
import './search.css'

export default function Search() {
    return (
       <div className="slider_area">
        <div className="single_slider  d-flex align-items-center slider_bg_1">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-10">
                        <div className="slider_text text-center justify-content-center">
                            <p>Find Nearby Attraction</p>
                            <h3>Find Nearby Attraction</h3>
                            <div className="search_form">
                                <form action="#">
                                    <div className="row align-items-center">
                                        <div className="col-xl-5 col-md-4">
                                            <div className="input_field">
                                                <input type="text" placeholder="What are you finding?"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-4">
                                            <div className="input_field location">
                                                <input type="text" placeholder="Location"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-4">
                                            <div className="button_search">
                                                <button className="boxed-btn2" type="submit">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="quality">
                                <ul>
                                    <li>
                                        <button>Hotel</button>
                                    </li>
                                    <li>
                                        <button>Food</button>
                                    </li>
                                    <li>
                                        <button>Shopping</button>
                                    </li>
                                    <li>
                                        <button>Bar & Pubs</button>
                                    </li>
                                    <li>
                                        <button>Bar & Pubs</button>
                                    </li>
                                    <li>
                                        <button>Places</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
