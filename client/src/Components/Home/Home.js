import React, { Component } from "react";
// import { SmileTwoTone } from "@ant-design/icons";
import Navbar from "../Navbar/navbar";
import Search from "../search.js/search";
import CardListing from "../CardLIsting/Cardlisting";
import Footer from "../footer/Footer";
// import Categories from "../categories.js/Categories";
import RecipeReviewCard from "../categories.js/Categories";

export default class Home extends Component {
    render() {
        return (
            <div className="home">
            <Navbar/>
            <Search/>
            <CardListing/>
            <RecipeReviewCard/>
            <Footer/>
            </div>
        );
    }
}
