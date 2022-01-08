import Header from './Header.js';
import Worker from './Worker.js';
import Footer from './Footer.js';
import './App.css';

function App() {
  return (
    <div classNameName="App">
      {/* <Header /> */}
      <main role="main">

      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Arapahoe County CAPS</h1>
          <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
          <p>
            <a href="#" className="btn btn-primary my-2">Main call to action</a>
            <a href="#" className="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>
      </section>
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
