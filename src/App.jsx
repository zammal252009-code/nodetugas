import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const calonPeserta = [
    { nama: 'Tariq', nilaiUjian: 85 },
    { nama: 'Ziyad', nilaiUjian: 60 },
    { nama: 'Aisyah', nilaiUjian: 92 },
    { nama: 'Fulan', nilaiUjian: 70 },
    { nama: 'Khadijah', nilaiUjian: 88 }
  ];

  //tugas 1
  const pesertalolos = calonPeserta.filter(
    (peserta) => peserta.nilaiUjian >= 80
  );
  console.log(pesertalolos);

  //tugas 2
  const daftarnamalolos = calonPeserta.map(
    peserta => peserta.nama
  );
  console.log(daftarnamalolos);


  return (
    <>
      <div></div>
    </>
  )
}

export default App
