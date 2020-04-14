import React from 'react'
import './footer.css'


export default function Footer() {
    return (
       
        <footer className="footer">
        <div className="footer_top">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-md-6 col-lg-3">
                        <div className="footer_widget">
                            <div className="footer_logo">
                                <a href="/#">
                                    <img src="img/footer_logo.png" />
                                </a>
                            </div>
                            <p>
                                Esteem spirit temper too say adieus who <br/> direct esteem. It esteems luckily or <br/>
                                picture placing drawing.
                            </p>
                            <div className="socail_links">
                                <ul>
                                    <li>
                                        <a href="/#">
                                            <i className=" fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-2 col-md-6 col-lg-3">
                        <div className="footer_widget">
                            <h3 className="footer_title">
                                Services
                            </h3>
                            <ul>
                                <li><a href="/#">SEO/SEM </a></li>
                                <li><a href="/#">Web design </a></li>
                                <li><a href="/#">Ecommerce</a></li>
                                <li><a href="/#">Digital marketing</a></li>
                            </ul>

                        </div>
                    </div>
                    <div className="col-xl-2 col-md-6 col-lg-2">
                        <div className="footer_widget">
                            <h3 className="footer_title">
                                Useful Links
                            </h3>
                            <ul>
                                <li><a href="/#">About</a></li>
                                <li><a href="/#">Blog</a></li>
                                <li><a href="/#"> Contact</a></li>
                                <li><a href="/#">Support</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div className="footer_widget">
                            <h3 className="footer_title">
                                Subscribe
                            </h3>
                            <form className="newsletter_form">
                                <input type="text" placeholder="Enter your mail"/>
                                <button type="submit">Subscribe</button>
                            </form>
                            <p className="newsletter_text">Esteem spirit temper too say adieus who direct esteem esteems
                                luckily.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copy-right_text">
            <div className="container">
                <div className="footer_border"></div>
                <div className="row">
                    <div className="col-xl-12">
                     
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}
