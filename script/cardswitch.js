// 1. Handle Interview Button Clicks
const interviewBtns = document.querySelectorAll('.interview-btn-s');
for (const btn of interviewBtns) {
    btn.addEventListener('click', function (event) {
        // Find the specific card
        const card = event.target.closest('.jobs-card');
    
        // Find and Update the Status Button inside this card
            const statusBtn = card.querySelector('.status-btn');
            if (statusBtn) {
                statusBtn.innerText = "APPLIED";
                statusBtn.classList.remove('bg-gray-300');
                
                // this condition for if i back to rejected container 
                if(statusBtn.classList.contains('bg-red-100')){
                    statusBtn.classList.remove('bg-red-100', 'text-red-700');
                }
                statusBtn.classList.add('bg-green-100', 'text-green-700');
            }
        // Move the card to the interview container
        const interviewJobContainer = document.getElementById('interview-jobs-container');
        interviewJobContainer.appendChild(card);
        
        updatestatus();
        updateAvailStatusR(1);
    });
}

// 2. Handle Rejected Button Clicks
const rejectedBtns = document.querySelectorAll('.rejected-btn-s');
for (const btn of rejectedBtns) {
    btn.addEventListener('click', function (event) {
        // Find the specific card
        const card = event.target.closest('.jobs-card');

        // Find and Update the Status Button inside this card
        const statusBtn = card.querySelector('.status-btn');
        if (statusBtn) {
            statusBtn.innerText = "REJECTED";
            statusBtn.classList.remove('bg-gray-300');
            statusBtn.classList.add('bg-red-100', 'text-red-700');
        }
        // Move the card to the rejected container
        const rejectedJobsContainer = document.getElementById('rejected-jobs-container');
        rejectedJobsContainer.appendChild(card);

        // Update counts
        updatestatus();
        updateAvailStatusR(2);
    });
}

// delete card
const dltBtns =  document.getElementsByClassName('card-dlt-btn')
for(const btn of dltBtns){
    btn.addEventListener('click', function(event){
        const card = event.target.closest('.jobs-card');
        card.remove();
        // show blank page with icon
        const totalJobsE = document.getElementById("available-jobs-container");
        const totalJobs = totalJobsE.children.length;
        if(totalJobs == 0){
            const noJobsAvail = document.getElementById('no-jobs-available');
            noJobsAvail.classList.remove('hidden');
        }
        updatestatus();
    });
}
