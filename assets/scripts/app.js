
window.onload = function() {
    // Quote and Background Image Logic
    const quotes = [
      "I am capable of achieving my goals.",
      "Today is going to be a great day.",
      "I am doing my best, and that's good enough.",
      "Good things are coming my way.",
      "My thoughts and feelings matter.",
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteElement = document.getElementById("quote");
    quoteElement.innerText = randomQuote;
  
    const images = [
      "assets/imgs/landing-bg-1.jpg",
      "assets/imgs/landing-bg-2.jpg",
      "assets/imgs/landing-bg-3.jpg",
      "assets/imgs/landing-bg-4.jpg",
      "assets/imgs/landing-bg-5.jpg",
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    console.log("Selected background image:", randomImage);
    document.body.style.backgroundImage = `url("${randomImage}")`;
  
    // Time-Based Greeting and Time Display Logic
    const greetingElement = document.getElementById("greeting");
    const timeElement = document.getElementById("time");
    const nameDisplayElement = document.getElementById("nameDisplay");
  
    const updateTime = function() {
      const time = new Date();
      const hours = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds(); // Corrected typo - use 'seconds'
  
      // Format time
      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
      // Determine greeting
      let greeting;
      if (hours < 12) {
        greeting = "Good Morning";
      } else if (hours >= 12 && hours < 17) {
        greeting = "Good Afternoon";
      } else if (hours >= 17 && hours <= 21) {
        greeting = "Good Evening";
      } else {
        greeting = "Good Night";
      }
  
      // Update greeting and time elements
      greetingElement.innerText = `${greeting}, `;
      timeElement.innerText = formattedTime;
  
      const enteredName = nameInputElement.value.trim(); // Assuming you have an element 'nameInputElement'
      if (enteredName) {
        nameDisplayElement.innerText = enteredName;
      } else {
        nameDisplayElement.innerText = "Enter your name";
      }
    };
  
    updateTime(); // Update greeting and time initially
    setInterval(updateTime, 1000); // Update time and greeting every second
  };