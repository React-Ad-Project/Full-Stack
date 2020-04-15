import React, { Component } from "react";
// import { SmileTwoTone } from "@ant-design/icons";
import Search from "../search.js/search";
import CardLIsting from "../CardLIsting/Cardlisting";
import Footer from "../footer/Footer";
import { Divider} from 'antd';
import Categories from "../categories/Categories";
// import Categories from "../categories.js/Categories";
// import CardLIsting from "../categories.js/Categories";

export default class Home extends Component {
    render() {
        return (
            <div className="home">
            <Search/>
            <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}> </Divider>
            <CardLIsting/>
            <Categories/>
            <Footer/>
        
            </div>
        );
    }
}
