import { useState } from 'react';

const useRandomNumber = () => {
  // generateRandomNumber fonksiyonunu tanımlayalım
  const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  // Şimdi useState hook'unu kullanabiliriz
  const [randomNumber, setRandomNumber] = useState(() => generateRandomNumber());

  // Rastgele sayıyı yeniden oluşturan fonksiyon
  const regenerateRandomNumber = () => setRandomNumber(generateRandomNumber());

  return { randomNumber, regenerateRandomNumber };
};

export default useRandomNumber;
