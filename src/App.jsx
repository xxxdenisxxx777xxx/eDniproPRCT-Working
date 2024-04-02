import React from 'react';
import './App.css'

function Lend() {
  return (
    <div className='body'>
      <img src='https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/Group%2013.png' className='img-header' alt='alt1' />
      <h2 className='text-title'>Знайти депутата за адресою</h2>
      <input
        type='text'
        placeholder='Введіть імʼя депутата'
        className='search-input'
      />
      <i class="fas fa-search"></i>

      {/* <div class="search-container">
        <input
          type='text'
          placeholder='Введіть імʼя депутата'
          className='search-input'
        />
        
      </div> */}
      <h1 className='text-title'>або за фракцією</h1>
      <br />
      <div className='flx-btn'>
        <button className='btn-title'>ПРОПОЗИЦІЯ</button>
        <button className='btn-title'>ЗА УКРАЇНУ! ЗА ДНІПРО!</button>
        <button className='btn-title'>ЄВРОПЕЙСЬКА СОЛІДАРНІСТЬ</button>
        <button className='btn-title'>ГРОМАДСЬКА СИЛА</button>
        <button className='btn-title'>БЛОК ВІЛКУЛА «УКРАЇНСЬКА ПЕРСПЕКТИВА»</button>
        <button className='btn-title'>СЛУГА НАРОДУ</button>
      </div>
      <br />
      <div className='griid'>
        <div className='card-people'>
          <img src="https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/Rectangle%206491.png" className='img-card' alt="alt3" />
          <h1 className='name-card'>Ірина Гуль</h1>
          <h6 className='name-description'> Слуга народу</h6>
        </div>
        <div className='card-people'>
          <img src="https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/5.png" className='img-card' alt="alt3" />
          <h1 className='name-card'>Ірина Гуль</h1>
          <h6 className='name-description'> Слуга народу</h6>
        </div>
        <div className='card-people'>
          <img src="https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/3.png" className='img-card' alt="alt3" />
          <h1 className='name-card'>Ірина Гуль</h1>
          <h6 className='name-description'> Слуга народу</h6>
        </div>
        <div className='card-people'>
          <img src="https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/4.png" className='img-card' alt="alt3" />
          <h1 className='name-card'>Ірина Гуль</h1>
          <h6 className='name-description'> Слуга народу</h6>
        </div>
      </div>
    </div>

  );
}

export default Lend;