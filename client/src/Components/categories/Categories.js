import React from 'react'
import i1 from './catagory/1.png'
import i2 from './catagory/2.png'
import i3 from './catagory/3.png'
import i4 from './catagory/4.png'
import i5 from './catagory/5.png'
import i6 from './catagory/6.png'
import i7 from './catagory/7.png'
import i8 from './catagory/8.png'

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
                            <img src={i1} alt="sfsd"/>
                        </div>
                        <div className="hover_overlay">
                            <div className="hover_inner">
                                <a href="Listings.html"><h4>Electronics and appliances</h4></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-4 col-lg-3">
                    <div className="single_catagory">
                        <div className="thumb">
                            <img src={i2} alt=""/>
                        </div>
                        <div className="hover_overlay">
                            <div className="hover_inner">
                                <a href="Listings.html"><h4>Movies, music and events</h4></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-4 col-lg-3">
                    <div className="single_catagory">
                        <div className="thumb">
                            <img src={i3} alt=""/>
                        </div>
                        <div className="hover_overlay">
                            <div className="hover_inner">
                                    <a href="Listings.html"><h4>Tours and travel</h4></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-4 col-lg-3">
                    <div className="single_catagory">
                        <div className="thumb">
                            <img src={i4} alt=""/>
                        </div>
                        <div className="hover_overlay">
                            <div className="hover_inner">
                                    <a href="Listings.html"><h4>Movies, music and events</h4></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-4 col-lg-3">
                    <div className="single_catagory">
                        <div className="thumb">
                            <img src={i5} alt=""/>
                        </div>
                        <div className="hover_overlay">
                            <div className="hover_inner">
                                    <a href="Listings.html"><h4>Fashion and lifestyle</h4></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-4 col-lg-3">
                    <div className="single_catagory">
                        <div className="thumb">
                            <img src={i6} alt=""/>
                        </div>
                        <div className="hover_overlay">
                            <div className="hover_inner">
                                    <a href="Listings.html"><h4>Home and furniture</h4></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-4 col-lg-3">
                    <div className="single_catagory">
                        <div className="thumb">
                            <img src={i7} alt=""/>
                        </div>
                        <div className="hover_overlay">
                            <div className="hover_inner">
                                    <a href="Listings.html"><h4>Healthcare and nutrition </h4></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-4 col-lg-3">
                    <div className="single_catagory">
                        <div className="thumb">
                            <img src={i8} alt=""/>
                        </div>
                        <div className="hover_overlay">
                            <div className="hover_inner">
                                    <a href="Listings.html"><h4>Food and drinks</h4></a>
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
