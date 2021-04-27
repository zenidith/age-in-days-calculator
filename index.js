function calculateDays() {
    
    let currentTime = Date.now();
    let dob = "1982/02/17";
    let timeDiff = currentTime - new Date(dob);
    const dateDisplayer = document.getElementById("daysOld");

    const daysOld = Math.round(timeDiff/1000/60/60/24)

    dateDisplayer.innerHTML = `You are officially ${daysOld} days old!`;
}

calculateDays()