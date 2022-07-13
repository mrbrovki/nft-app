export interface HandPicked{
  address: string,
  name: string,
  nftsTotal: number,
  hashtag: string,
  social: string,
}

export type Nfts = {
 media: {
  gateway: string,
 }[],
 id: {
  tokenId: string,
 },
 metadata: {
  properties: {
   collection: string,
  }
 }
}[];
