import React from 'react'
import 'Assets/css/App.css';

const App = () => {
  return (
    <>
     <input type="checkbox" className="check slide" id="checked-slide" />
     <input type="checkbox" className="check fade" id="checked-fade" />
     <input type="checkbox" className="check push" id="checked-push" />
     <input type="checkbox" className="check pull" id="checked-pull" />
     <label className="switch slide" for="checked-slide"></label>
     <label className="switch fade" for="checked-fade"></label>
     <label className="switch push" for="checked-push"></label>
     <label className="switch pull" for="checked-pull"></label>
     <div className="gatefold">
       <header className="header">
         <h1>Self introduce</h1>
       </header>
       <main className="contents">
         <section className="contents__inner">
           <h2>Daiki Muroga</h2>
           <p>Backend/Infrastracture developer</p>
         </section>
       </main>
       <footer className="footer">
         <p>contact</p>
       </footer>
     </div>
    </>
  );
}

export default App;
