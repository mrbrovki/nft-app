import { FC, useEffect, useState } from 'react'
import { breakpoints } from '../../../lib/constants';
import styled, {css} from 'styled-components';
import axios from 'axios';
import { HandPicked, Nfts } from '../types';

const apiKey = process.env.REACT_APP_ALCHEMY_KEY;

const withMetadata = true;
const baseURL = `https://eth-mainnet.alchemyapi.io/nft/v2/${apiKey}/getNFTsForCollection`;

const StyledCollection = styled.div<{bgSrc: string, index: number}>`
  display: grid;
  grid-gap: 2rem;
  padding: 2rem;
  margin: 3rem 0;
  justify-items: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 15px;
  background: linear-gradient(to right, #0000002d, #0000005e),url(${props => props.bgSrc}) center/cover no-repeat;

  ${props => {
    switch(props.index){
      case 0:
        return css`
          @media screen and (max-width: ${breakpoints.xl}){
            grid-template-columns: repeat(3, 1fr);
          }
        `;
      case 1:
      case 2:
        return css`
           @media screen and (max-width: ${breakpoints.xl}){
            grid-template-columns: repeat(4, 1fr);
            div:nth-child(2n){
              align-self: flex-end;
            }
            div:nth-child(2n + 1){
              align-self: flex-start;
            }
          }
          @media screen and (max-width: ${breakpoints.lg}){
            div:nth-child(2){
              grid-column: 1 / 3;
            }
          }
          @media screen and (max-width: ${breakpoints.md}){
            div:nth-child(2){
              grid-column: auto;
            }
          }
        `;
    }
  }
}
  @media screen and (max-width: ${breakpoints.lg}){
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: ${breakpoints.md}){
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: ${breakpoints.xs}){
    padding: 2rem 1rem;
  }
`;

const Hashtag = styled.p`
  color: #fff;
  background-color: #ffffff63;
  margin: 0;
  padding: 10px;
  border-radius: 30px;
  line-height: 1rem;
  text-transform: uppercase;
`;

const Avatar = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 8px;
  outline: 6px solid #ffffff53;
  align-self: center;
  box-shadow: 0 0 10px #0000002c;
`;

const CollectionName = styled.p`
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
`;

const Amount = styled.p`
  color: #ffffffc7;
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0;
`;

const Social = styled(Hashtag)`
  opacity: 0.8;
  text-transform: lowercase;
`;

const CollectionInfo = styled.div<{index: number}>`
  display: grid;
  width: 100%;
  height: 28rem;
  align-items: center;
  justify-items: center;
  
  ${props => {
    switch(props.index){
      case 0:
        return css`
          @media screen and (max-width: ${breakpoints.xl}){
            grid-area: 1 / 2 / 2 / 3;
          }
          `;
        case 1:
        case 2:
          return css`
              @media screen and (min-width: ${breakpoints.lg}){
                  grid-template-columns: 1fr 1fr;
                  grid-gap: 1rem;
              
                  & ${Avatar}{
                  grid-area: 2 / 1 / 4 / 2;
                  justify-self: center;
                }
                  & ${CollectionName}{
                  grid-area: 2 / 2 / 3 / 3;
                  margin: 0;
                  justify-self: start;
                  align-self: flex-end;
                }
                  & ${Hashtag}{
                  grid-area: 1 / 1 / 2 / 2;
                  justify-self: center;
                  align-self: flex-end;
                }
                  & ${Amount}{
                  grid-area: 3 / 2 / 4 / 3;
                  align-self: flex-start;
                  justify-self: left;
                }
                  & ${Social}{
                  grid-area: 4 / 1 / 5 / 2;
                  justify-self: center;
                  align-self: flex-start;
                }
              }
            }
          `;
    }
  }
}
  @media screen and (max-width: ${breakpoints.lg}){
    grid-column: 1 / 3;
  }
  @media screen and (max-width: ${breakpoints.md}){
    grid-column: auto;
  }
`;

const Nft = styled.div<{index: number}>`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 12px #00000022;

  @media screen and (max-width: ${breakpoints.xl}){
    width: 20rem;
    height: 28rem;
  }

  @media screen and (max-width: ${breakpoints.sm}){
    width: 18rem;
    height: 26rem;
  }
  
  ${props => {
    switch(props.index){
      case 0:
        return css`
          & img{
            height: 22rem
          }
          @media screen and (max-width: ${breakpoints.sm}){
            & img{
              height: 20rem;
            }
          }

          @media screen and (max-width: ${breakpoints.lg}){
            grid-row: 2 / 3;
          }
          @media screen and (max-width: ${breakpoints.md}){
            grid-row: auto;
          }
        `;
      case 1:
      case 2:
        return css`
         @media screen and (max-width: ${breakpoints.xl}){
            width: 100%;
            max-width: 16rem;
            height: 20rem;

            & div p
            {
              font-size: 0.75rem;
            }
            & div p:nth-child(3){
              font-weight: 500;
              font-size: 1rem;
            }
          }
          @media screen and (max-width: ${breakpoints.lg}){
            grid-row: auto;
            max-width: 20rem;
            height: 26rem;
          }
        `;
    }
  }
}
`;

const Image = styled.img`
  width: 100%;
  
  @media screen and (max-width: ${breakpoints.xl}){
    height: 14rem;
  }

  @media screen and (max-width: ${breakpoints.lg}){
    height: 20rem;
  }

`;

const NftInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 2rem 2rem;
  padding: 1rem;
  color: #989898;

  & p{
    margin: 0;
  }

  p:nth-child(1){
    grid-area: 1 / 1 / 3 / 2;
    align-self: center;
  }

  p:nth-child(2){
    grid-area: 1 / 2 / 2 / 3;
    justify-self: end;
    text-transform: capitalize;
  }

  p:nth-child(3){
    grid-area: 2 / 2 / 3 / 3;
    justify-self: end;
    font-size: 1.5rem;
    font-weight: 600;
    color: black;
  }
`;

const Collection:FC<{index: number} & HandPicked> = (props) => {
  const {index, address, name, nftsTotal, hashtag, social} = props;
  const [data, setData] = useState<Nfts>();
  const url = `${baseURL}?contractAddress=${address}&withMetadata=${withMetadata}`;
  const config = {
    method: 'get',
    url,
  };

  useEffect(()=>{
    axios(config)
    .then(response => setData(response.data.nfts.slice(0, 5)))
    .catch(error => console.log(error));
  }, []);

  return data ? (<>
    <StyledCollection bgSrc={data[0].media[0].gateway} index={index}>
      <CollectionInfo index={index}>
        <Hashtag>{hashtag}</Hashtag>
        <Avatar src={data[0].media[0].gateway} />
        <CollectionName>{name}</CollectionName>
        <Amount>{nftsTotal} Nfts</Amount>
        <Social>{social}</Social>
      </CollectionInfo>
      {index === 0 ? 
        ([0,1].map(i => 
        <Nft index={index} key={i}>
          <Image src={data[i].media[0].gateway}/>
          <NftInfo>
            <p>by {social}</p>
            <p>buy now</p>
            <p>{((Math.random() * 4) + 1).toFixed(2)} ETH</p>
          </NftInfo>
        </Nft>)) :
        ([0,1,2].map(i => 
        <Nft index={index} key={i}>
          <Image src={data[i].media[0].gateway}/>
          <NftInfo>
            <p>by {social}</p>
            <p>buy now</p>
            <p>{((Math.random() * 4) + 1).toFixed(2)} ETH</p>
          </NftInfo>
        </Nft>))
      }
    </StyledCollection>
  </>) : (<></>);
}

export default Collection;