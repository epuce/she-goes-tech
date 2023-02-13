var obj = {name: 'Linda', age: 22, country: 'Latvia'}

if (obj.age < 30) {
    alert('You are ok!')
} else {
    alert('You are old')
}

switch(obj.name) {
    case 'Linda':
    alert('Your name is Linda')
    break
    case 'Anna':
    alert('Your name is Anna')
    break
    case 'Edgars':
    alert('Your name is Edgars')
    break
    case 'Romeo':
    alert('Your name is Romeo')
    break
    default:
    alert('You have no name')
    break
}

if (obj.age > 5 && obj.name === 'Linda'){
    alert('You are good to go')
}
if (obj.age > 5 || obj.name === 'Linda'){
    alert('You are good to go')
}