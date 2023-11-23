import React, { useEffect } from 'react';

const TabbedMenu = () => {
  useEffect(() => {
    // Click on the element with id="defaultOpen" when the component mounts
    document.getElementById('defaultOpen').click();
  }, []);

  const openCity = (cityName, elmnt, color) => {
    const tabcontent = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }

    const tablinks = document.getElementsByClassName('tablink');
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = '';
    }

    document.getElementById(cityName).style.display = 'block';
    elmnt.style.backgroundColor = color;
  };

  return (
    <div>
      <p>Click on the buttons inside the tabbed menu:</p>

      <div id="London" className="tabcontent">
        <h1>London</h1>
        <p>London is the capital city of England.</p>
      </div>

      <div id="Paris" className="tabcontent">
        <h1>Paris</h1>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="Tokyo" className="tabcontent">
        <h1>Tokyo</h1>
        <p>Tokyo is the capital of Japan.</p>
      </div>

      <div id="Oslo" className="tabcontent">
        <h1>Oslo</h1>
        <p>Oslo is the capital of Norway.</p>
      </div>

      <button
        className="tablink"
        onClick={(e) => openCity('London', e.target, 'red')}
        id="defaultOpen"
      >
        London
      </button>
      <button
        className="tablink"
        onClick={(e) => openCity('Paris', e.target, 'green')}
      >
        Paris
      </button>
      <button
        className="tablink"
        onClick={(e) => openCity('Tokyo', e.target, 'blue')}
      >
        Tokyo
      </button>
      <button
        className="tablink"
        onClick={(e) => openCity('Oslo', e.target, 'orange')}
      >
        Oslo
      </button>
    </div>
  );
};

export default TabbedMenu;
