import React, { Component } from "react";
import LoginModal from './loginModal.js';



class SearchBar extends Component { 
    constructor(){
        super();
        this.state={
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return(
            <>
                <div className="searchContainer">
                    <div className="grid-container">
                        <div className="grid-item1"></div>
                        <div className="grid-item2 searchBar">
                            <div className="">
                                <button className="searchButton">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                            <div>
                                <input className="searchInput" name="searchInput"/>
                            </div>
                        </div>
                        <div className="grid-item3 searchLogin">
                            <div>
                                <i className="far fa-user searchIcon"></i>
                            </div>
                            <div>
                                <button className="searchLoginButton" onClick={this.showModal}>
                                    LOGIN
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <LoginModal show={this.state.show} handleClose={this.hideModal}></LoginModal>
            </>
        )
    }
}

export default SearchBar;