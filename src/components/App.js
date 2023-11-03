import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    async function fetchDogImage() {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImage(data.message);
    }

    fetchDogImage();
  }, []);

  return (
    <div>
      {dogImage ? (
        <img src={dogImage} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
