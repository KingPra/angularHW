(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1]);
