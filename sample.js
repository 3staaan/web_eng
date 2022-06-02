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


