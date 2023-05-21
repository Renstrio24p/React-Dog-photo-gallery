import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Start(){
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <Footer />
        </div>
    )
}