import { Link } from 'react-router-dom';
import Button from '../../shared/Button';
import Search from './Search';
import styled from 'styled-components';
import { breakpoints } from '../../../lib/constants';

const StyledHeader = styled.header`
  height: 6rem;
  display: grid;
  grid-template-columns: 14rem 1fr 8rem 10rem;
  align-items: center;
  grid-gap: 1rem;
  background-color: #fff;
  position: fixed;
  z-index: 30;

  @media screen and (max-width: ${breakpoints.xl}){
    padding: 0 10rem;
    width: calc(100% - 20rem);
  }
  @media screen and (max-width: ${breakpoints.lg}){
    padding: 0 5rem;
    width: calc(100% - 10rem);
  }
  @media screen and (max-width: ${breakpoints.md}){
    display: none;
  }
`;

const Explore = styled.div`
  font-size: 1.2rem;
  font-weight: 600;

  & span{
    vertical-align: middle;
  }

  & img{
    vertical-align: middle;
  }

  &:hover{
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to='/'>
        <img src='/assets/logo.svg' alt='logo'/>
      </Link>
      <Search />
      <Explore>
        <span>Explore</span>
        <img src='/assets/arrow-down-icon-black.svg' alt='arrow down icon'/>
      </Explore>
      <Button background='black' color='white'>Connect Wallet</Button>
    </StyledHeader>
  )
}

export default Header;