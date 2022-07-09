import styled from 'styled-components';
import { breakpoints } from '../../../lib/constants';

const StyledSearch = styled.div`
  position: relative;
  grid-area: 1 / 2 / 2 / 3;

  @media screen and (max-width: ${breakpoints.md}){
    grid-area: 2 / 1 / 3 / 4;
  }
`;

const SearchIcon = styled.img.attrs({alt:'search icon'})` 
  position: absolute;
  left: 1rem;
  top: calc(1rem - 10px);
`;

const Input = styled.input.attrs({type:'search', size:30})`
  border: 1px solid #ababab;
  height: 2rem;
  border-radius: 1.5rem;
  width: 100%;
  padding-left: 3rem;
  font-size: 1rem;
  font-weight: 600;

  &::-webkit-search-cancel-button{
   display: none;
  }

  &:focus{ 
    outline: 1px solid #aaaaaa;
  }
`;

const Search = () => {
  return (
    <StyledSearch>
      <SearchIcon src='/assets/search-icon.svg' alt='search icon'/>
      <form>
        <Input placeholder='Search Creation...' />
      </form>
    </StyledSearch>
  )
}

export default Search;