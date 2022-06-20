import { Routes, Route } from "react-router-dom";
//  components
import Layout from "./components/layout";
//  pages
import CollectionPage from "./pages/CollectionPage";
import CreatorPage from "./pages/CreatorPage";
import ErrorPage from "./pages/ErrorPage";
import FeaturePage from "./pages/FeaturePage";
import Home from "./pages/Home";
import NftPage from "./pages/NftPage";



const App = () => {
  return (
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
  )
}

export default App;

