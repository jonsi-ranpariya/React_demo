import React, { Component } from "react";

class Header extends Component{
    render(){
        return(

            <nav>
                
                <img src="./logo.png" className="logo" alt=""/>
                <ul>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Integrations</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Company</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><span><a href="#">Get a demo</a></span></li>
                    <li className="fa fa-user"><a href="#" > Login</a></li>
                </ul>
                
            </nav>

            )
    }
}
export default Header;