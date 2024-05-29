import React, { useState, useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CountriesList from "../Small components/CountriesList";
import Navigation from "./Navigation";

const NavBar = () => {
  // State to manage the display of the countries card
  const [showCountriesCard, setShowCountriesCard] = useState(false);

  useEffect(() => {
    // Event listener to show the countries card
    const handleShowCountriesCard = () => {
      setShowCountriesCard(true);
    };

    // Event listener to hide the countries card
    const handleCloseCountriesCard = (e) => {
      e.preventDefault();
      setShowCountriesCard(false);
    };

    // Add event listeners when the component mounts
    const hideListButton = document.getElementById('hideListButton');
    const closeCardLink = document.getElementById('close-card');

    hideListButton.addEventListener('click', handleShowCountriesCard);
    closeCardLink.addEventListener('click', handleCloseCountriesCard);

    // Clean up event listeners when the component unmounts
    return () => {
      hideListButton.removeEventListener('click', handleShowCountriesCard);
      closeCardLink.removeEventListener('click', handleCloseCountriesCard);
    };
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className="bg-body-tertiary justify-content-between">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav>
            <header className="mb-3">
              <Navigation />
                <div className="countries-card card border-0 py-3 px-4" id="countriesCard" style={{ display: showCountriesCard ? 'block' : 'none' }}>
                  <div className="top d-flex align-items-center justify-content-between">
                    <img src="./assets/images/icons/search.png" alt="" />
                    <input type="search" placeholder="search" />
                    <a href="/home" id="close-card"><img src="./assets/images/icons/cross.png" alt="" /></a>
                  </div>
                  <CountriesList />
                </div>
            </header>
          </Nav>
        </Container>
        <Form inline>
          <Row>
            <Col xs="auto">
              <Button type="export">Export</Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
    </>
  );
}

export default NavBar;