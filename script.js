
const order=document.getElementById("order");

order.onclick=function()
{
    let x =  Math.floor(1000 + Math.random() * 9000);
       alert("YOUR OTP IS" +" "+x);
    let y = prompt("OTP is : ");
       
        if (y == x) 
        {
            alert('Successful');
            window.location.href="https://www.freshersworld.com/jobs-in-chandigarh/999906020";
        }  
        else  
        {
            alert("Failed, Try Again!");
      //  window.location.href="";
        }
    
}