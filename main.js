// your code here
document.getElementById('submit').addEventListener('click', function(e) {

  // save name
  var user = document.getElementById('name').value;
  // save message
  var message = document.getElementById('message').value;

  // save posts div
  var postsDiv = document.getElementsByClassName('posts')[0];

  // create new element
  var postDiv = document.createElement('div');
  postDiv.setAttribute('class', 'post');

  // create P for message
  var messageP = document.createElement('p');
  var messageTextNode = document.createTextNode(message);
  messageP.appendChild(messageTextNode);

  // create P and strong for user
  var userP = document.createElement('p');
  var postedTextNode = document.createTextNode("Posted By: ");
  var userStrong = document.createElement('strong');
  var userNextNode = document.createTextNode(user);
  
  userStrong.appendChild(userNextNode);
  userP.appendChild(postedTextNode);
  userP.appendChild(userStrong);

  // create HR 
  var hr = document.createElement('hr');

  // append new element to posts div
  postDiv.append(messageP);
  postDiv.append(userP);
  postDiv.append(hr);
  postsDiv.append(postDiv);
  
})