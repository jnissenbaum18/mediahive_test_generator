var mongoose = require('mongoose');
var cheerio = require('cheerio');
var request = require('request');
var router = require('express').Router();
var Promise = require('bluebird');
var open = require('open');
module.exports = router;

router.post('/', function (req, res, next) {

	request(req.body.url, function (error, response, html) {	
		if(!error) {

			var $ = cheerio.load(html)

			var inputCount = 0

			$('input').each(function (i, element) {
				var style = element.attribs.style

				if (!style) {
					element.attribs['ng-model'] = 'value'
				} else {
					element.attribs.style += ";border-style: solid;border-color: red;"
				}

				element.attribs['ng-model'] = "projectInfo[" + i + "]"
				inputCount = i
			})

			var renderFields = {
				inputCount: inputCount,
				html: $.html()
			}

			res.json(renderFields)
		}
	})

})

router.post('/populate', function (req, res, next) {
	window.open("http://www.google.com")
	// open('http://www.google.com')
	res.json('done')
})