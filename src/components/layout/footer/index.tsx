import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../../lib/constants';

const StyledFooter = styled.footer`
  background-color: #000;
  margin-top: 10rem;
  box-sizing: border-box;
  min-height: 20rem;
  padding: 4rem;
  `;
const Table = styled.table`
  color: #ffffffe7;
  width: 40rem;
  & td{
    text-align: center;
  }
  & th{
    color: #ffffff98;
    font-weight: 500;
  }

  @media screen and (max-width: ${breakpoints.md}){
    width: 100%;
    }
  `;

const StyledLinks = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 1rem;

  & div{
    align-self: flex-end;
    color: #fff;
    font-weight: 100;

    @media screen and (max-width: ${breakpoints.md}){
    text-align: center;
    width: 100%;
    margin-bottom: 2rem;
    }
  }
  
`;
const Footer = () => {
  return (
    <StyledFooter>
      <img src='./assets/footer-logo.svg' alt='footer logo'/>
      <StyledLinks>
        <div>
          <p>Privacy Policy</p>
          <p>Terms of Services</p>
        </div>
        <Table>
          <thead>
            <tr>
            <th>Learn</th>
            <th>Company</th>
            <th>Connect</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>Create</td>
              <td>Careers</td>
              <td>Twitter</td>
            </tr>
            <tr>
              <td>Collect</td>
              <td>Help Center</td>
              <td>Instagram</td>
            </tr>
            <tr>
              <td>Sell</td>
              <td>Subscribe</td>
              <td>Youtube</td>
            </tr>
          </tbody>
        </Table>
      </StyledLinks>
    </StyledFooter>
  )
}

export default Footer;