var mongoose = require('mongoose');
var cheerio = require('cheerio');
var request = require('request');
var router = require('express').Router();
var Promise = require('bluebird');
module.exports = router;

router.get('/', function (req, res, next) {

	var url = 'http://www.imdb.com/title/tt1229340/';

	request(url, function (error, response, html) {	
		if(!error) {
			var $ = cheerio.load(html)

			var title, release, rating;
			var json = {
				title: '',
				release: '',
				rating: ''
			}

			$('.header').filter(function() {

				var data = $(this)

				title = data.children().first().text()

				release = data.children().last().children().text()

				json.title = title

				json.release = release

			})

			$('.star-box-giga-star').filter(function () {
				var data = $(this);

				rating = data.text();

				json.rating = rating
			})

			res.json(json)
		}
	})

});