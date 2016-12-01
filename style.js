$(function() {
        $('#login').popover({

            placement: 'bottom',
            title: 'Popover Form',
            html: true,
            content: $('#myForm').html()
        }).on('click', function() {
            // had to put it within the on click action so it grabs the correct info on submit
            $('.btn-primary').click(function() {
                $('#result').after("form submitted by " + $('#email').val())
                $.post('/echo/html/', {
                    email: $('#email').val(),
                    name: $('#name').val(),
                    gender: $('#gender').val()
                }, function(r) {
                    $('#pops').popover('hide')
                    $('#result').html('resonse from server could be here')
                })
            })
        })
    })

function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
            return (true)
        }
        alert("You have entered an invalid email address!")
        return (false)
}
    
function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
}
// test for firebase 
//$('button').on('click',function(){
//			var x = $(this).data("search");
//
//			var queryURL = "http://api.giphy.com/v1/gifs/search?q="+x+"&api_key=dc6zaTOxFJmzC";
//		console.log(queryURL);
//		$.ajax({url:queryURL,method:'GET'})
//		.done(function(response){
//				console.log(response);
//				$('ajaxmotown').append("<p>Rating: "+response.data[1].Rating+",</p>");
//				$('ajaxmotown').append("<img src='"+response.data[1].images.downsized.url+"'>")
//			})
//		})




  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAYJ08-4UiR12p7AHADN3_lmf0ffGRGWpA",
    authDomain: "motown-fan.firebaseapp.com",
    databaseURL: "https://motown-fan.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "773242203800"
  };
  firebase.initializeApp(config);
//get element
const preObject = doucument.getElementById('ojbect');

//create refereence
const dbRefObject = firebase.database().ref().child('ojbect');

x


//sync object changes
dbRefObject.on('value', snap => condole.log(snap.val()));
}();

// Get elements
 const txtEmail = document.getElementById('txtEmail');
 const txtName = document.getElementById('txtName');
 const btnSave = document.getElementById('btnSave');

 //Add login event
btnLogin.addEventListner('click',e => {
 //Get email 	
 const email = txtEmail.value;
 const name = txtName.value;
 const auth = firebase.auth();
 //sign in
 const promise = auth.signInWithEmailAndPassword(email, name);
promise.catch(e => console.log(e.message));
});

// Add signup event
btnSignUp.addEventListner('click', e => {
//Get email 	
// TODO: check 4 real email
 const email = txtEmail.value;
 const name = txtName.value;
 const auth = firebase.auth();
 //sign in
 const promise = auth.createUserWithEmailAndPassword(email, name);
promise
.catch(e => console.log(e.message));
});
// add a realtime listner
firebase.auth().onAuthStateChanged(firebase => {

});
