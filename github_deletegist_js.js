var USERNAME = "raulgonzalez83";
var PASSWORD = "gonzalez83";
var API_BASSE_URL = "https://api.github.com";
$.ajaxSetup({
    headers: { 'Authorization': "Basic "+ btoa(USERNAME+':'+PASSWORD) }
});

$("#button_delete_gist").click(function(e) {
	e.preventDefault();
	deleteGist($("#gist_name").val());
});



function deleteGist(gist_name) {
	var url = API_BASSE_URL + '/repos/' + USERNAME + '/' + gist_name;

	$.ajax({
		url : url,
		type : 'DELETE',
		crossDomain : true,
		dataType : 'json',
	}).done(function(data, status, jqxhr) {
		$('<div class="alert alert-success"> <strong>Ok!</strong> Gist was deleted!</div>').appendTo($("#gist_result"));				
  	}).fail(function() {
		$('<div class="alert alert-danger"> <strong>Oh!</strong> Oh NO, Error!! </div>').appendTo($("#gist_result"));
	});

}
