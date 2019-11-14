import React from 'react';

function Banner() {
  var imgStyles = {
    backgroundImage: 'url(' + 'https://m.media-amazon.com/images/M/MV5BMTg1NzQwMDQxNV5BMl5BanBnXkFtZTgwNDg2NDYyNjM@._V1_SY1000_CR0,0,670,1000_AL_.jpg' + ')',

  };
  
  return (
    <div>
      <img style={imgStyles}></img>
    </div>
  );
}

export default Banner;