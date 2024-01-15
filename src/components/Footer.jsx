import React from "react";

function Footer(){
    const date = new Date();
    let currentYear = date.getFullYear();
    console.log(currentYear)
    return <footer><p>copyright © {currentYear}</p></footer>
}

export default Footer;