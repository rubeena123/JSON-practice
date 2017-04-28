// // jsonlint.com(json validator)
// // VALID JSON
// // var person ={
// //   "name": "Rubina"
// // };
// // console.log(person);
// // -----------------------------------------------------------------------------
//
// // Valid JS object NOT a JSON
// // var person ={
// //   name:"Rubina",
// //   age : 29,
// //   address: {
// //   street :"123 Main St",
// //   city   : "Denver"
// //   },
// //   siblings:["Moushami","Bhawana", "Archana"]
// //
// //   // email: function (){
// //   //   return 'rubinasatyal@gmail.com';
// //
// // };
// // // console.log(person.email());
// // // console.log(person.age);
// // // console.log(person.name);
// // // person = JSON.stringify(person);
// // // console.log(person);
// // // person = JSON.parse(person);
// // // console.log(person.name);
// // console.log(person.address.street);
// // console.log(person.siblings[2]);
// var people =[
// {
//   name: "Michelle",
//   age : 33
// },
// {
//   name: "Emma",
//   age : 30
// },
// {
//   name: "Matt",
//   age : 34
// }
// ]
// // console.log(people[1].age);
// var output = '';
// for (var i=0; i< people.length; i++){
//   // console.log(people[i]);
//   // console.log(people[i].age);
// output +=  '<li>' + people[i].name + '</li>';
// }
//
// document.getElementById('people').innerHTML = output
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(xhttp.responseText);
      var people   = response.people;
      // console.log(response.people);
      var output = '';
      for (var i=0; i< people.length; i++){
        // console.log(people[i]);
        // console.log(people[i].age);
      output +=  '<li>' + people[i].name + '</li>';
      }
      document.getElementById('people').innerHTML = output
    }
};
xhttp.open("GET", "people.json", true);
xhttp.send();
