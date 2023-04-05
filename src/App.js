import React from 'react';
import {Hasil, ListCategories, NavbarComponent} from './components';
import { Col, Row, Container } from 'react-bootstrap';

const App = () => {
  return (
    <div className="App">
      <NavbarComponent />
      <div className='mt-2'>
          <Container fluid>
            <Row>
              <ListCategories />
                <Col>
                    <h4><strong>Daftar Produk</strong></h4>
                    <hr />
                </Col>
              <Hasil />
            </Row>
          </Container>    
      </div>
    </div>
  );
}

export default App;
