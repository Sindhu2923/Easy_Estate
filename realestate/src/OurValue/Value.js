import React from 'react';
import './Value.css';
import { Container, Col, Row, Accordion,} from 'react-bootstrap';

const Value = () => {
  return (
    <> 
          <Container fluid>
           <Row className='mt-4 justify-content-sm-center'>
            <Col xs={12} sm={12} md={5}>
            <img
              src='https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D'
              className='img-fluid border border-dark border-3  ms-lg-4 mt-sm-5 ' 
              alt='nothing'
              id='value-image'
            />
            </Col>
            <Col xs={12} sm={12} md={7} className='mt-sm-5 mt-5'>
            <Accordion defaultActiveKey='0' id='accordian' className='mt-lg-4'>
              
              <h3  style={{fontFamily: "Racing Sans One, sans-serif"}}>Our value</h3>
              <h1  style={{fontFamily: "Racing Sans One, sans-serif"}}>value we give to you</h1>
              <p style={{ fontFamily: "Balthazar, serif"}} className='fw-bold'>Diverse Investment Opportunities in Real Estate
              Exploring various avenues for financial growth and portfolio diversification, including rental properties, real estate investment trusts,innovative crowdfunding platforms.</p>

              <Accordion.Item eventKey='0'>
                <Accordion.Header><i class="bi bi-award-fill"> </i><span id="accheader" style={{ fontFamily: "Balthazar, serif"}}>Best interest rate on the market</span></Accordion.Header>
                <Accordion.Body style={{ fontFamily: "Balthazar, serif"}}>
                In today's dynamic real estate market, understanding current trends is crucial for both buyers and sellers. The rise of remote work has significantly influenced housing preferences,
                 with many individuals seeking larger homes in suburban areas. Additionally, the demand for eco-friendly properties is on the rise, as more buyers prioritize sustainability.
                  As we navigate these changes, it's essential to stay informed about local market conditions, interest rates, and emerging neighborhoods to make educated decisions in this 
                  ever-evolving landscape.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='1'>
              <Accordion.Header> <i class="bi bi-bank"></i> <span id="accheader" style={{ fontFamily: "Balthazar, serif"}}>Best interest rate on the market</span></Accordion.Header>
                <Accordion.Body style={{ fontFamily: "Balthazar, serif"}}>
                Effective property management is the backbone of successful real estate investment. A well-managed property not only enhances tenant satisfaction but also maximizes 
                rental income and preserves property value. Key components of successful property management include timely maintenance, transparent communication with tenants, and
                 strategic marketing to minimize vacancies. By leveraging technology and adopting best practices, property managers can streamline operations and create a positive
                  living experience for residents, ultimately leading to higher returns for property owners.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='2'>
              <Accordion.Header>  <i class="bi bi-balloon-fill"></i>  <span id="accheader" style={{ fontFamily: "Balthazar, serif"}}>Best interest rate on the market</span></Accordion.Header>
                <Accordion.Body style={{ fontFamily: "Balthazar, serif"}}>
                Real estate offers a plethora of investment opportunities for individuals looking to diversify their portfolios. From residential properties to commercial real estate, each 
                sector presents unique advantages and challenges. Investors can explore options such as flipping houses for quick profits, investing in rental properties for steady cash flow,
                 or participating in real estate investment trusts (REITs) for a more hands-off approach. Understanding market cycles and conducting thorough due diligence are critical steps 
                 in identifying lucrative opportunities and achieving long-term financial success in real estate.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            </Col>
            </Row>
            </Container>
    </>
  );
};

export default Value;
