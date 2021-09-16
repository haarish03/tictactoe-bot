import React from "react";

import not from "./notlis.js";
console.log(not);

function Asci(props) {

    return <div className = "note" > < h1 > { props.title } < /h1> <
    p > { props.content } < /p ></div > ;
}

function Cont(not) {
    return ( <
        Asci key = { not.key }
        title = { not.title }
        content = { not.content }
        />
    );
}

function Notes() {
    return <div > { not.map(Cont) } < /div > ;
}
export default Notes;