//CallBack
//drawback : if not under 2 sec then no output comes 
/*var RamuSomu = (WelcomeMessage,CallBack) =>
{
    setTimeout(function(){
        console.log(WelcomeMessage);
        CallBack();
    },2000)
}
var miniani = () =>
{
    console.log("Thambi vandam poidu.....")
}
RamuSomu("Hello Ramu and Somu \nWelcome to KEC",miniani)*/
var isAuthenticated = () => {
    return Math.random() > 1;
  }
  var Login = () => {
    return new Promise(function (response, noresponse) {
      setTimeout(function () {
        if (isAuthenticated()) {
          response("Your Authentication is Successful");
        } else {
          noresponse("Your Authentication is not Successful");
        }
      }, 2000);
    });
  }
  Login()
    .then(function (message) {
      console.log(message);
    })
    .catch(function (message) {
      console.log(message);
    });