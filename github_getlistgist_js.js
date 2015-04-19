

$("#button_get_gist").click(function(e) {
	e.preventDefault();
	getGists();
});



function getGists() {
    var user = $("#username").val();
	var url = 'https://api.github.com/users/' + user + '/repos';
	var pass = $("#password").val();
	$.ajax({
		url : url,
		type : 'GET',
		crossDomain : true,
		dataType : 'json',
		username :  user,
		password : pass,
	}).done(function(data, status, jqxhr) {
				var gists = data;
				
				$.each(gists, function(i, v) {
					var gist = v;
					$('<h4> Partido: ' + gist.name + '</h4>').appendTo($('#gist_result'));
					$('<p>').appendTo($('#gist_result'));	
					$('<strong> ID: </strong> ' + gist.id + '<br>').appendTo($('#gist_result'));
					$('<strong> Resultados: </strong> ' + gist.description + '<br>').appendTo($('#gist_result'));
					$('</p>').appendTo($('#gist_result'));
					});
				
				

	}).fail(function() {
		$("#gist_result").text("No repositories.");
	});

}

