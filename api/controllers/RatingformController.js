/**
 * RatingformController
 *
 * @description :: Server-side logic for managing ratingforms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	cool: function(req, res) {
		console.log("it's came to cool action,");
		// res.end(JSON.stringify(Ratingform.findAll()));
		/*User.destroy(req.body).done(function(err) {
			if(err) {
				res.end("Error: "+err);
			} else {
				res.end("User destroyed.");
			}
		});*/
		Ratingform.find(function(err, ratings) {
			console.log(JSON.stringify(ratings));
			// res.end(JSON.stringify(ratings));
			res.view();
		});
	},
};

