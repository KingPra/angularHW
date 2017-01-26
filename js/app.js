const app = angular.module('MovieApp', []);

app.controller('ListOfMovieController', function ($scope, MovieList) {
    $scope.movieName = '';
    $scope.movieDate = '';
    $scope.movieGenre = '';
    
    $scope.movies = MovieList.getMovie();

    $scope.newMovie = function () {

        MovieList.addMovie($scope.movieName, $scope.movieDate, $scope.movieGenre);
        $scope.movieName = '';
        $scope.movieDate = '';
        $scope.movieGenre = '';
    };

    $scope.ratingBtn = (rating) => {
        $scope.rate = rating;
        console.log(rating + ' clicked');
    };

    $scope.remove = (id) => {
        $scope.movies.splice(id, 1);
    }
});




//app.factory is how you call a service
app.factory('MovieList', function () {
    let movies = [];

        return {
            addMovie: function (name, date, genre) {
                movies.push({name, date, genre});
                console.log(movies);
            },

            getMovie: function () {
                return movies;
            },
        };
});  