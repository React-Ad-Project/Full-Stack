import React, { Component } from "react";
// import { SmileTwoTone } from "@ant-design/icons";
import Navbar from "../Navbar/navbar";
import Search from "../search.js/search";
import CardLIsting from "../CardLIsting/Cardlisting";
import Foote from "../footer/Footer";
import { Layout ,Divider} from 'antd';

const {  Footer } = Layout;
// import Categories from "../categories.js/Categories";
// import CardLIsting from "../categories.js/Categories";

export default class Home extends Component {
    render() {
        return (
            <div className="home">
            <Navbar/>
            <Search/>
            <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}> </Divider>
            <CardLIsting/>

            <Footer >
            <Foote/>
            </Footer>
            </div>
        );
    }
}
