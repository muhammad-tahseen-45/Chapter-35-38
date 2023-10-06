//1..***
function vdate(){

    var date1 = new Date();
document.write(date1 +"<br>")

}

vdate()

//2....**
function vGreet(vfname,vlname){



var fulname=vfname+" "+vlname;

document.write("<br>");
      
document.write("Hello "+fulname);


}


var vfname =prompt("enter your fst name");
var vlname =prompt("enter your last name");


vGreet(vfname,vlname)


//3.....*


function vGreet1(n11,n21){



    var fulname=n11+n21;
    
    document.write("<br>");
      
    document.write("add"+fulname);
    
    
    }
    
    
    var n11 =+prompt("enter your n11");
    var n21 =+prompt("enter your n21");
    
    
    vGreet1(n11,n21)

    //4..*


    function vGreet3(n1,opr,n2){

if (opr==="+"){

var n3=n1+n2;

}

if (opr==="-"){

    var   n3=n1-n2;
    
    }
            

    if (opr==="*"){

        var  n3=n1*n2;
        
        }

        if (opr==="/"){

            var    n3=n1/n2;
            
            }
            document.write("<br>");
            
        document.write("calcu"+n3);
        
        
        }
        
        
        var n1 =+prompt("enter your n1");
        var opr =prompt("enter your task ");
        var n2 =+prompt("enter your n2");
        
        
        vGreet3(n1,opr,n2)



        //5..*

        function vSquare(n11){



            var vsq=n11*n11;
            
            document.write("<br>");
            
            document.write("square of " +n11+" is "+vsq);
            
            
            }
            
            var n1self =+prompt("enter your n1");        

vSquare(n1self)


 //5..*

 function vfact(n11){


   
    var vsq=n11;
for (i=1;i<n11;i++){

    vsq =vsq*(n11-i);



}



document.write("factorial of  "+n11+" is "+vsq )



//    document.write("<br>");
    
 //   document.write("square of " +n11+" is "+vsq);
    
    
    }
    
    var n1self =+prompt("find the factorial of number of choice");        

vfact(n1self)




 //7..*

 function vfact0(n1self0,n2self0){


   
    
    for (i=n1self0;i<=n2self0;i++){
    
        
    
    
        console.log("Counting  "+i)
    
    
    }
    
    
        }
        
        var n1self0 =+prompt("start number of choice");        
        var n2self0 =+prompt("start number of choice");        
    
    vfact0(n1self0,n2self0)


    

 //8..* area 

 function vArea(vW,vH){


   
    var vAr1=vW*vH;
    
    console.log("Area is  "+vAr1)
    


        }
        
        var vW =+prompt("width");        
        var vH =+prompt("Heifht");        
    
        vArea(vW,vH)


        
 function vArea0(){


   
    var vAr10=5*9;
    
    console.log("Area is  "+vAr10)
    


        }
        
     
        vArea0()



function pal(vWord){

for (i=vWord.length-1 ;i>=0;i--){

gg +=vWord.slice(i,i+1);

console.log(gg+""+i);



}

if (gg===vWord){

alert("yes im a pandrom word")

}else{

    alert("not a pandrom word")



}

}
var vWord =prompt("palindrom word");        
var gg="";

pal(vWord)




var vWord =prompt("string of choice");        
var gg="";
var gg1="";


gg =vWord.slice(0,1).toUpperCase();
gg1=vWord.slice(1).toLowerCase();
console.log(gg+gg1)


//11**********



  function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
 
//  var vWord =prompt("put the sentence for title");        
  console.log(titleCase(vWord));

//12************

var ghi=""

function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
     ghi=strSplit[i];

       }
    }
    return longestWord;
  }
 
  console.log(findLongestWord("thsi is my duty to join your class as a student"));
  console.log(ghi);



  //13******************

  // number of occurrence of a character


function countString(str, letter) {
    let count = 0;

   
    for (let i = 0; i < str.length; i++) {

    
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}

var string = prompt('Enter a string: ');
var letterToCheck = prompt('Enter a letter to check: ');

var result = countString(string, letterToCheck);

console.log("the letter "+ letterToCheck+ " comes "+result+" times.");