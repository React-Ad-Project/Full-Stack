import React, { Component } from "react";
import { SmileTwoTone } from "@ant-design/icons";
import Navbar from "../Navbar/navbar";
import Search from "../search.js/search";
import ViewCard from "../ViewCard/ViewCard";
export default class Home extends Component {
    render() {
        return (
            <div className="home">
            <Navbar/>
            <Search/>
            <ViewCard/>
            </div>
        );
    }
}
