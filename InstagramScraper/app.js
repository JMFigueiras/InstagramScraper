$(document).ready(function(){

	$.getJSON("user.json", function(json) {

	    document.querySelector('#pk').innerHTML = 'ID: ' + json.user.pk;
	    $('#hd_profile_pic_url_info').attr('src', json.user.hd_profile_pic_url_info.url);
	    document.querySelector('#username').innerHTML = json.user.username;
	    document.querySelector('#full_name').innerHTML = 'Name: ' + json.user.full_name;
	    document.querySelector('#biography').innerHTML = 'Biography: ' + json.user.biography;
	    document.querySelector('#media_count').innerHTML = 'Media: ' + json.user.media_count;
	    document.querySelector('#follower_count').innerHTML = 'Followers: ' + json.user.follower_count;
	    document.querySelector('#following_count').innerHTML = 'Following: ' + json.user.following_count;
		document.querySelector('#following_tag_count').innerHTML = 'Following tag: ' + json.user.following_tag_count;

		if(json.user.is_private)
			json.user.is_private = 'yes';
		else
			json.user.is_private = 'no';
			
	    document.querySelector('#is_private').innerHTML = 'Is private: ' + json.user.is_private;
	});

});