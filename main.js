const contact = [
    "ali-0910***651-28-ali***4@gmail.com",
    "reza-0916***878-19-re1***m@gmail.com",
    "sepide-0922***382-23-sep***h@gmail.com",
    "bardia-0918***478-21-bka***8@gmail.com",
    "mohsen-0912***504-36-moh***a@gmail.com",
    "sara-0913***382-30-sra***h@gmail.com",
    "tina-0922***992-17-tin***k@gmail.com",
    "roham-0916***014-25-rol***s@gmail.com",
    "mohammad-0936***369-23-moh***9@gmail.com",
    "abbas-0938***222-49-abb***h@gmail.com",
    "arash-0930***562-23-ara***e@gmail.com",
    "akram-0916***565-34-akm***l@gmail.com",
    "sasan-0920***123-16-sas***2@gmail.com",
    "fatemeh-0922***763-20-fati***4@gmail.com",
]

const searchName = prompt("Search your name:");

for (let i = 0; i < contact.length; i++) {
    let splittedContact = contact[i].split("-");
    if (splittedContact[0] === searchName) {
        console.log(`number of ${splittedContact[0]} is ${splittedContact[1]}`);
        console.log(`age of ${splittedContact[0]} is ${splittedContact[2]}`);
        console.log(`email of ${splittedContact[0]} is ${splittedContact[3]}`);
        break;
    } else {
        console.log("user not found");
    }
}