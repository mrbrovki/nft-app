import { Routes, Route } from "react-router-dom";
import { createGlobalStyle, css } from 'styled-components'
//  components
import Layout from "./components/layout";
//  pages
import CollectionPage from "./pages/CollectionPage";
import CreatorPage from "./pages/CreatorPage";
import ErrorPage from "./pages/ErrorPage";
import FeaturePage from "./pages/FeaturePage";
import Home from "./pages/Home";
import NftPage from "./pages/NftPage";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
  }
`

const App = () => {
  return (
   <>
    <GlobalStyle />
    <Routes>
    <Route path='/' element={<Layout />} >
      <Route index element={<Home />} />
      <Route path='collections/:collection' element={<CollectionPage />} />
      <Route path='features/:feature' element={<FeaturePage />} />
      <Route path='creators/:creator'>
        <Route index element={<CreatorPage />} />
        <Route path=':id' element={<NftPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Route>
   </Routes>
   </>
  )
}

export default App;

