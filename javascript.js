    function ValidateEmail(inputText){  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(inputText.value.match(mailformat)){  
        document.emailSubmit.email.focus();  
        return true;  
        }else{  
        var wrapper = document.createElement('div');
        wrapper.className = "errorWrapper";
        var parent = document.getElementsByClassName('searchContainer');
        var position = document.getElementById('emailForm');
        parent.insertBefore(wrapper, position);
        
        var error = document.createElement('p');
        error.className = "errorMessage";
        var message = document.createTextNode('please enter a valid email address')
        var totalMessage = message.appendChild(error);
        var position2 = document.getElementsByClassName('errorWrapper');
        totalMessage.appendChild(position2);
        
        document.emailSubmit.email.focus();  
        return false;   
     }  
    }  