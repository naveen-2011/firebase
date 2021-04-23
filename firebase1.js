const firebaseConfig = {
    apiKey: "AIzaSyCI441CrtYGx-tKcq05s2uTkmiO0GvslXM",
    authDomain: "project2-6ddc1.firebaseapp.com",
    databaseURL: "https://project2-6ddc1-default-rtdb.firebaseio.com",
    projectId: "project2-6ddc1",
    storageBucket: "project2-6ddc1.appspot.com",
    messagingSenderId: "905098121358",
    appId: "1:905098121358:web:41d6417a69f304bf9f79df",
    measurementId: "G-4S8T1954WY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var dbRef=firebase.database().ref().child("students")
function insertData()
{
    console.log("inserting data...")
    var sname=document.getElementById("sname").value
    var rno=document.getElementById("rno").value
    dbRef.child(rno).set({sname:sname,rno:rno})
} 
function deleteData()
{
    var rno=window.prompt("Enter rollno to be deleted");
    dbRef.child(rno).remove()
    console.log("data deleted")
} 
function updateData()
{
    var newName=document.getElementById("sname").value
    var rno=document.getElementById("rno").value
    dbRef.child(rno).update({sname:newName})
    console.log("data updated")
} 
function loadData()
{
    dbRef.on("value",(snap)=>{
        snap.forEach((data)=>{
            console.log(data.val().sname)
            console.log(data.val().rno)
        })
    })
}