import './App.css';
import NavigationBar from './Components/Navigation/Navigation';
import Hero from './Components/Hero/Hero';
import Episode from './Components/Episodes/Episode';
import blogPosts from './Components/Episodes/EpisodeList';
import EpisodeList from './Components/Episodes/EpisodeList';
import { useState } from 'react';
import Host from './Components/Host/host';
import Collab from './Components/Collab/Collab';
import Bytopic from './Components/ByTopic/Bytopic';
import Mailbox from './Components/Mailbox/Mailbox';
import AllPodcast from './Components/AllPodcasts/AllPodcast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Writer from './Components/Writers/Writer';
import WriterList from './Components/Writers/WriterList';
import Merch from './Components/Merch/Merch';
import MerchList from './Components/Merch/MerchList';
import Footer from './Components/Footer/Footer';
import EpisodeContent from './Components/EpoisodeContent/EpisodeContent';
import Join from './Components/Join/Join';
function App() {
  const [blogPosts, setblogpost] = useState(EpisodeList);
  const [writerListt, setWriterList] = useState(WriterList)
  const [merchlist, setmerchlist] = useState(MerchList)



  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>
            <NavigationBar />
            <Hero />
            <Episode bloglist={blogPosts} />
            <Host />
            <Collab />
            <Bytopic />
            <Mailbox />
            <Footer />

          </>
        }>




        </Route>
        <Route path='/blog' element={
          <>
            <AllPodcast bloglist={blogPosts} />
            <Host />
            <Mailbox />
            <Footer />

          </>
        }

        >


        </Route>


        <Route path='/people' element={
          <>
            <NavigationBar />
            <Writer list={writerListt} />
            <Host />
            <Mailbox />
            <Footer />


          </>
        }>

        </Route>

        <Route path='/merch' element={<>
          <NavigationBar />
          <Merch list={merchlist} />
          <Mailbox />
          <Footer />
        </>}>


        </Route>


        <Route path='/blog/:topic' element={<>
          <NavigationBar />
          <EpisodeContent bloglist={blogPosts} />
          <Mailbox />
          <Footer />
        </>}>

        </Route>

        <Route path='/joinus' element={
          <Join />
        }></Route>
      </Routes>
    </Router>

  );
}

export default App;
