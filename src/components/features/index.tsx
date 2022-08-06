import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../lib/constants';

const Title = styled.div`
  grid-area: 1 / 1 / 2 / 4;
  justify-self: center;
  text-align: center;

  
  p:nth-child(1){
    font-size: 3rem;
    font-weight: 500;
    
    & span{
      font-weight: 600;
    }

    @media screen and (max-width: ${breakpoints.lg}){
      font-size: 2.5rem;
    }
    @media screen and (max-width: ${breakpoints.md}){
      font-size: 2rem;
    }
  }
  p:nth-child(2){
    font-weight: 400;
    color: #696969;
    @media screen and (max-width: ${breakpoints.xl}){
      font-size: 1.25rem;
      width: 38rem;
    }
    @media screen and (max-width: ${breakpoints.lg}){
      font-size: 1.2rem;
    }
    @media screen and (max-width: ${breakpoints.md}){
      font-size: 1rem;
      width: 100%;
    }
  }

`;

const StyledSection = styled.section`
  display: grid;
  grid-gap: 0 1rem;
  
  @media screen and (max-width: ${breakpoints.xl}){
    padding: 0 6rem;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: ${breakpoints.lg}){
    padding: 0 4rem;
    grid-template-columns: 1fr;
    grid-gap: 2rem;

    & ${Title}{
      grid-area: auto;
    }
  }
`;

const Feature = styled.div`
  width: 20rem;
  padding: 1rem;
  justify-self: center;
  text-align: center;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-sizing: border-box;

  @media screen and (max-width: ${breakpoints.lg}){
    width: 30rem;
    height: 10rem;
    padding: 1.5rem;
  }
  @media screen and (max-width: ${breakpoints.md}){
    width: 25rem;
    height: 10rem;
    padding: 1.5rem;
  }
  @media screen and (max-width: ${breakpoints.sm}){
    width: 100%;
  }

`;
const Name = styled.p`
  font-weight: 500;
  font-size: 2rem;
  margin: 1rem 0;
`;

const Details = styled.p`
  margin: 1rem 0;
`;


const Features = () => {
  return (
    <StyledSection>
      <Title>
        <p>Be a Creative <span>Creator</span></p>
        <p>Join the millions of creators, collectors, and curators who are on this journey with you.</p>
      </Title>
      <Feature>
        <Name>Connect</Name>
        <Details>Connect with supported wallets.</Details>
      </Feature>
      <Feature>
        <Name>Collect</Name>
        <Details>Unearth NFTs for yout growing collection.</Details>
      </Feature>
      <Feature>
        <Name>Sell</Name>
        <Details>Your NFTs will shine in our marketplace.</Details>
      </Feature>
    </StyledSection>
  )
}

export default Features;