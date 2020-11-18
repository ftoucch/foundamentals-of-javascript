function AgeInDays()
{
    var birthYear = prompt('What Year were You Born Good friend');
    var AgeDays   = (2020-birthYear) * 365;
    var h2 = document.createElement('h2');
    var result = document.createTextNode('Mate ! You Are ' + AgeDays + ' Days Old');
    h2.setAttribute('id', 'AgeInDays');
    h2.appendChild(result); 
    document.getElementById('result').appendChild(h2);
}

function reset()
{
    document.getElementById('AgeInDays').remove();
}