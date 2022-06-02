function show_hide() 
{
    var myImage = document.getElementById('controls');
    var displaySetting = myImage.style.display;
    var show_hide_button = document.getElementById('Button');

    
    if (displaySetting == 'block')
     {
      myImage.style.display = 'none';
      show_hide_button.innerText = 'Show Controls';
    }
    else 
    {
      myImage.style.display = 'block';
      show_hide_button.innerText = 'Hide Controls';
    }
  }
function up_down_btn()
{
    var circle = document.getElementById("circle");
    var upBtn = document.getElementById("upBtn");
    var downBtn = document.getElementById("downBtn");

    var rotateValue = circle.style.transform;
    var rotateSum;


    upBtn.onclick = function()
    {
        rotateSum = rotateValue + "rotate(-90deg)";
        circle.style.transform = rotateSum;
        rotateValue = rotateSum;
    }
    downBtn.onclick = function()
    {
        rotateSum = rotateValue + "rotate(90deg)";
        circle.style.transform = rotateSum;
        rotateValue = rotateSum;
    }
}

function show() 
{
    
    var myPic = document.getElementById('me');
    var displayMe = myPic.style.display;
    var show_button = document.getElementById('btn');
    
    if (displayMe == 'block')
        {
        myPic.style.display = 'none';
        show_button.innerText = 'Show Image';
        }
    else 
        {
        myPic.style.display = 'block';
        show_button.innerText = 'Hide Image';
        }
}

function white()
{
        document.getElementById("controls").style.color="white"; 
        document.getElementById("main").style.color="black"; 
        document.getElementById("font").style.color="black"
}
function red()
{
        document.getElementById("controls").style.color="red"; 
        document.getElementById("main").style.color="red"; 
        document.getElementById("font").style.color="red";
}

function yellow()
{
        document.getElementById("controls").style.color="blue"; 
        document.getElementById("main").style.color="blue"; 
        document.getElementById("font").style.color="blue";
}
function orange()
{
        document.getElementById("controls").style.color="orange"; 
        document.getElementById("main").style.color="orange"; 
        document.getElementById("font").style.color="orange";
}

function show_link() 
{
    
    var myLink = document.getElementById('link');
    var displayLink = myLink.style.display;
    var show_button = document.getElementById('link_btn');
    
    if (displayLink == 'block')
        {
        myLink.style.display = 'none';
        show_button.innerText = 'Show Link';
        }
    else 
        {
        myLink.style.display = 'block';
        show_button.innerText = 'Hide Link';
        }
}