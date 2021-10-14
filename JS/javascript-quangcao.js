function hide_float_right() {
    var content = document.getElementById('float_content_right');
    var hide = document.getElementById('hide_float_right');
    if (content.style.display == "none")
    {content.style.display = "block"; hide.innerHTML = '<a href="javascript:hide_float_right()"><b>Close[X]</b></a>'; }
        else { content.style.display = "none"; hide.innerHTML = '<a href="javascript:hide_float_right()"><b>MSIology</b></a>';
    }
    }
  function myF(){
      onl.style.display = "block";
      
    }
    function un(){
        onl.style.display = "none";
    }