import styled, {css} from 'styled-components';
import { breakpoints } from '../lib/constants';

const StyledHero = styled.div`
  display: flex;
  height: 40rem;
  width: 100%;
  background: linear-gradient(to bottom, #00000027, #00000082), url('/assets/hero2684.png') center/cover no-repeat fixed;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 0;

  @media screen and (max-width: ${breakpoints.md}){
    height: 100vh;
  }
`;

const Text = styled.p`
  color: white;
  font-weight: 300;
`;

const BoldText = styled(Text)`
  font-weight: 500;
`;

const Brand = styled.h1`
  color: #fff;
  font-weight: 600;
  margin: 0;

  @media screen and (max-width: ${breakpoints.xl}){
    font-size: 10rem;
  }
  @media screen and (max-width: ${breakpoints.lg}){
    font-size: 8rem;
  }
  @media screen and (max-width: ${breakpoints.md}){
    font-size: 6;
  }
  @media screen and (max-width: ${breakpoints.sm}){
    font-size: 4rem;
  }
`;

const Button = styled.button<{$mode: 'dark'|'light'}>`
  width: 5rem;
  height: 2rem;
  border: none;
  border-radius: 18px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-right: 1rem;

  & span{
    vertical-align: middle;
  }

  & img{
    height: 15px;
    vertical-align: middle;
  }

  &:hover{
    cursor: pointer;
  }

  ${props => {
    switch(props.$mode){
      case 'dark': 
        return css `
          background-color: #000;
          color: #fff;
        `;
      case 'light':
        return css `
          background-color: #fff;
          color: #000;
        `;
      default: 
        return css ``;
    }
  }};
`;

const Hero = () => {
 return (
  <StyledHero>
   <Text>Welcome to</Text>
   <Brand>Creation</Brand>
   <BoldText>Community for Creative Creators</BoldText>
   <div>
    <Button $mode='light'>
     <span>Create</span>
     <img src='/assets/arrow-down-icon-black.svg' alt='arrow down'/>
    </Button>
    <Button $mode='dark'>
     <span>Explore</span>
     <img src='/assets/arrow-down-icon-white.svg' alt='arrow down'/>
    </Button>
   </div>
  </StyledHero>
 )
}

export default Hero;