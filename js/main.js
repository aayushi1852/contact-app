
let config = {
  apiKey: "AIzaSyBRoSAmXZEZvZueAhy-kqzm4E-iNyyvy6c",
  authDomain: "contacts-a25d3.firebaseapp.com",
  databaseURL: "https://contacts-a25d3-default-rtdb.firebaseio.com",
  projectId: "contacts-a25d3",
  storageBucket: "contacts-a25d3.appspot.com",
  messagingSenderId: "726215056953",
  appId: "1:726215056953:web:1f23967bee1450506e77e8"
};
firebase.initializeApp(config);
let db = firebase.database();
var Name = document.getElementById('name');
var email = document.getElementById('email');
var Contact = document.getElementById('contact');
var contactForm = document.getElementById('contactForm');
var hiddenId = document.getElementById('hiddenId');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!Name.value || !email.value || !Contact.value) return null

  var id = hiddenId.value || Date.now()

  db.ref('contacts/' + id).set({
    name: Name.value,
    email: email.value,
    contact: Contact.value,
  });

  Name.value = '';
  email.value = '';
  Contact.value = '';
  hiddenId.value = '';
  alert('Your contact success added..!');
});

