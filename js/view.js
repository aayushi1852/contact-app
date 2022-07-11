
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

var reviews = document.getElementById('reviews');
var reviewsRef = db.ref('/contacts');

let a=1;
reviewsRef.on('child_added', (data) => {
  var li = document.createElement('tr')
  li.id = data.key;
  li.innerHTML = reviewTemplate(data.val(),a);
  reviews.appendChild(li);
  a++;
});

function reviewTemplate(data,a) {
  return `
    <td>${a}</td>
    <td>${data.name}</td>
    <td>${data.email}</td>
    <td>${data.contact}</td>
  `
};