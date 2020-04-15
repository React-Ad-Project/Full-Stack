import React from 'react'
import im from './catagory/1.png'
import './categories.css'
export default function Categories() {
    return (
    <div>
      
    <div className="popular_catagory_area">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="section_title mb-60 text-center">
                        <p>Discover</p>
                        <h3>
                            Most Popular Categories
                        </h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-3 col-md-4 col-lg-3">
                    <div className="single_catagory">
                        <div className="thumb">
                            <img src={im} alt="sfsd"/>
                        </div>
                        <div className="hover_overlay">
                            <div className="hover_inner">
                                <a href="Listings.html"><h4>Electronics and appliances</h4></a>
                                <span>05 Listings</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-4 col-lg-3">
                    <div className="single_catagory">
                        <div className="thumb">
                            <img src="img/catagory/2.png" alt=""/>
                        </div>
                        <div className="hover_overlay">
                            <div className="hover_inner">
                                <a href="Listings.html"><h4>Movies, music and events</h4></a>
                                <span>05 Listings</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-4 col-lg-3">
                    <div className="single_catagory">
                        <div className="thumb">
                            <img src="img/catagory/3.png" alt=""/>
                        </div>
                        <div className="hover_overlay">
                            <div className="hover_inner">
                                    <a href="Listings.html"><h4>Tours and travel</h4></a>
                                <span>05 Listings</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-4 col-lg-3">
                    <div className="single_catagory">
                        <div className="thumb">
                            <img src="img/catagory/4.png" alt=""/>
                        </div>
                        <div className="hover_overlay">
                            <div className="hover_inner">
                                    <a href="Listings.html"><h4>Movies, music and events</h4></a>
                                <span>05 Listings</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-4 col-lg-3">
                    <div className="single_catagory">
                        <div className="thumb">
                            <img src="img/catagory/5.png" alt=""/>
                        </div>
                        <div className="hover_overlay">
                            <div className="hover_inner">
                                    <a href="Listings.html"><h4>Fashion and lifestyle</h4></a>
                                <span>05 Listings</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-4 col-lg-3">
                    <div className="single_catagory">
                        <div className="thumb">
                            <img src="img/catagory/6.png" alt=""/>
                        </div>
                        <div className="hover_overlay">
                            <div className="hover_inner">
                                    <a href="Listings.html"><h4>Home and furniture</h4></a>
                                <span>05 Listings</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-4 col-lg-3">
                    <div className="single_catagory">
                        <div className="thumb">
                            <img src="img/catagory/7.png" alt=""/>
                        </div>
                        <div className="hover_overlay">
                            <div className="hover_inner">
                                    <a href="Listings.html"><h4>Healthcare and nutrition </h4></a>
                                <span>05 Listings</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-4 col-lg-3">
                    <div className="single_catagory">
                        <div className="thumb">
                            <img src="img/catagory/8.png" alt=""/>
                        </div>
                        <div className="hover_overlay">
                            <div className="hover_inner">
                                    <a href="Listings.html"><h4>Food and drinks</h4></a>
                                <span>05 Listings</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     </div>
    )
}
