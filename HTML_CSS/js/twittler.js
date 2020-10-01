// Form Validation (instead of using "required" in HTML)
const userName = document.querySelector('#userName');
const commentContent = document.querySelector('#commentContent');
const tweetBtn = document.getElementById('tweetBtn');
const forms = document.getElementsByTagName('form');

// tweetBtn.onclick = function() {
//     alert(userName.value);
//     alert(commentContent.value);
// }

forms[0].onsubmit = function() {
    if (userName.value === '' || commentContent.value === '') {
        alert('Please fill the user name and comment!');
    }
}