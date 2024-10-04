const today = new Date();
const currentHour = today.getHours();
let message = "Hello";

// if morning, show "Good Morning"
if (current <= 12) {
    message = "Good Morning, beautiful word!";
} else if (currentHour > 12 && currentHour <= 17 ) {
    message = "Hello beautiful world";
} else if (currentHour > 17) {
    message = "Good Evening, beautiful world!"
}

const handleClick = () => {
    alert(message);
}