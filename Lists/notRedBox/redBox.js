(function() {
  const List = require('../adtList.js');

  function getMovieData(file) {
    const fs = require('fs');

    let movieData = fs.readFileSync(file, 'utf8');

    return movieData;
  }

  let allMovies = getMovieData('./films.txt').split('\n');

  let movieList = new List();

  allMovies.forEach((title) => {
    title = title.split('.')[1].trim().toUpperCase();
    movieList.append(title);
  });

  class Customer {
    constructor(name, movie) {
      this.name = name;
      this.movie = movie;
    }
  };

  let customers = new List();

  checkOut('jon', 'Fight Club', movieList, customers);


  function checkOut(customerName, movie, filmList, customerList) {
    if (movieList.contains(movie)) {
      var c = new Customer(customerName, movie);
      customerList.append(c);
      filmList.remove(movie);
    } else {
      console.log('movie not available');
    }
  }

  function displayList(list) {
    for (list.front(); list.currentPosition < list.getSize(); list.next()) {
      if (list.getElement() instanceof Customer) {
        console.log(`${list.getElement().name}, ${list.getElement().movie}`);
      }
      else {
        console.log(list.getElement());
      }
    }
  }

}());