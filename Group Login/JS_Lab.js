/*
Aadrit Chauhan
N01516539
JAVASCRIPT
Assignment 1: Group Login
*/

// Greeting/Asking for the team number
var team_num= prompt("Hello! Which team do you belong to?");


//Setting accurate team number i.e. 4 in this case
if (team_num=== '4')
{
    
    var first_name= prompt("Enter your first name").toLowerCase();
    
    


    //Team members: Ellis Chang, Azmat Pathan, Muskan Agarwal, Aadrit Chauhan, Bassil Younes
    switch (first_name)
    {
       case 'ellis': 
       alert('Welcome Ellis Chang!');
       break;

       case 'azmat': 
       alert('Welcome Azmat Pathan!');
       break;

       case 'muskan': 
       alert('Welcome Muskan Agarwal!');
       break;

       case 'aadrit': 
       alert('Welcome Aadrit Chauhan!');
       break;

       case 'bassil': 
       alert('Welcome Bassil Younes!');
       break;
  
       // block to be  executed if wrong first name is entered 
       default: 
       alert('Access Denied!!');
       break;
      
    }
}
         // block to be executed if wrong team number is entered
         else
         alert("Wrong team number,Access denied!");
     
         // END of program

