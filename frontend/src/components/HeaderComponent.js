import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMenuOpen: false,
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState((prevState) => ({
            isMenuOpen: !prevState.isMenuOpen,
        }));
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-dark" style={{ backgroundColor: '#4CAF50' }}>
                        <div className="container">
                            <Link to="/" className="navbar-brand">
                                <button className="btn btn-success">
                                    Transaction Keeper
                                </button>
                            </Link>

                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                                onClick={this.toggleMenu}
                            >
                            </button>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
