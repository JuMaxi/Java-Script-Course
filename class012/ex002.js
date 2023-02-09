var Now = new Date();
var hour = Now.getHours();
console.log(`Now it's ${hour} o'clock.`)
if(hour <= 12)
{
    console.log('Good Morning!');
}
else
{
    if(hour <= 18)
    {
        console.log('Good Afternoon!');
    }
    else{
        console.log('Good Evening!');
    }
}