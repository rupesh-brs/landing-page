window.onload = function() {
    const quotes = [
        "I am capable of achieving my goals.",
        "Today is going to be a great day.",
        "I am doing my best, and that's good enough.",
        "Good things are coming my way.",
        "My thoughts and feelings matter.",
      ];
  const random = Math.floor(Math.random() * quotes.length);
  const quote = document.getElementById("quote");
  quote.innerText = quotes[random];


    const images = [
        'assets/imgs/landing-bg-1.jpg',
        'assets/imgs/landing-bg-2.jpg',
        'assets/imgs/landing-bg-3.jpg',
        'assets/imgs/landing-bg-4.jpg',
        'assets/imgs/landing-bg-5.jpg'
    ];

    
    const randomImage = images[Math.floor(Math.random() * images.length)];

    
    console.log("Selected background image:", randomImage);

    document.body.style.backgroundImage = `url("${randomImage}")`;
};

// window.onload = function(){
    
  
// };

function updateTime() {
    const time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();

    hrs = hrs < 10 ? '0' + hrs : hrs;
    mins = mins < 10 ? '0' + mins : mins;
    secs = secs < 10 ? '0' + secs : secs;

    
    const timeString = `${hrs}:${mins}:${secs}`;
    document.getElementById('time').innerText = timeString;
}
setInterval(updateTime, 1000);
updateTime();










