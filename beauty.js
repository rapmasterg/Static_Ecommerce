$('#div1').attr('class', 'anti-aging')
$('#div2').attr('class', 'eyes')



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

$('#div1').append('<h3 align="center">' + beauty_1['name'] + '</h3>' +
					'<h3 align="center">' + beauty_1['price'] + '</h3>' +
					'<h3 align="center">' + beauty_1['category'] + '</h3>' +
					'<img src =' + "'" + beauty_1['picture'] + "'" + ">"
					)


beauty_1.selling_points.forEach(function(item) {
	$('#div1').append('<li>' + item + '</li>')
});


$('#beauty2').append('<h3>' + beauty_2['name'] + '</h3>' +
					'<h3>' + beauty_2['price'] + '</h3>' +
					'<h3>' + beauty_2['category'] + '</h3>' +
					'<img src =' + "'" + beauty_2['picture'] + "'" + ">"
					)

beauty_2.selling_points.forEach(function(item) {
	$('#beauty2').append('<li>' + item + '</li>')
})



var pie1 = {
	name: "Camila's special cherry pie",
	price: "$3.14",
	category: "fruit_pie",
	selling_points: ["look 3.14 years younger!", "pretend to be 3.14 years younger!", "date people 3.14 years younger!"],
	picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHW4gpXbwOWYNuxhIsQp0wtsDTmFtmDKl2hT1WNKfwgTvBT3zp7g"
}

var pie2 = {
	name: "Gabriel's beautifying mince pie",
	price: "$314",
	category: "meat_pie",
	selling_points: ["eat pie until ypu die!", "pi day only sale!!", "confident stares!"],
	picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSBQuBZggWca5Ih2MrSr2qEQtmLhdJ8zPX0lTGvnkO76JVG49Th"
}




$('#first').click(function() {

$('#div1').attr('class', 'fruit');
$('#div2').attr('class', 'meat');



$('#div1').html('<h3 align="center">' + pie1['name'] + '</h3>' +
					'<h3 align="center">' + pie1['price'] + '</h3>' +
					'<h3 align="center">' + pie1['category'] + '</h3>' +
					'<img src =' + "'" + pie1['picture'] + "'" + ">"
					)


pie1.selling_points.forEach(function(item) {
	$('#div1').append('<li>' + item + '</li>')
});


$('#div2').html('<h3>' + pie2['name'] + '</h3>' +
					'<h3>' + pie2['price'] + '</h3>' +
					'<h3>' + pie2['category'] + '</h3>' +
					'<img src =' + "'" + pie2['picture'] + "'" + ">"
					)

pie2.selling_points.forEach(function(item) {
	$('#div2').append('<li>' + item + '</li>')
})

})
