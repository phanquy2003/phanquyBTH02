function bai5(){
document.getElementById('login-form').addEventListener('submit', function(event) {
	event.preventDefault();

	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	console.log('Username: ' + username + ', Password: ' + password);
});
}