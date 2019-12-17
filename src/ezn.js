var isInit = false;

function initEzn(){
  if(isInit) return;
  var target = document.querySelector('.ezn');
  if(target == null) {
    var eznDiv = document.createElement('div');
    eznDiv.className = "ezn";
    
    var eznBody = document.createElement('div');
    eznBody.className = "ezn-body";
    
    var eznTitle = document.createElement('div');
    eznTitle.className = "ezn-title";
    
    var eznMessage = document.createElement('div');
    eznMessage.className = "ezn-message";
    
    document.body.appendChild(eznDiv);
    eznDiv.appendChild(eznBody);
    eznBody.appendChild(eznTitle);
    eznBody.appendChild(eznMessage);
    isInit = true;
  }
}

function showNotifications(type, show, title, message, timeout){
    initEzn();
    var target = document.querySelector('.ezn');
    if(!show) {
      target.classList.remove("active");
    } else {
      document.querySelector('.ezn-title').innerHTML = title;
      document.querySelector('.ezn-message').innerHTML = message;
      target.classList.add("active");
    }
    if(timeout){
      setTimeout(function(){
        target.classList.remove("active");
      },timeout)  
    } 
  };


document.addEventListener("DOMContentLoaded", function() {
  showNotifications('success', true, 'Success', 'Added a thing', 3000); 
});



