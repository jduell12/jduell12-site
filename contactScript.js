document.addEventListener('DOMContentLoaded', bindButton);

function bindButton(){
  document.getElementByID('submit').addEventListener('click', function(event){
    var req = new XMLHttpRequest();
    var firstName = document.getElementByName('firstName');
    var lastName = document.getElementByName('lastName');
    var email = document.getElementByName('email');
    var comment = document.getElementByName('comment');
    var completeForm = firstName + ' ' + lastName + ' ' + email + ' ' + comment;
    req.open('POST', ' http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php', false);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify(completeForm));
    event.preventDefault();
  })
}
