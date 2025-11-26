import './App.css';
import cat1 from './cat1.jpg';
import cat2 from './cat2.jpg';
import dog1 from './dog1.jpg';
import dog2 from './dog2.jpg';

function App() {
  return (
    <>
      <header>Pet Heaven Animal Welfare Society</header>

      <nav>
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#adopt">Available Pets</a>
        <a href="#member">Become a Member</a>
        <a href="#release">Release Pet</a>
        <a href="#adopt-form">Adopt Pet</a>
      </nav>

      <section id="about">
        <h2>About Pet Heaven</h2>
        <p>
          Pet Heaven, where we provide safe homes for abandoned cats and dogs.
        </p>

      </section>

      <section id="gallery">
        <h2>Pet Gallery</h2>
        <div className="gallery">
          <img src={cat1} alt="Cat" />
          <img src={cat2} alt="Cat"/>
          <img src={dog1} alt="Dog"/>
          <img src={dog2} alt="Dog"/>

        </div>
      </section>

      <section id="adopt">
        <h2>Pets Available for Adoption</h2>

        <div className="pet-card">
          <div className="pet-info">
            <h3>Snowball (Cat)</h3>
            <p>Age: 2 years</p>
            <p>Friendly and playful.</p>
          </div>
          <img src={cat1} alt="Cat1" className='animal'/>
        </div>

        <div className="pet-card">
          <div className="pet-info">
            <h3>Rex (Dog)</h3>
            <p>Age: 4 years</p>
            <p>Loyal and energetic.</p>
          </div>
          <img src={dog1} alt="Dog" className='animal'/>
        </div>

      </section>

      <section id="member">
        <h2>Become a Member</h2>
        <form action="#" method="post">
          <label>Name</label>
          <input type="text" required />

          <label>Email</label>
          <input type="email" required />

          <label>Why do you want to support us?</label>
          <textarea rows="4" />

          <button>Submit</button>
        </form>
      </section>

      <section id="release">
        <h2>Release Your Pet to Pet Heaven</h2>
        <form action="#" method="post">
          <label>Your Name</label>
          <input type="text" required />

          <label>Pet Type</label>
          <select>
            <option>Cat</option>
            <option>Dog</option>
          </select>

          <label>Reason for Release</label>
          <textarea rows="4" />

          <button>Submit</button>
        </form>
      </section>

      <section id="adopt-form">
        <h2>Adopt a Pet</h2>
        <form action="#" method="post">
          <label>Your Name</label>
          <input type="text" required />

          <label>Pet You Wish to Adopt</label>
          <input type="text" placeholder="e.g., Snowball" />

          <label>Why do you want to adopt this pet?</label>
          <textarea rows="4" />

          <button>Submit</button>
        </form>
      </section>
    </>
  );
}

export default App;
