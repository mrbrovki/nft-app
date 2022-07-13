import { useEffect, useState } from 'react';
import axios from "axios";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Category } from './types';
import { breakpoints } from '../../lib/constants';

const Title = styled.div`
  width: 100%;
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

const StyledCategories = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  @media screen and (max-width: ${breakpoints.xl}){
    padding: 0 8rem;
  }
  @media screen and (max-width: ${breakpoints.md}){
    padding: 0 5rem;
  }
  @media screen and (max-width: ${breakpoints.sm}){
    padding: 0 4rem;
  }
  @media screen and (max-width: ${breakpoints.xs}){
    padding: 0 1rem;
  }
`;

const CategoryLink = styled(Link)`
  width: 18rem;
  text-decoration: none;
  margin: 3rem 1rem;
  filter: drop-shadow(0 0 8px #00000039);
  &:hover p{
    cursor: pointer;
    background-color: black;
    color: white;
    transition: 0.3s;
  }
`;

const ImagesWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;

  & img:nth-child(2){
    position: absolute;
    z-index: 2;
    height: 11rem;
    width: 9rem;
    top: -1rem;
    left: 4.5rem;
  }
`;

const Image = styled.img`
  height: 10rem;
  width: 7rem;
  border-radius: 5px 5px 0 0;
`;

const Name = styled.p`
  width: 18rem;
  line-height: 3rem;
  position: absolute;
  z-index: 5;
  background-color: #F7F7F7;
  color: black;
  font-weight: 500;
  margin: -5px 0 0 0;
  padding-left: 1rem;
  box-sizing: border-box;
  border-radius: 0 0 5px 5px;
`;

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>();
  const getCategories = async () => {
    const resp = await axios.get('https://my-json-server.typicode.com/mrbrovki/demo/nft-categories');
    const data = await resp.data;
    setCategories(data);
  };

  useEffect(()=>{
    getCategories();
  }, []);

  return (
    <>
      <StyledCategories>
        <Title>
          <img src='/assets/collection-icon.svg' alt='collection icon'/>
          <span>Browse by Category</span>
        </Title>
        {categories?.map(category => <CategoryLink to={'collections/'+category.slug} key={category.slug}>
        <ImagesWrapper>
          {category.images.map(imageSrc => <Image src={imageSrc} key={imageSrc} alt='category image'/>)}
        </ImagesWrapper>
        <Name children={category.name}/>
        </CategoryLink>)}
      </StyledCategories>
    </>
  )
}

export default Categories;