import styled from 'styled-components';
import { breakpoints } from '../../lib/constants';
import useFetch from '../../lib/hooks/useFetch';
import Collection from './collection';
import {HandPicked} from './types';

const StyledCollections = styled.section`
  @media screen and (max-width: ${breakpoints.xl}){
    padding: 0 6rem;
  }
  @media screen and (max-width: ${breakpoints.lg}){
    padding: 0 5rem;
  }
  @media screen and (max-width: ${breakpoints.md}){
    padding: 0 3rem;
  }
  @media screen and (max-width: ${breakpoints.sm}){
    padding: 0 1.5rem;
  }
  @media screen and (max-width: ${breakpoints.xs}){
    padding: 0 1rem;
  }
`;

const Title = styled.div`
  margin: 3rem 0;

  & span{
    font-weight: 500;
    font-size: 1.2rem;
    margin-left: 10px;
    vertical-align: middle;
  }
  
  & img{
    vertical-align: middle;
  }

  @media screen and (max-width: ${breakpoints.md}){
    text-align: center;
  }
`;

const Collections = () => {
  const {data} = useFetch<HandPicked[]>('https://my-json-server.typicode.com/mrbrovki/demo/hand-picked-collections');
  return (
    <StyledCollections>
      <Title>
          <img src='/assets/collection-icon.svg' alt='collection icon'/>
          <span>Hand Picked Collections</span>
      </Title>
      {data?.map((collection, index) => (
        <Collection {...collection} index={index} key={collection.address}/>
      ))}
    </StyledCollections>
  )
}

export default Collections;