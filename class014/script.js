var Now = new Date();
var Year = Now.getFullYear();

function CheckResult() {
var TypedYear = new Date(window.document.getElementById('txtyear'));
var HowOld = window.document.getElementById('res');
var BiologicalSex = window.document.getElementById('txtsex');
var Photo = window.document.getElementById('Image');

var Difference = Year - HowOld.getFullYear;

if(Difference < 2 && BiologicalSex === "Male")
{
    HowOld.innerHTML = `You are a Baby! You are ${Difference} years old and your biological sex is ${BiologicalSex}.`;
    Photo.src = `images/baby-boy.png`;
}
else
{
    if(Difference < 2 && BiologicalSex === "Female")
    {
        HowOld.innerHTML = `You are a Baby! You are ${Difference} years old and your biological sex is ${BiologicalSex}.`;
        Photo.src = `images/baby-girl.png`
    }
    else
    {
        if(Difference < 25 && BiologicalSex === "Male")
        {
            HowOld.innerHTML = `You are a Young Man! You are ${Difference} year old and your biological sex is ${BiologicalSex}.`;
            Photo.src = `images/young-man.png`;
        }
        else
        {
            if(Difference < 25 && BiologicalSex === "Female")
            {
                HowOld.innerHTML = `You are a Young Woman! You are ${Difference} year old and your biological sex is ${BiologicalSex}.`;
                Photo.src = `images/young-woman.png`;
            }
            else
            {
                if(Difference < 51 && BiologicalSex === "Male")
                {
                    HowOld.innerHTML = `You are a Adult Man! You are ${Difference} years old and your biological sex is ${BiologicalSex}.`;
                    Photo.src = `images/adult-man.png`;
                }
                else
                {
                    if(Difference < 51 && BiologicalSex === "Female")
                    {
                        HowOld.innerHTML = `You are a Adult Woman! You are ${Difference} years old and your biological sex is ${BiologicalSex}.`;
                        Photo.src = `images/adult-woman.png`;
                    }
                    else
                    {
                        if(BiologicalSex === "Male")
                        {
                            HowOld.innerHTML = `You are a Senior Man! You are ${Difference} years old and your biological sex is ${BiologicalSex}.`;
                            Photo.src = `images/senior-man`;
                        }
                        else
                        {
                            HowOld.innerHTML = `You are a Senior Woman! You are ${Difference} years old and your biological sex is ${BiologicalSex}.`;
                            Photo.src = `images/senior-woman`;
                        }
                    }
                }
            }
        }

    }
}
}
