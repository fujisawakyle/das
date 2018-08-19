import React, { Component } from "react";
import Link from "gatsby-link";

import StyledHeader from "../styles/styledComponents/blocks/styledHeader";
import BurgerMenu from "../components/BurgerMenu";

export default class Header extends Component {

    render() {
        return (
            <StyledHeader className="l-header">
                <Link to="/">
                    <img src="http://placehold.it/50x50" />
                </Link>
                <BurgerMenu />
            </StyledHeader>
        )
    }
}