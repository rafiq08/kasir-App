import React, { Component } from 'react';
import {Hasil, ListCategories, NavbarComponent, Menus} from './components';
import { Col, Row, Container } from 'react-bootstrap';
import { API_URL } from "./utils/constants";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      menus: [],
      categoriesYangDipilih: 'Makanan'
    }
  }

  componentDidMount() {
    axios
      .get(API_URL+"products?category.nama="+this.state.categoriesYangDipilih)
      .then(res => {
        const menus = res.data;
        this.setState({ menus });
    })
    .catch(error => {
      console.log("Error ya", error);
    })
  }

  changeCategory = (value) => {
    this.setState({
      categoriesYangDipilih: value,
      menus: []
    })

    axios
      .get(API_URL+"products?category.nama="+value)
      .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log("Error ya", error);
      })
  }

  render() {    
    const { menus, categoriesYangDipilih } = this.state;
    return (
      <div className="App">
        <NavbarComponent />
        <div className='mt-3'>
            <Container fluid>
              <Row>
                <ListCategories changeCategory={this.changeCategory} categoriesYangDipilih={categoriesYangDipilih} />
                  <Col>
                      <h4>
                          <strong>Daftar Produk</strong>
                      </h4>
                      <hr />
                      <Row>
                        {menus && menus.map((menu) => (
                          <Menus 
                            key={menu.id}
                            menu={menu}
                          />
                        ))}
                      </Row>
                  </Col>
                <Hasil />
              </Row>
            </Container>    
        </div>
      </div>
    );
  }
}