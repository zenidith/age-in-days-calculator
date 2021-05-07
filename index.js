function calculateDays() {
    let currentTime = Date.now();
    let dob = document.getElementById('dob').value;
    const parsedDob = parseInt(dob, 10);

    if (isNaN(parsedDob)) {
        const dateDisplayer = document.getElementById("daysOld");
        dateDisplayer.innerText = "Please enter a date";


    } else  {
        let timeDiff = currentTime - new Date(dob);
        const dateDisplayer = document.getElementById("daysOld");
         
        const daysOld = Math.round(timeDiff/1000/60/60/24)
        
        dateDisplayer.innerHTML = `You are officially ${daysOld} days old!`;
    }
}