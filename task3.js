//CallBack
//drawback : if not under 2 sec then no output comes 
var RamuSomu = (WelcomeMessage,CallBack) =>
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
RamuSomu("Hello Ramu and Somu \nWelcome to KEC",miniani)