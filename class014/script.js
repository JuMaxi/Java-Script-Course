function CheckResult() {
var Now = new Date();
var Year = Now.getFullYear();

var TypedYear = window.document.getElementById('txtyear');
var HowOld = window.document.getElementById('res');


if(TypedYear.value.length == 0 || TypedYear.value > Year)
{
    window.alert('Check the data inserted and try again!');
}
else
{
    var BiologicalSex = window.document.getElementsByName('radsex');
    var Age = Year - Number(TypedYear.value);
    var Biological = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'photo');

    if(BiologicalSex[0].checked)
    {
        Biological = "Male";
        if(Age <= 10)
        {
            img.setAttribute('src', 'Images/baby-boy.png');
        }
        else
        {
            if(Age <= 24)
            {
                img.setAttribute('src', 'Images/young-man.png')
            }
            else
            {
                if(Age <= 50)
                {
                    img.setAttribute('src', 'Images/adult-man.png')
                }
                else
                {
                    img.setAttribute('src', 'Images/senior-man.png');
                }
            }
        }
    }
    else
    {
        Biological = "Female";
        if(Age <= 10)
        {
            img.setAttribute('src', 'Images/baby-girl.png')
        }
        else
        {
            if(Age <= 24)
            {
                img.setAttribute('src', 'Images/young-woman.png');
            }
            else
            {
                if(Age <= 50)
                {
                    img.setAttribute('src', 'Images/adult-woman.png');
                }
                else
                {
                    img.setAttribute('src', 'Images/senior-woman.png');
                }
            }
        }
    }
    HowOld.style.textAlign = 'center';
    HowOld.innerHTML = `We checked ${Biological},  ${Age} years old.`;
    HowOld.appendChild(img);
}
}


