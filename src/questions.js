const questions = [
    {
        question: "What's Britta's last name?",
        op1: "Perry",
        op2: "Bennet",
        op3: "Barry",
        op4: "Barnes",
        op5: "Edison",
        correct: 1,
        stage: 1
    },
    {
        question: "How many episodes does season 1 have?",
        op1: "21",
        op2: "25",
        op3: "22",
        op4: "24",
        op5: "18",
        correct: 2,
        stage: 1
    },
    {
        question: "What's Abed's racial background?",
        op1: "Indian and Polish",
        op2: "Arab and German",
        op3: "Arab and Polish",
        op4: "Indian and Slovenian",
        op5: "Arab and Indian",
        correct: 3,
        stage: 1
    },
    {
        question: "What does Pierce's dad's company sells?",
        op1: "Moist Towelettes",
        op2: "Toilette Paper",
        op3: "Dish Towels",
        op4: "Sanitizing Wipes",
        op5: "Napkins",
        correct: 1,
        stage: 1
    },
    {
        question: "What is the name of the app students of Greendale used to rate each other?",
        op1: "WoofWoofBeenz",
        op2: "GreedaleStars",
        op3: "FiveStars",
        op4: "MeowMeowBeenz",
        op5: "CheeChoowCheeChoow",
        correct: 4,
        stage: 1
    },
    {
        question: "What is the Dean's weird fetish?",
        op1: "Brazilian Birds",
        op2: "German Shepards",
        op3: "Jeff",
        op4: "Labradors",
        op5: "Dalmatians",
        correct: 5,
        stage: 1
    },
    {
        question: "How many children does Shirley have?",
        op1: "1",
        op2: "3",
        op3: "4",
        op4: "None",
        op5: "2",
        correct: 2,
        stage: 1
    },
    {
        question: "What is Abed's girlfirend's name?",
        op1: "Raquel",
        op2: "Rosie",
        op3: "Rachel",
        op4: "Rita",
        op5: "Ruth",
        correct: 3,
        stage: 1
    },
    {
        question: "What is Troy's monkey's name?",
        op1: "King Kong",
        op2: "Britta's Boobs",
        op3: "Fivel",
        op4: "Annie's Boobs",
        op5: "Bruno",
        correct: 4,
        stage: 1
    },
    {
        question: "What is the name of the interactive VCR game Abed and Annie play?",
        op1: "Pile of Bullets",
        op2: "Pile of Guns",
        op3: "Whose Ears are These?",
        op4: "Bang!",
        op5: "Dungeons and Dragons",
        correct: 1,
        stage: 1
    },
    {
        question: "What's Abed's favorite food?",
        op1: "Buttered Noodles",
        op2: "Splingles",
        op3: "Kettle Corn",
        op4: "Pizza",
        op5: "Salmon",
        correct: 1,
        stage: 1
    },
    {
        question: "What's the name of Greendale's most dangerous criminal?",
        op1: "Butt Crack Psycho",
        op2: "Ass Crack Bandit",
        op3: "Ass Cheek Robber",
        op4: "Benjamin Chang",
        op5: "Coin Bandit",
        correct: 2,
        stage: 1
    },
    {
        question: "Who are the winners of the first and second paintball game, respectively?",
        op1: "Jeff and Jeff",
        op2: "Britta and Pierce",
        op3: "Jeff and Shirley",
        op4: "Chang and Shirley",
        op5: "Jeff and Pierce",
        correct: 5,
        stage: 1
    },
    {
        question: "What's the name of Greendale's drama teacher?",
        op1: "Professor Professorson",
        op2: "Professor Sean Garrity",
        op3: "Professor Ian Duncan",
        op4: "Professor Noel Cornwallis",
        op5: "Professor Peter Sheffield",
        correct: 2,
        stage: 1
    },
    {
        question: "Which member of the Study Group is, according to Pierce, his favorite?",
        op1: "Jeff",
        op2: "Shirley",
        op3: "Annie",
        op4: "Troy",
        op5: "Britta",
        correct: 3,
        stage: 1
    },
    {
        question: "Where is Rich, from pottery class, from?",
        op1: "Denver",
        op2: "New Jersey",
        op3: "Albuquerque",
        op4: "Santa Fe",
        op5: "San Francisco",
        correct: 4,
        stage: 1
    },
    {
        question: "How many times has Pierce been married?",
        op1: "Three",
        op2: "One",
        op3: "Five",
        op4: "Seven",
        op5: "Eight",
        correct: 4,
        stage: 1
    },
    {
        question: "Who is Troy's favorite celebrity?",
        op1: "LeVar Burton",
        op2: "Jim Belushi",
        op3: "Chevy Chase",
        op4: "Cristian Bale",
        op5: "Sophie B Hawkins",
        correct: 1,
        stage: 1
    },
    {
        question: "Which fast food chain (almost) buys Greendale?",
        op1: "McDonald's",
        op2: "KFC",
        op3: "In-N-Out Burger",
        op4: "Taco Bell",
        op5: "Subway",
        correct: 5,
        stage: 1
    },
    {
        question: "What's Abed's favortite TV show?",
        op1: "Cougar Town",
        op2: "Inspector Spacetime",
        op3: "Cougarton Abbey",
        op4: "The Cape",
        op5: "Doctor Who",
        correct: 2,
        stage: 1
    },
    {
        question: "How did Chang become famous?",
        op1: "He ate a person",
        op2: "He made a commercial where he says 'Ham, Girl!'",
        op3: "He was the first asian keytarist to win a Grammy ",
        op4: "He starred in the new Play-Doh movie as the color Blue",
        op5: "He was the first person to have Changnesia",
        correct: 2,
        stage: 2
    },
    {
        question: "What event helps Britta decide she wants to major in Psychology?",
        op1: "Britta helps Jeff reconnect with his dad",
        op2: "Britta helps Pierce with his pill addiction",
        op3: "Britta helps Abed go to a happy place in his mind",
        op4: "Britta helps Abed find a new favorite TV show",
        op5: "Britta helps Annie say the word 'Penis'",
        correct: 4,
        stage: 2
    },
    {
        question: "Which class was canceled by Frankie when she arrived at Greendale?",
        op1: "Can I Fry That?",
        op2: "History of Ice Cream",
        op3: "Conspiracy Theories",
        op4: "Nicolas Cage: Good or Bad?",
        op5: "Ladders",
        correct: 5,
        stage: 2
    },
    {
        question: "How does the Save Greendale Committee save Greendale from being bought?",
        op1: "They find a secret treasure",
        op2: "Pierce lends them money",
        op3: "They find the deeds of the property",
        op4: "They plan an elaborate heist",
        op5: "They replace the Dean for a 'Doppledeaner'",
        correct: 3,
        stage: 2
    },
    {
        question: "When do Jeff and Annie have their first kiss?",
        op1: "Troy and Abed's new appartment party",
        op2: "Last night of school of the first year",
        op3: "The debate 'Man is good vs. Man is evil'",
        op4: "Last episode",
        op5: "Battle of model UN's",
        correct: 3,
        stage: 2
    },
    {
        question: "What is Troy/Abed/Annie's apartment number?",
        op1: "203",
        op2: "303",
        op3: "102",
        op4: "101",
        op5: "202",
        correct: 2,
        stage: 1
    },
    {
        question: "What does Abed say happened when he visited the Cougar Twon set?",
        op1: "He talks to Courtney Cox",
        op2: "He pees himself",
        op3: "He has a seizure",
        op4: "He poops his pants",
        op5: "He meets someone named Chad",
        correct: 4,
        stage: 2
    },
    {
        question: "What is the prize of the second paintball game?",
        op1: "Priority registration",
        op2: "200 thousand dollars cash",
        op3: "1 year supply of ice cream",
        op4: "Yard margs at Skeeper's",
        op5: "100 thousand dollars cash",
        correct: 5,
        stage: 2
    },
    {
        question: "What is Greendale's motto?",
        op1: `"Keep a loose grip"`,
        op2: `"E Pluribus Anus"`,
        op3: `"You're already accepted"`,
        op4: `"You're home"`,
        op5: `"Greendale is the way it goes"`,
        correct: 3,
        stage: 2
    },
    {
        question: "Why can't Shirley go to the hospital to deliver her baby?",
        op1: "The food fair became a race kurfuffle",
        op2: "There's too much traffic",
        op3: "Her water breaks too soon",
        op4: "Abed helps deliver the baby",
        op5: "Britta helps deliver the baby",
        correct: 1,
        stage: 2
    },
    {
        question: "Why do they roll a die on the six different timelines episode?",
        op1: "To decide who starts playing the game",
        op2: "To decide who goes get the pizza",
        op3: "To decide who should order food",
        op4: "To decide who stays with Todd as a lab partner",
        op5: "To decide who is gonna spend the day with Pierce",
        correct: 2,
        stage: 2
    },
    {
        question: "How does Pierce die?",
        op1: "He dies from dehydration",
        op2: "He has cancer",
        op3: "He is murdered",
        op4: "He has a heart attack",
        op5: "He electrocutes himself",
        correct: 1,
        stage: 2
    },
    {
        question: "How did Shirley meet Jeff?",
        op1: "They met at Greendale",
        op2: "Jeff defends the stripper André cheated on Shirley with",
        op3: "They met at AA's",
        op4: "They met playing foosball",
        op5: "They met at Spanish 101",
        correct: 4,
        stage: 2
    },
    {
        question: `"I agree with brown ____"`,
        op1: `"Anthony Michael Hall"`,
        op2: `"John Michael Higgins"`,
        op3: `"Jamie Lee Curtis"`,
        op4: `"Owen Wilson"`,
        op5: `"Betty White"`,
        correct: 3,
        stage: 3
    },
    {
        question: `"You know what the commercial says: ____"`,
        op1: `"Five dollar footlong"`,
        op2: `"Keep your damn hand off my Let's"`,
        op3: `"Pass the bucket"`,
        op4: `"I'm loving it"`,
        op5: `"Betcha can't eat just one"`,
        correct: 2,
        stage: 3
    },
    {
        question: `[singing]"I'm baby boomer santa, I'm ____"`,
        op1: `"a gift to the world!"`,
        op2: `"a living god!"`,
        op3: `"a modern day messiah!"`,
        op4: `"the real rock and roll!"`,
        op5: `"an american pearl!"`,
        correct: 5,
        stage: 3
    },
    {
        question: `"Abed makes the ____ and the decisions"`,
        op1: `"chicken"`,
        op2: `"fingers"`,
        op3: `"falafel"`,
        op4: `"special drink"`,
        op5: `"zucchini zircles"`,
        correct: 2,
        stage: 3
    },
    {
        question: `"Maybe it's because when I put on these jeans my ass looks like ____"`,
        op1: `"a baby pumpkin"`,
        op2: `"a small apple"`,
        op3: `"an ant's ass"`,
        op4: `"a baboon's butt"`,
        op5: `"a rat's ass"`,
        correct: 1,
        stage: 3
    },
    {
        question: `"My friendship with Abed is ____"`,
        op1: `"a TV show"`,
        op2: `"like the season 1 of Lost"`,
        op3: `"like most relationships"`,
        op4: `"awesome"`,
        op5: `"a giant cookie"`,
        correct: 5,
        stage: 3
    },
    {
        question: `"No way, drugs are like special ____, they give you a buzz"`,
        op1: `"drink"`,
        op2: `"candy"`,
        op3: `"honey"`,
        op4: `"medicine"`,
        op5: `"plants"`,
        correct: 3,
        stage: 3
    },
    {
        question: `"When Buddha returns, we all ____"`,
        op1: `"will be free"`,
        op2: `"take liquid form"`,
        op3: `"can see the color Blurble"`,
        op4: `"become vapor"`,
        op5: `"become light"`,
        correct: 2,
        stage: 3
    },
    {
        question: `"And that solves the matter of the ____"`,
        op1: `"giant hand"`,
        op2: `"frisbee ceiling"`,
        op3: `"chicken fingers"`,
        op4: `"glee club"`,
        op5: `"guerrilla marketing"`,
        correct: 1,
        stage: 3
    },
    {
        question: `"I'll ____ on it"`,
        op1: `"work"`,
        op2: `"sleep"`,
        op3: `"think"`,
        op4: `"sit"`,
        op5: `"count"`,
        correct: 4,
        stage: 3
    }
]