import './App.css';
import { useState } from 'react';
import cat1 from './cat1.jpg';
import cat2 from './cat2.jpg';
import dog1 from './dog1.jpg';
import dog2 from './dog2.jpg';
import logo from './logo.png'; // Add your logo image here

function App() {
  const [modalType, setModalType] = useState(null);
  const [selectedPet, setSelectedPet] = useState('');
  const [adoptForm, setAdoptForm] = useState({ name: '', email: '', pet: '', reason: '' });

  const pets = [
    { id: 'Snowball', type: 'Cat', age: '2 years', desc: 'Friendly and playful.', img: cat1 },
    { id: 'Mittens', type: 'Cat', age: '3 years', desc: 'Calm and loving.', img: cat2 },
    { id: 'Rex', type: 'Dog', age: '4 years', desc: 'Loyal and energetic.', img: dog1 },
    { id: 'Buddy', type: 'Dog', age: '1 year', desc: 'Playful and sweet.', img: dog2 },
  ];

  const handleAdoptClick = (petName) => {
    setSelectedPet(petName);
    setAdoptForm({ ...adoptForm, pet: petName });
    setModalType('adopt');
  };

  const handleSubmit = (type) => {
    if (type === 'adopt') {
      alert(`Thank you ${adoptForm.name}, your request to adopt ${adoptForm.pet} has been submitted!`);
      setAdoptForm({ name: '', email: '', pet: '', reason: '' });
    }
    setModalType(null);
  };

  return (
    <>
      <header>Pet Heaven Animal Welfare Society</header>

      <nav>
        <button onClick={() => setModalType('member')}>Become a Member</button>
        <button onClick={() => setModalType('release')}>Release Pet</button>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-text">
            <h2>Welcome to Pet Heaven</h2>
            <p>We provide safe homes for abandoned cats and dogs.</p>
        </div>

        <div className="hero-logo">
            <img src={logo} alt="Pet Heaven Logo" />
        </div>
      </section>

      <section className="pet-section">
        <h2>Available Pets</h2>
        <div className="pet-grid">
          {pets.map(p => (
            <div key={p.id} className="pet-card">
              <img src={p.img} alt={p.id} className="animal" />
              <div className="pet-info">
                <h3>{p.id} ({p.type})</h3>
                <p>Age: {p.age}</p>
                <p>{p.desc}</p>
              </div>
              <button className="adopt-btn" onClick={() => handleAdoptClick(p.id)}>Adopt this Pet</button>
            </div>
          ))}
        </div>
      </section>

      {modalType && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>
                {modalType === 'member' ? 'Become a Member' :
                  modalType === 'release' ? 'Release Your Pet' :
                  'Adopt a Pet'}
              </h2>
              <button className="close-btn" onClick={() => setModalType(null)}>X</button>
            </div>

            {modalType === 'member' && (
              <form onSubmit={e => { e.preventDefault(); alert(`Thank you ${e.target.name.value}!`); setModalType(null); }}>
                <label>Name</label>
                <input type="text" name="name" required />
                <label>Email</label>
                <input type="email" name="email" required />
                <label>Why do you want to support us?</label>
                <textarea rows="4" name="reason" />
                <button type="submit" className="submit-btn">Submit</button>
              </form>
            )}

            {modalType === 'release' && (
              <form onSubmit={e => { e.preventDefault(); alert(`Release form submitted!`); setModalType(null); }}>
                <label>Your Name</label>
                <input type="text" name="name" required />
                <label>Pet Type</label>
                <select name="type">
                  <option>Cat</option>
                  <option>Dog</option>
                </select>
                <label>Reason for Release</label>
                <textarea rows="4" name="reason" />
                <button type="submit" className="submit-btn">Submit</button>
              </form>
            )}

            {modalType === 'adopt' && (
              <form onSubmit={e => { e.preventDefault(); handleSubmit('adopt'); }}>
                <label>Your Name</label>
                <input type="text" value={adoptForm.name} onChange={e => setAdoptForm({ ...adoptForm, name: e.target.value })} required />
                <label>Email</label>
                <input type="email" value={adoptForm.email} onChange={e => setAdoptForm({ ...adoptForm, email: e.target.value })} required />
                <label>Pet You Wish to Adopt</label>
                <input type="text" value={adoptForm.pet} readOnly />
                <label>Why do you want to adopt this pet?</label>
                <textarea rows="4" value={adoptForm.reason} onChange={e => setAdoptForm({ ...adoptForm, reason: e.target.value })} />
                <button type="submit" className="submit-btn">Submit</button>
              </form>
            )}
          </div>
        </div>
      )}

      <footer>
        <p>Contact: info@petheaven.com | &copy; 2025 Pet Heaven Animal Welfare Society</p>
      </footer>
    </>
  );
}

export default App;
