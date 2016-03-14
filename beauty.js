var beauty_1 = {
	name: "Evan's special face lifter",
	price: "$0.05",
	category: "anti-aging",
	selling_points: ["look 20 years younger!", "pretend to be 20 years younger!", "date people 20 years younger!"],
	picture: "http://www.crutchfielddermatology.com/treatments/liquid-face-lift/liquid-face-lift6.jpg"
}

var beauty_2 = {
	name: "Gabriel's beautifying eye shadow",
	price: "$100",
	category: "eyes",
	selling_points: ["make your eyes sexier than ever!", "that dark and mysterious look you've always wanted!", "confident stares!"],
	picture: "http://www.crystalanne.com/purple-eyeshadow-bridal-makeup.png"
}

$('#beauty1').append('<h3>' + beauty_1['name'] + '</h3>' +
					'<h3>' + beauty_1['price'] + '</h3>' +
					'<h3>' + beauty_1['category'] + '</h3>' +
					'<img src =' + "'" + beauty_1['picture'] + "'" + ">"
					)

beauty_1.selling_points.forEach(function(item) {
	$('#beauty1').append('<li>' + item + '</li>')
});


$('#beauty2').append('<h3>' + beauty_2['name'] + '</h3>' +
					'<h3>' + beauty_2['price'] + '</h3>' +
					'<h3>' + beauty_2['category'] + '</h3>' +
					'<img src =' + "'" + beauty_2['picture'] + "'" + ">"
					)

beauty_2.selling_points.forEach(function(item) {
	$('#beauty2').append('<li>' + item + '</li>')
})
