$(function() {
    $.ajax({
	url: '/posts'
    }).done(function(response) {
	var template = $('#post-template').html();
	response['result'].forEach(function(post) {
	    var newPost = $(template).clone();
	    $(newPost).find('.title').html(post[1]);
	    $(newPost).find('.text').html(post[2]);
	    $(newPost).find('.author').html(post[0]);
	    $(newPost).find('.likes').html(post[3]);
	    $(newPost).find('.post-id').html(post[4]);
	    $(newPost).find('.like-button').on('click', incrementLike);
	    $(newPost).find('.delete-button').on('click', deletePost);
	    $(newPost).find('.title').on('click', toggleVisibility);
	    $('#post-list').append(newPost);
	});
    });

});

function incrementLike() {
    var id = $(this).parent().find('.post-id').html();
    var likes = $(this).parent().find('.likes');
    $.ajax({
	url: '/like/' + id
    }).done(function(response) {
	console.log(response);
	var likeCount = parseInt(likes.html());
	likes.html(likeCount + 1);
    });
}

function deletePost() {
    var id = $(this).parent().find('.post-id').html();
    var post = $(this).parent().parent();
    $.ajax({
	url: '/delete/' + id
    }).done(function(response) {
	console.log(response);
	post.remove();
    });
    console.log(id);
}

function toggleVisibility() {
    var post = $(this).parent().find('.post-body');
    var visibility = post.css('display');
    if (visibility === 'none') {
	post.css('display', 'block');
    } else {
	post.css('display', 'none');
    }
    console.log(visibility);
}
