import React from 'react';
import ProductList from "../../components/Products/ProductList";
import Layout from "../../components/Layout/Layout";
import ToolBar from "../../components/ToolBar/ToolBar";


const MainPage = () => {

    return (
        <Layout>
            <ProductList/>
            <ToolBar/>
        </Layout>
    );
};

export default MainPage;