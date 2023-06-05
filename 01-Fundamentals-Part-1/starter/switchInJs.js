const day ='monday'

switch(day){
    case 'monday':
        console.log('Plan cource structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Record videos')
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log("Not a valid day !")
}