const numChildren = [1, 2, 3, 4, 5];
const partnerNames = ['Edie', 'Maya', 'Matilda', 'Lana', 'Emilia'];
const locations = ['The Netherlands', 'France', 'England', 'USA', 'Russia'];
const jobs = ['programmer', 'social media coordinator', 'translator', 'farmer', 'barman'];

function tellFortune() {
    const randomChild = numChildren[Math.floor(Math.random() * numChildren.length)];
    const randomJob = jobs[Math.floor(Math.random() * jobs.length)];
    const randomPartner = partnerNames[Math.floor(Math.random() * partnerNames.length)];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];

    let s = 's';
    if (randomChild === 1) {
        s = '';
    }

    console.log(`You will be a ${randomJob} in ${randomLocation}, married to ${randomPartner} with ${randomChild} kid${s}.`);
}

tellFortune(numChildren, partnerNames, locations, jobs)