window.onscroll = function() {navScrollFunction()};
        
function navScrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {

    document.getElementById("logo").style.top="-3px";
    document.getElementById("logo").style.height="70px";
    document.getElementById("logo").src="Учи лесно (8).png";

    document.getElementById("nav").style.height="60px";

    document.getElementById("registerbutton").style.top="-40px";
    document.getElementById("registerbutton").style.right="-158px";
    document.getElementById("loginbutton").style.top="-40px";
    document.getElementById("loginbutton").style.right="-158px";

    document.getElementById("home").style.display="none";
    document.getElementById("aboutUs").style.display="none";
    document.getElementById("contacts").style.display="none";
    document.getElementById("socials").style.display="none";

    document.getElementById("links").style.top="31px";  

    document.getElementById("homeIcon").style.display="";
    document.getElementById("homeIcon").style.left="25px";
    document.getElementById("homeIcon").style.paddingRight="70px";
    document.getElementById("aboutUsIcon").style.display="";
    document.getElementById("aboutUsIcon").style.left="25px";
    document.getElementById("aboutUsIcon").style.paddingRight="70px";
    document.getElementById("contactsIcon").style.display="";
    document.getElementById("contactsIcon").style.left="25px";
    document.getElementById("contactsIcon").style.paddingRight="70px";
    document.getElementById("socialsIcon").style.display="";
    document.getElementById("socialsIcon").style.left="25px";
    document.getElementById("socialsIcon").style.paddingRight="70px";
    
  } else {
    document.getElementById("logo").style.top="";
    document.getElementById("logo").style.height="130px";
    document.getElementById("logo").src="Учи лесно (11).png";

    document.getElementById("nav").style.height = "100px";

    document.getElementById("loginbutton").style.top="";
    document.getElementById("loginbutton").style.right="";
    document.getElementById("registerbutton").style.top="";
    document.getElementById("registerbutton").style.right="";

    document.getElementById("home").style.display="";
    document.getElementById("aboutUs").style.display="";
    document.getElementById("contacts").style.display="";
    document.getElementById("socials").style.display="";

    document.getElementById("links").style.top="18px";  

    document.getElementById("homeIcon").style.display="none";
    document.getElementById("aboutUsIcon").style.display="none";
    document.getElementById("contactsIcon").style.display="none";
    document.getElementById("socialsIcon").style.display="none";

    
  }
}

function handleMediaChange(e) {
  if (e.matches) {

    document.getElementById("umencitat").style.top="100px" ;

    document.getElementById("mhm").style.top="100px" ;

    document.getElementById("nav").style.height="250px" ;
    
    document.getElementById("loginbuttontd").style.paddingLeft="30px" ;

    document.getElementById("links").style.paddingLeft="0px" ;
  } else {

    document.getElementById("umencitat").style.top="px" ;

    document.getElementById("mhm").style.top="px" ;

    document.getElementById("nav").style.height="100px" ;

    document.getElementById("loginbuttontd").style.paddingLeft="350px" ;

    document.getElementById("links").style.paddingLeft="350px" ;
  }
}

const mediaQuery = window.matchMedia('(max-width: 1700px)');
mediaQuery.addListener(handleMediaChange);
handleMediaChange(mediaQuery); // Initial check