const getRating = () => {  // 2.37
  return (Math.floor(Math.random() * 4) + 1 + Math.random()).toFixed(2);
}

const getReviews = () => {
  return Math.floor(Math.random() * 1500);
}

const getImageId = () => {
  return Math.floor(Math.random() * 6);// 0 - 5
}

const randomIntFromInterval = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}


export const getUpgradedTodos = (todos=[]) => {
  let upgradedTodos = [];

  for (let i = 0; i < todos.length; i++) {
    let t = todos[i];
    t.rating = getRating();
    t.reviews = getReviews();
    t.imageId = getImageId();
    upgradedTodos.push(t);

  }
  // console.log('lj upgradedTodos: ', upgradedTodos);
  return upgradedTodos;
}

export const randomImages = [
  require('../assests/photos/avenue.jpg'),
  require('../assests/photos/desert.jpg'),
  require('../assests/photos/fall.jpg'),
  require('../assests/photos/sunset.jpg'),
  require('../assests/photos/winter.jpg'),
  require('../assests/photos/zimaNS.jpg'),
];