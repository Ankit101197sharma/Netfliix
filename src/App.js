
import './App.css';

import LandingPage from './Components/LandingPage/LandingPage';
import Topbar from './Components/Topbar/Topbar';
import EnjoyTV from './Components/EnjoyTV/EnjoyTV';
import OfflineShow from './Components/OfflineShow/OfflineShow';
import WatchShow from './Components/WatchShow/WatchShow';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <LandingPage/>
      <EnjoyTV/>
      <OfflineShow/>
      <WatchShow/>
      <Footer/>
    </div>
  );
}

export default App;
