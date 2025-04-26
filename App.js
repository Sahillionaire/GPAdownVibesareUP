
import './App.css';
import { db}from './firebase.js';
import { addDoc, collection, serverTimestamp} from 'firebase/firestore';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Inbox from './Inbox.js';

function App() {
  const navigate = useNavigate();
  const saveAnswer = async (e) => {
    e.preventDefault(); // move this to the top
    const name = e.target.name.value.trim();
    const units = e.target.units.value.trim();
    const bio = e.target.bio.value.trim();
    const degree = e.target.degree.value.trim();
  
    // Check for empty fields
    if (name === "" || units === "" || bio === "" || degree === "") {
      alert("Please fill in all fields");
      return;
    }
  
    // Validate units format
    const unitPattern = /^[A-Za-z]{3}\d{4}$/;
    const unitArray = units.split(',').map(u => u.trim());
  
    const allValid = unitArray.every(unit => unitPattern.test(unit));
    if (!allValid) {
      alert("Units must be comma-separated values in the format: 3 letters followed by 4 numbers (e.g., MAT1010, ENG2021)");
      return;
    }
  
    try {
      const userRef = collection(db, "users");
      await addDoc(userRef, {
        name,
        units: unitArray, // You can store it as an array
        bio,
        degree,
        timestamp: serverTimestamp(),
      });
      e.target.reset();
      e.target.name.focus();
      navigate('/inbox');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };  
  
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<div><h1>Tell us about you!</h1>
      <form onSubmit={saveAnswer}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br /> 
        <label>
          Degree:
          <input type="text" name="degree" />
        </label>
        <br />
        <label>
          Units:
          <input name="units" />
        </label>
        <br />
        <label>
          Bio:
          <textarea name="bio" rows="5" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form></div>} />
        <Route path="/inbox" element={<Inbox />} />
      </Routes>
    </div>
  );
}

export default App;
