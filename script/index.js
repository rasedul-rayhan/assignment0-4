let currentTab = 0;

// 4container of available interview rejected no jobs
const allJobContainer = document.getElementById("available-jobs-container");
const interviewJobContainer= document.getElementById('interview-jobs-container');
const rejectedJobContainer = document.getElementById('rejected-jobs-container');
const noJobsAvail = document.getElementById('no-jobs-available');


// function for update status dashboard
function updatestatus(){
    const allJobStas =  document.getElementById('all-jobs-count');
    const interviewJobStas = document.getElementById('interview-jobs-count');
    const rejectedJobStas = document.getElementById('rejected-jobs-count');
    allJobStas.innerText = allJobContainer.children.length;
    interviewJobStas.innerText = interviewJobContainer.children.length;
    rejectedJobStas.innerText = rejectedJobContainer.children.length;
}

// function for update status available jobs right side
function updateAvailStatusR(status){
    // 0 for all, 1 for interview, 2 for rejected
    const availJobsR = document.getElementById("avail-jobs-count-r");
    if(currentTab == 0){
        availJobsR.innerText = allJobContainer.children.length;
    }
    else if(currentTab == 1){
        availJobsR.innerText =  interviewJobContainer.children.length;
    }
    else{
        availJobsR.innerText = rejectedJobContainer.children.length;
    }
}

// by defult selected all-btn
const allBtn = document.getElementById('all-btn-p');
allBtn.style.backgroundColor = '#513ec9';
allBtn.style.color = 'white';


// switch pages by click btn
function switchTabColor(tapIndex){
    const tapNames = document.getElementsByClassName('switch-tab-btn');
    currentTab = tapIndex;
    for(let t = 0; t < tapNames.length; t++){
        if(t == tapIndex){
            tapNames[t].style.backgroundColor = '#513ec9';
            tapNames[t].style.color = 'white';
            
            continue;
        }
        else{
            tapNames[t].style.backgroundColor = '';
            tapNames[t].style.color = '';
        }
    }

    if(tapIndex == 0){
        // for available status 
        updatestatus();
        updateAvailStatusR(0);

        const allJobCnt= allJobContainer.children.length;
        if(allJobCnt == 0){
            noJobsAvail.classList.remove('hidden');
        }
        else{
            allJobContainer.classList.remove('hidden');
            interviewJobContainer.classList.add('hidden');
            rejectedJobContainer.classList.add('hidden');
            noJobsAvail.classList.add('hidden');
        }

    }
    // if press interview button
    if(tapIndex == 1){
        // for update staus
        updatestatus();
        updateAvailStatusR(1);

        const interviewCount = interviewJobContainer.children.length;
        if(interviewCount == 0){
            noJobsAvail.classList.remove('hidden');

            // hide other contaiener
            allJobContainer.classList.add('hidden');
            interviewJobContainer.classList.add('hidden');
            rejectedJobContainer.classList.add('hidden');
        }   
        else{
            interviewJobContainer.classList.remove('hidden');
            allJobContainer.classList.add('hidden');
            rejectedJobContainer.classList.add('hidden');
            noJobsAvail.classList.add('hidden');
        }
    }

    if(tapIndex == 2){
        updatestatus();
        updateAvailStatusR(2);
        // if rejected jobs 0
        const rejectedJobsCount = rejectedJobContainer.children.length;
        if(rejectedJobsCount == 0){
            noJobsAvail.classList.remove('hidden');

            allJobContainer.classList.add('hidden');
            interviewJobContainer.classList.add('hidden');
            rejectedJobContainer.classList.add('hidden');
        }
        else{
            rejectedJobContainer.classList.remove('hidden');
            interviewJobContainer.classList.add('hidden');
            allJobContainer.classList.add('hidden');
            noJobsAvail.classList.add('hidden');
        }
    }
}

updatestatus();
updateAvailStatusR(0);

