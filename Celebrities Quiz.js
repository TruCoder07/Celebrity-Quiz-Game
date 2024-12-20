// Celebrity Quiz
var readlineSync = require("readline-sync");

function passAug(celesQuestion, idx) {
    var element = celesQuestion[idx];

    for (let i = 0; i < element.length; i++) {
        quiz(element[i].question, element[i].answer);
    }
}

function quiz(question, answer) {
    var userAns = readlineSync.question(question);
    if (answer.toLowerCase() == userAns.toLowerCase()) {
        console.log("you are right");
        score++;
    } else {
        console.log("you are wrong");
    }
    console.log(`you're current score '${score}'`);
    console.log("-----------------------------");
}

function play(question, answer) {
    var ans = answer.toLowerCase();
    var isLoop = true;
    let cnt = 0;
    let idx = -1;
    while (isLoop) {
        if (cnt > 5) {
            break;
        }
        switch (ans) {
            case "shah rukh khan":
                console.log("Your fav Celebrity is 'Shah Rukh Khan'.");
                isLoop = false;
                idx = 0;
                break;

            case "salman khan":
                console.log("Your fav Celebrity is 'Salman Khan'.");
                isLoop = false;
                idx = 1;
                break;

            case "amitabh bachchan":
                console.log("Your fav Celebrity is 'Amitabh Bachchan'.");
                isLoop = false;
                idx = 2;
                break;

            case "alia bhatt":
                console.log("Your fav Celebrity is 'Alia Bhatt'.");
                isLoop = false;
                idx = 3;
                break;

            case "deepika padukone":
                console.log("Your fav Celebrity is 'Deepika Padukone'.");
                isLoop = false;
                idx = 4;
                break;

            case "virat kohli":
                console.log("Your fav Celebrity is 'Virat Kohli.'");
                isLoop = false;
                idx = 5;
                break;

            case "sachin tendulkar":
                console.log("Your fav Celebrity is 'Sachin Tendulkar'.");
                isLoop = false;
                idx = 6;
                break;

            case "ms dhoni":
                console.log("Your fav Celebrity is 'MS Dhoni'.");
                isLoop = false;
                idx = 7;
                break;

            case "arijit singh":
                console.log("Your fav Celebrity is 'Arijit Singh'.");
                isLoop = false;
                idx = 8;
                break;

            case "ar rahman":
                console.log("Your fav Celebrity is 'A.R. Rahman'.");
                isLoop = false;
                idx = 9;
                break;

            case "narendra modi":
                console.log("Your fav Celebrity is 'Narendra Modi'.");
                isLoop = false;
                idx = 10;
                break;

            case "apj abdul kalam":
                console.log("Your fav Celebrity is 'APJ Abdul Kalam'.");
                isLoop = false;
                idx = 11;
                break;

            case "1":
                console.log("Your fav Celebrity is 'Shah Rukh Khan'.");
                isLoop = false;
                idx = 0;
                break;

            case "2":
                console.log("Your fav Celebrity is 'Salman Khan'.");
                isLoop = false;
                idx = 1;
                break;

            case "3":
                console.log("Your fav Celebrity is 'Amitabh Bachchan'.");
                isLoop = false;
                idx = 2;
                break;

            case "4":
                console.log("Your fav Celebrity is 'Alia Bhatt'.");
                isLoop = false;
                idx = 3;
                break;

            case "5":
                console.log("Your fav Celebrity is 'Deepika Padukone'.");
                isLoop = false;
                idx = 4;
                break;

            case "6":
                console.log("Your fav Celebrity is 'Virat Kohli.");
                isLoop = false;
                idx = 5;
                break;

            case "7":
                console.log("Your fav Celebrity is 'Sachin Tendulkar'.");
                isLoop = false;
                idx = 6;
                break;

            case "8":
                console.log("Your fav Celebrity is 'MS Dhoni'.");
                isLoop = false;
                idx = 7;
                break;

            case "9":
                console.log("Your fav Celebrity is 'Arijit Singh'.");
                isLoop = false;
                idx = 8;
                break;

            case "10":
                console.log("Your fav Celebrity is 'A.R. Rahman'.");
                isLoop = false;
                idx = 9;
                break;

            case "11":
                console.log("Your fav Celebrity is 'Narendra Modi'.");
                isLoop = false;
                idx = 10;
                break;

            case "12":
                console.log("Your fav Celebrity is 'APJ Abdul Kalam'.");
                isLoop = false;
                idx = 11;
                break;

            default:
                console.log(
                    "Celebrity not part of the game. Choose from the list:",
                );
                console.log("Please choose from this list: \n");

                console.log("1. Shah Rukh Khan         2. Salman Khan");
                console.log("3. Amitabh Bachchan       4. Alia Bhatt");
                console.log("5. Deepika Padukone       6. Virat Kohli");
                console.log("7. Sachin Tendulkar       8. MS Dhoni");
                console.log("9. Arijit Singh           10. A.R. Rahman");
                console.log("11. Narendra Modi        12. APJ Abdul Kalam\n");

                var favCelebrity = readlineSync.question(
                    "Who is your fav Celebrity? ",
                );
                ans = favCelebrity.toLowerCase();
                cnt++;
                break;
        }
    }
    return idx;
}
var shahrukh = [
    { question: "What is Shah Rukh Khan's nickname? ", answer: "King Khan" },
    {
        question: "Which is his most iconic romantic movie? ",
        answer: "Dilwale Dulhania Le Jayenge",
    },
    { question: "What is SRK’s birthplace? ", answer: "New Delhi" },
    {
        question: "Which IPL team does he co-own? ",
        answer: "Kolkata Knight Riders",
    },
    { question: "What is his debut film? ", answer: "Deewana" },
    { question: "What is his wife’s name? ", answer: "Gauri Khan" },
    { question: "Which award has he won the most? ", answer: "Filmfare" },
    {
        question: "What is his famous dialogue? ",
        answer: "Don’t underestimate the power of a common man.",
    },
    { question: "Where is his house 'Mannat' located? ", answer: "Mumbai" },
    {
        question: "Which movie marked his comeback in 2023? ",
        answer: "Pathaan",
    },
];

var deepika = [
    { question: "What is her debut movie? ", answer: "Om Shanti Om" },
    { question: "Who is she married to? ", answer: "Ranveer Singh" },
    { question: "What is her birthplace? ", answer: "Copenhagen" },
    { question: "What is her highest-grossing film? ", answer: "Pathaan" },
    { question: "Which awards has she won the most? ", answer: "Filmfare" },
    {
        question: "What is her father's profession? ",
        answer: "Badminton player",
    },
    {
        question: "Which Hollywood movie did she act in? ",
        answer: "xXx: Return of Xander Cage",
    },
    { question: "What is her favorite sport? ", answer: "Badminton" },
    { question: "What is her pet's name? ", answer: "Misty" },
    { question: "Which brand is she an ambassador of? ", answer: "L'Oréal" },
];

var virat = [
    { question: "What is his batting style? ", answer: "Right-handed" },
    { question: "What is his nickname? ", answer: "Chiku" },
    { question: "Who is Virat Kohli married to? ", answer: "Anushka Sharma" },
    {
        question: "Which IPL team does he play for? ",
        answer: "Royal Challengers Bangalore",
    },
    { question: "What is his ODI jersey number? ", answer: "18" },
    { question: "What is his highest ODI score? ", answer: "183" },
    { question: "What is his fitness mantra? ", answer: "Discipline" },
    { question: "Which city is he from? ", answer: "Delhi" },
    { question: "How many World Cups has he played in? ", answer: "Four" },
    { question: "Who is his cricket idol? ", answer: "Sachin Tendulkar" },
];

var dhoni = [
    { question: "What is his nickname? ", answer: "Mahi" },
    { question: "Which state is he from? ", answer: "Jharkhand" },
    {
        question: "Which IPL team does he captain? ",
        answer: "Chennai Super Kings",
    },
    {
        question: "What is his role in cricket? ",
        answer: "Wicketkeeper-batsman",
    },
    { question: "What is his highest score in ODI? ", answer: "183*" },
    {
        question: "When did India win the World Cup under him? ",
        answer: "2011",
    },
    { question: "What is his favorite bike? ", answer: "Yamaha RD350" },
    { question: "What is his jersey number? ", answer: "7" },
    {
        question: "Which sport is he passionate about apart from cricket? ",
        answer: "Football",
    },
    {
        question: "Which Bollywood biopic is based on him? ",
        answer: "M.S. Dhoni: The Untold Story",
    },
];

var alia = [
    { question: "What is her debut movie? ", answer: "Student of the Year" },
    { question: "Who is her husband? ", answer: "Ranbir Kapoor" },
    { question: "What is her favorite hobby? ", answer: "Singing" },
    { question: "What is her father’s name? ", answer: "Mahesh Bhatt" },
    {
        question: "Which movie won her a National Award? ",
        answer: "Gangubai Kathiawadi",
    },
    { question: "What is her favorite dessert? ", answer: "Chocolate cake" },
    {
        question: "Which Hollywood movie did she debut in? ",
        answer: "Heart of Stone",
    },
    { question: "What is her pet’s name? ", answer: "Edward" },
    { question: "What is her birthplace? ", answer: "Mumbai" },
    { question: "Which is her most successful movie? ", answer: "RRR" },
];

var salman = [
    { question: "What is his nickname? ", answer: "Bhai" },
    {
        question: "Which is his most famous movie franchise? ",
        answer: "Dabangg",
    },
    { question: "What is his birthplace? ", answer: "Indore" },
    {
        question: "What is his production company called? ",
        answer: "Salman Khan Films",
    },
    { question: "Which reality show does he host? ", answer: "Bigg Boss" },
    { question: "What is his debut film? ", answer: "Biwi-O-Biwi" },
    {
        question: "Which charity organization does he run? ",
        answer: "Being Human",
    },
    {
        question: "What is his highest-grossing film? ",
        answer: "Bajrangi Bhaijaan",
    },
    { question: "Who is his father? ", answer: "Salim Khan" },
    { question: "What is his favorite sport? ", answer: "Wrestling" },
];

var amitabh = [
    { question: "What is his nickname? ", answer: "Big B" },
    { question: "What was his first major film? ", answer: "Zanjeer" },
    {
        question: "Which family member is also an actor? ",
        answer: "Abhishek Bachchan",
    },
    {
        question: "What is his famous dialogue? ",
        answer: "Rishtey mein toh hum tumhare baap lagte hain",
    },
    {
        question: "Which game show does he host? ",
        answer: "Kaun Banega Crorepati",
    },
    { question: "What is his birthplace? ", answer: "Allahabad" },
    { question: "What is his highest-grossing film? ", answer: "Sholay" },
    {
        question: "Which award has he won multiple times? ",
        answer: "National Film Award",
    },
    { question: "What is his wife's name? ", answer: "Jaya Bachchan" },
    { question: "What is his profession besides acting? ", answer: "Producer" },
];

var sachin = [
    { question: "What is his nickname? ", answer: "Master Blaster" },
    { question: "Which sport does he play? ", answer: "Cricket" },
    { question: "What is his highest score in Test cricket? ", answer: "248*" },
    { question: "What is his ODI jersey number? ", answer: "10" },
    { question: "What year did he retire? ", answer: "2013" },
    {
        question: "Which award was he honored with in 2014? ",
        answer: "Bharat Ratna",
    },
    { question: "What is his favorite food? ", answer: "Biryani" },
    { question: "Who is his cricket idol? ", answer: "Sunil Gavaskar" },
    { question: "What is his role in cricket? ", answer: "Batsman" },
    {
        question: "Which autobiography did he publish? ",
        answer: "Playing It My Way",
    },
];

var arijit = [
    { question: "What is his debut song? ", answer: "Phir Mohabbat" },
    {
        question: "Which reality show did he participate in? ",
        answer: "Fame Gurukul",
    },
    { question: "What is his favorite genre of music? ", answer: "Romantic" },
    { question: "What is his birthplace? ", answer: "Jiaganj" },
    { question: "What is his most famous song? ", answer: "Tum Hi Ho" },
    { question: "Who is his musical inspiration? ", answer: "Mohammed Rafi" },
    { question: "What instrument does he play? ", answer: "Guitar" },
    {
        question: "Which award has he won multiple times? ",
        answer: "Filmfare Award",
    },
    { question: "What is his musical style? ", answer: "Playback singing" },
    {
        question: "Which Bollywood movie features him prominently? ",
        answer: "Aashiqui 2",
    },
];

var rahman = [
    { question: "What is his nickname? ", answer: "Mozart of Madras" },
    {
        question: "Which is his debut film as a music composer? ",
        answer: "Roja",
    },
    { question: "Which award has he won multiple times? ", answer: "Oscar" },
    { question: "What is his birthplace? ", answer: "Chennai" },
    {
        question: "Which genre does he primarily work in? ",
        answer: "Film music",
    },
    { question: "What is his most famous song? ", answer: "Jai Ho" },
    { question: "Which musical instrument does he play? ", answer: "Keyboard" },
    {
        question: "What is his production company called? ",
        answer: "A.R. Rahman Foundation",
    },
    {
        question: "Which Indian film industry does he primarily work in? ",
        answer: "Bollywood",
    },
    {
        question: "What is his most notable work in Hollywood? ",
        answer: "Slumdog Millionaire",
    },
];

var modi = [
    { question: "What is his position? ", answer: "Prime Minister" },
    { question: "Which party does he belong to? ", answer: "BJP" },
    { question: "What is his birthplace? ", answer: "Vadnagar" },
    { question: "What is his mother's name? ", answer: "Heera Ben" },
    { question: "When did he become Prime Minister? ", answer: "2014" },
    {
        question: "What is his famous slogan? ",
        answer: "Sabka Saath, Sabka Vikas",
    },
    {
        question: "What is his educational qualification? ",
        answer: "Bachelor's in Arts",
    },
    {
        question: "Which state was he the Chief Minister of? ",
        answer: "Gujarat",
    },
    { question: "What is his birthday? ", answer: "September 17" },
    {
        question: "Which international award did he receive in 2020? ",
        answer: "Global Goalkeeper Award",
    },
];

var kalam = [
    { question: "What is his nickname? ", answer: "Missile Man" },
    { question: "Which position did he hold? ", answer: "President" },
    { question: "What is his birthplace? ", answer: "Rameswaram" },
    { question: "What is his famous book? ", answer: "Wings of Fire" },
    { question: "What did he study? ", answer: "Aerospace Engineering" },
    { question: "Which organization did he work for? ", answer: "ISRO" },
    { question: "When did he become President? ", answer: "2002" },
    { question: "What is his vision for India? ", answer: "Vision 2020" },
    { question: "What award did he receive in 1997? ", answer: "Bharat Ratna" },
    {
        question: "What is his favorite quote? ",
        answer: "Dream, dream, dream.",
    },
];

var celesQuestion = [
    shahrukh,
    salman,
    amitabh,
    alia,
    deepika,
    virat,
    sachin,
    dhoni,
    arijit,
    rahman,
    modi,
    kalam,
];

var name = readlineSync.question("Enter your name: ");
var greetUser = "Welcome " + name + " in the GAME";
console.log(greetUser);

var question = "Who is your fav Celebrity? ";
var Celebrity = readlineSync.question(question);
var index = play(question, Celebrity);

var score = 0;

passAug(celesQuestion, index);

console.log(`your final score '${score}'`);
console.log("Thanks for playing");
