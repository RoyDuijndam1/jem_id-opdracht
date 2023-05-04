import React from "react";
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Navbar />}>
            <Route path={""} element={<Home />}/>
            <Route path={"product/:id"} element={<ProductDetails/>}/>
        </Route>
    )
);

export default router;
