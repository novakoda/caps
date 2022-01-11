import Header from './Header.js';
import Worker from './Worker.js';
import Footer from './Footer.js';
import Banner from './Banner.js';
import './App.css';

function App() {
  return (
    <div classNameName="App">
      {/* <Header /> */}
      <main role="main">
      <Banner />
      <Worker name="Social Caseworker A"/>
      <hr />
      <Worker name="Social Caseworker B - Intake"/>
      <hr />
      <Worker name="Social Caseworker A - Permanant"/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
