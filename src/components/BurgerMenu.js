import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";

import styles from "../styles/burgerMenuCss";
import StyledNav from "../styles/styledComponents/blocks/styledNav";
import headerData from "../data/header.json";

class BurgerMenu extends Component {
    state = { isOpen: false };

    // REACT LIFECYCLE

    render() {
        return (
            <Menu isOpen={this.state.isOpen} right styles={styles}>
                <StyledNav>
                    {this.renderNavLinks()}
                </StyledNav>
            </Menu>

        );
    }

    // PARTIALS

    renderNavLinks = () => {
        return headerData.links.map(link => this.renderLink(link.linkText, link.path))
    }

    renderLink = (linkText, path) => {
        return (
            <StyledNav.LinkContainer>
                <StyledNav.Link key={path} onClick={() => {
                    this.closeMenu();
                }} >{linkText}</StyledNav.Link>
                <StyledNav.Divider />
            </StyledNav.LinkContainer>
        )
    }

    // HELPERS

    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen })
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu() {
        this.setState({ menuOpen: false })
    }
}

export default BurgerMenu;
