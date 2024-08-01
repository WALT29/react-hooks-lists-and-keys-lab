import React from "react";



function NavBar() {
  const links = ["home", "about", "projects"];

  const link=links.map((element,index)=>{
    return <a key={element} href={`#${element}`}>{element}</a>
  })

  return <nav>{link}</nav>;
}

export default NavBar;
