function Upload(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('image');
    var msg2 = window.document.getElementById('msg2');
    var Now = new Date();
    var Hour = Now.getHours();
    
    msg.innerHTML = `Now it's ${Hour} o'clock.`

    if(Hour >= 0 && Hour < 12)
    {
        msg2.innerHTML = '<strong>Good Morning</strong>!';
        img.src = 'images/morning.png';
        document.body.style.background = '#ffcf91'
    }
    else
    {
        if(Hour >= 12 && Hour < 18)
        {
            msg2.innerHTML = '<strong>Good Afternoon!</strong>';
            img.src = 'images/afternoon.png';
            document.body.style.background = '#9CC1D9';
        }
        else
        {
            msg2.innerHTML = '<strong>Good Evening!</strong>';
            img.src = 'images/evening.png';
            document.body.style.background = '#010510dd';
        }
    }
}
