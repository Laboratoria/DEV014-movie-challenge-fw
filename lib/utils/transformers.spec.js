"use strict";

var _transformers = require("./transformers");
describe("formatMovie function", function () {
  it("should return a properly formatted Movie object when given a valid API movie object", function () {
    var apiMovie = {
      adult: false,
      backdrop_path: "/backdrop.jpg",
      genre_ids: [1, 2, 3],
      id: 123,
      original_language: "en",
      original_title: "Test Movie",
      overview: "This is a test movie",
      popularity: 123.45,
      poster_path: "/poster.jpg",
      release_date: "2023-01-01",
      title: "Test Movie",
      video: false,
      vote_average: 4.5,
      vote_count: 100
    };
    var expectedMovie = {
      adult: false,
      backdrop_path: "/backdrop.jpg",
      genre_ids: [1, 2, 3],
      id: 123,
      original_language: "en",
      original_title: "Test Movie",
      overview: "This is a test movie",
      popularity: 123.45,
      poster_path: "/poster.jpg",
      release_date: "2023-01-01",
      title: "Test Movie",
      video: false,
      vote_average: 4.5,
      vote_count: 100
    };
    var result = (0, _transformers.formatMovie)(apiMovie);
    expect(result).toEqual(expectedMovie);
  });
  it("should handle different types of movie data from the API", function () {
    var apiMovie1 = {
      adult: false,
      backdrop_path: "/path1.jpg",
      genre_ids: [1, 2, 3],
      id: 101,
      original_language: "en",
      original_title: "Movie One",
      overview: "Overview of movie one",
      popularity: 10.1,
      poster_path: "/poster1.jpg",
      release_date: "2021-01-01",
      title: "Movie One",
      video: false,
      vote_average: 7.5,
      vote_count: 1000
    };
    var apiMovie2 = {
      adult: false,
      backdrop_path: "/path2.jpg",
      genre_ids: [4, 5, 6],
      id: 102,
      original_language: "fr",
      original_title: "Movie Two",
      overview: "Overview of movie two",
      popularity: 20.2,
      poster_path: "/poster2.jpg",
      release_date: "2022-02-02",
      title: "Movie Two",
      video: false,
      vote_average: 8.5,
      vote_count: 2000
    };
    var apiMovie3 = {
      adult: false,
      backdrop_path: "/path3.jpg",
      genre_ids: [7, 8, 9],
      id: 103,
      original_language: "es",
      original_title: "Movie Three",
      overview: "Overview of movie three",
      popularity: 30.3,
      poster_path: "/poster3.jpg",
      release_date: "2023-03-03",
      title: "Movie Three",
      video: false,
      vote_average: 9.5,
      vote_count: 3000
    };
    var expectedMovie1 = {
      adult: false,
      backdrop_path: "/path1.jpg",
      genre_ids: [1, 2, 3],
      id: 101,
      original_language: "en",
      original_title: "Movie One",
      overview: "Overview of movie one",
      popularity: 10.1,
      poster_path: "/poster1.jpg",
      release_date: "2021-01-01",
      title: "Movie One",
      video: false,
      vote_average: 7.5,
      vote_count: 1000
    };
    var expectedMovie2 = {
      adult: false,
      backdrop_path: "/path2.jpg",
      genre_ids: [4, 5, 6],
      id: 102,
      original_language: "fr",
      original_title: "Movie Two",
      overview: "Overview of movie two",
      popularity: 20.2,
      poster_path: "/poster2.jpg",
      release_date: "2022-02-02",
      title: "Movie Two",
      video: false,
      vote_average: 8.5,
      vote_count: 2000
    };
    var expectedMovie3 = {
      adult: false,
      backdrop_path: "/path3.jpg",
      genre_ids: [7, 8, 9],
      id: 103,
      original_language: "es",
      original_title: "Movie Three",
      overview: "Overview of movie three",
      popularity: 30.3,
      poster_path: "/poster3.jpg",
      release_date: "2023-03-03",
      title: "Movie Three",
      video: false,
      vote_average: 9.5,
      vote_count: 3000
    };
    var result1 = (0, _transformers.formatMovie)(apiMovie1);
    var result2 = (0, _transformers.formatMovie)(apiMovie2);
    var result3 = (0, _transformers.formatMovie)(apiMovie3);
    expect(result1).toEqual(expectedMovie1);
    expect(result2).toEqual(expectedMovie2);
    expect(result3).toEqual(expectedMovie3);
  });
  it("should handle invalid data types", function () {
    var apiMovieWithInvalidData = {
      adult: false,
      backdrop_path: "/path1.jpg",
      genre_ids: [1, 2, 3],
      id: 101,
      original_language: "en",
      original_title: "Movie One",
      overview: "Overview of movie one",
      popularity: 10.1,
      poster_path: "/poster1.jpg",
      release_date: "invalid-date",
      title: "Movie One",
      video: false,
      vote_average: NaN,
      vote_count: 1000
    };
    var expectedMovie = {
      adult: false,
      backdrop_path: "/path1.jpg",
      genre_ids: [1, 2, 3],
      id: 101,
      original_language: "en",
      original_title: "Movie One",
      overview: "Overview of movie one",
      popularity: 10.1,
      poster_path: "/poster1.jpg",
      release_date: "invalid-date",
      title: "Movie One",
      video: false,
      vote_average: NaN,
      vote_count: 1000
    };
    var result = (0, _transformers.formatMovie)(apiMovieWithInvalidData);
    expect(result).toEqual(expectedMovie);
  });
});
// Add more test cases as needed
//should handle missing fields