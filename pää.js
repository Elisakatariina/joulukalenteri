document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    const currentDay = today.getDate();

    const calendarButton = document.querySelector(".btn-start");
    const calendarContainer = document.querySelector(".container");

    const calendarDays = 24;
    
//MUSIIKKIKOODI ALKAA TÄSTÄ!//
// Lisää mp3 //
    const audioElement = new Audio('./kissalaulu.mp3');
    audioElement.loop = true;
    audioElement.volume = 0.5;
    
    const playAudio = () => {
        audioElement.play();
        document.removeEventListener('click', playAudio); 
    };
    
    document.addEventListener('click', playAudio);
    
    const openDoor = (path, event) => {
        const clickedDay = parseInt(event.target.innerHTML);

        if (clickedDay <= currentDay) {
            event.target.parentNode.style.backgroundImage = `url(${path})`;
            event.target.style.opacity = "0";
            event.target.style.backgroundColor = "rgb(29, 112, 47)"; // luukun animaatio taustaväri
            event.target.classList.add("active"); 
            
            audioElement.play();
        
        } else {
            const daysToWait = clickedDay - currentDay;
            alert(`Luukkua ei voi avata vielä! Avautuu ${daysToWait} päivän päästä.`);
        }
        };
        const createCalendar = () => {
            for (let i = 0; i < calendarDays; i++) {
                const calendarDoor = document.createElement("div");
                const calendarDoorText = document.createElement("div");
                calendarDoor.classList.add("image");
                calendarDoor.style.gridArea = "door" + (i + 1);
                calendarContainer.appendChild(calendarDoor);
                calendarDoorText.classList.add("text");
                
                if (i + 1 === currentDay) {
                    calendarDoorText.classList.add("active"); 
                }
                
                calendarDoorText.innerHTML = i + 1;
                calendarDoor.appendChild(calendarDoorText);
                
                const courseNumber = i + 1;
                const coursePath = `./gallery/cat-${courseNumber}.jpeg`;
                calendarDoorText.addEventListener("click", openDoor.bind(null, coursePath));
            }
        };
        calendarButton.addEventListener("click", createCalendar);
        
//LUMIHIUTALEKOODIA//
        const createSnowflake = () => {
            const snowflake = document.createElement("div");
            snowflake.className = "snowflake";
            snowflake.style.left = Math.random() * window.innerWidth + "px";
            document.body.appendChild(snowflake);
            snowflake.style.top = "0"; // Asetetaan lumihiutaleiden lähtö yläreunaan
            
            setTimeout(() => {
                snowflake.remove();
            }, 10000);
        };
        const generateSnowfall = () => {
            setInterval(createSnowflake, 500);
        };

generateSnowfall();
    });
