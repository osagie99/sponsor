import React, {useState} from 'react'
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap'
import logo from "../../img/LOGO.png";
import './cardStyles.css'

const CardComponent = () => {
  const handleSubmit = () => {
    console.log();
  }
  return (
    <div className="container">
      <div className="column1">
        <div className="column-content">
          <h1>Sponsor Now</h1>
          <p>
            Join us to spread God's
            <span>message of Love to His people</span>
            <span>by sponsoring copies of</span>
            Now That You Are Born Again!
          </p>
        </div>
      </div>
      <div className="column2">
        <img src={logo} alt="" />
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" id="fname" name="fname" />
          <br />
          <input type="email" placeholder="Email" id="email" name="email" />
          <br />
          <input type="text" placeholder="Amount" id="amount" name="amount" />
          <br />
          <input
            type="text"
            placeholder="Currency"
            id="currency"
            name="currency"
          />
          <br />
          <button type="submit">Donate Now</button>
        </form>
        <p>© 2021 Loveworld Publishing Limited. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default CardComponent
