app.factory("books", ["$http", function ($http) {
    return $http.get("https://content.codecademy.com/courses/ltp4/books-api/books.json?_gl=1*tr91bg*_ga*OTk5MTA2NzI1Mi4xNjc5NDc4MzEz*_ga_3LRZM6TM9L*MTcxNTQ1ODI1Ny42OS4xLjE3MTU0NTk3NzUuMC4wLjA")
      .success(function(data) {
        return data;
      })
      .error(function(err) {
        return err;
      });
  },
]);