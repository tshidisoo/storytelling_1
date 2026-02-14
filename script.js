// Data for all videos and their specific questions
const videoData = [
    {
        id: "1DeQVnSxcLk",
        title: "The Girl and the Ice Cream Truck",
        url: "https://youtu.be/1DeQVnSxcLk?si=zFSQGQWRdE1cvfuM",
        questions: [
            { q: "What is the girl waiting for at the window?", options: ["Winter", "Summer", "A package", "Her friend"], answer: 1 },
            { q: "What does the girl see driving down the street?", options: ["A fire truck", "A school bus", "An ice cream truck", "A police car"], answer: 2 },
            { q: "What is the actual weather like outside?", options: ["Hot and sunny", "Cold and snowy", "Rainy", "Windy"], answer: 1 },
            { q: "What does the girl put on before running outside?", options: ["A winter coat", "A raincoat", "A bathing suit and summer hat", "Pajamas"], answer: 2 },
            { q: "What happens when she steps outside?", options: ["She feels warm sand", "She steps on icy grass", "She jumps in a pool", "She melts the snow"], answer: 1 },
            { q: "Where did the ice cream truck actually go?", options: ["To the beach", "To the park", "To the auto repair shop", "To sell ice cream"], answer: 2 },
            { q: "What does her mother say about summer?", options: ["It is here now", "It is far away", "It was yesterday", "It is next week"], answer: 1 },
            { q: "What is the moral of the story?", options: ["Always eat ice cream", "Don't run outside without shoes", "Don't draw a conclusion from a single observation", "Summer is better than winter"], answer: 2 },
            { q: "What does the girl want to eat?", options: ["Pizza", "Strawberries and ice cream", "Hot soup", "Cake"], answer: 1 },
            { q: "Why did the truck likely turn the corner?", options: ["It was broken", "It was selling ice cream", "It was lost", "It was chasing summer"], answer: 0 }
        ]
    },
    {
        id: "l0Z8A4u3CtI",
        title: "The Wind and the Sun",
        url: "https://youtu.be/l0Z8A4u3CtI?si=2eNPtLe4-gDndogO",
        questions: [
            { q: "Who were having a disagreement?", options: ["The Rain and the Snow", "The Wind and the Sun", "The Earth and the Moon", "The Trees and the Grass"], answer: 1 },
            { q: "What was the contest about?", options: ["Who could blow the hardest", "Who could make the man remove his jacket", "Who could make it rain", "Who could spin the fastest"], answer: 1 },
            { q: "What did the man do when the Wind blew hard?", options: ["He took off his jacket", "He zipped his jacket up tight", "He started running", "He flew away"], answer: 1 },
            { q: "What did the Wind turn the rain into?", options: ["Hail", "Fog", "Snow", "Ice"], answer: 2 },
            { q: "What did the man think when the wind blew?", options: ["A winter storm is coming", "It's a nice day", "I should go swimming", "The sun is hot"], answer: 0 },
            { q: "What did the Sun do first?", options: ["Shined extremely hot immediately", "Gently shined to stop the snow", "Hid behind a cloud", "Called the moon"], answer: 1 },
            { q: "How did the man react to the gentle sun?", options: ["He kept his jacket zipped", "He unzipped his hood and jacket", "He put on a scarf", "He went inside"], answer: 1 },
            { q: "What made the man finally take off his jacket?", options: ["The wind blew it off", "He got too hot from the sun", "He spilled water on it", "He wanted to swim"], answer: 1 },
            { q: "Who won the contest?", options: ["The Wind", "The Sun", "The Man", "Neither"], answer: 1 },
            { q: "What is the lesson of the story?", options: ["Force is better than kindness", "Gentleness can achieve more than force", "Winter is better than Summer", "Always wear a jacket"], answer: 1 }
        ]
    },
    {
        id: "Oq-vK6nyPDY",
        title: "The Dog and his Bone",
        url: "https://youtu.be/Oq-vK6nyPDY?si=2aP9qJqEJSXb-CUP",
        questions: [
            { q: "Where did the dog find the bone?", options: ["In a trash can", "In a bowl", "At the butcher", "In the park"], answer: 0 },
            { q: "What did the dog see when looking into the water?", options: ["A fish", "A cat", "Another dog (his reflection)", "A boat"], answer: 2 },
            { q: "What did the dog think the 'other dog' had?", options: ["No bone", "A smaller bone", "A bigger bone", "A toy"], answer: 2 },
            { q: "How did the dog feel about the other bone?", options: ["Happy", "Greedy/Jealous", "Indifferent", "Sad"], answer: 1 },
            { q: "What happened when the dog barked?", options: ["He scared the other dog", "His bone fell into the water", "The water froze", "He jumped across"], answer: 1 },
            { q: "What happened to the 'other dog' when he jumped in?", options: ["It bit him", "It ran away", "It disappeared (it was a reflection)", "It shared the bone"], answer: 2 },
            { q: "Where did the dog's bone go?", options: ["It floated", "It sank to the bottom", "A bird took it", "The other dog took it"], answer: 1 },
            { q: "How did the dog feel at the end?", options: ["Wet, cold, and boneless", "Full and warm", "Proud", "Excited"], answer: 0 },
            { q: "What is the moral of the story?", options: ["Dogs should not swim", "Bones sink in water", "Be happy with what you have", "Always look in the water"], answer: 2 },
            { q: "Which place did the dog run past on his way home?", options: ["The airport", "The train station", "The beach", "The zoo"], answer: 1 }
        ]
    },
    {
        id: "w6199XN1Gyk",
        title: "The Fox and the Crow",
        url: "https://youtu.be/w6199XN1Gyk?si=c0Y-wyjKFrShepHZ",
        questions: [
            { q: "Where was the crow sitting?", options: ["On the ground", "On a fence", "On the highest branch of a tree", "In a cave"], answer: 2 },
            { q: "What did the crow have in her beak?", options: ["A worm", "A piece of cheese", "A shiny coin", "A nut"], answer: 1 },
            { q: "How did the fox try to get the cheese?", options: ["By climbing the tree", "By shaking the tree", "By using flattery", "By throwing a rock"], answer: 2 },
            { q: "What did the fox compliment first?", options: ["Her voice", "Her feathers and eyes", "Her cheese", "Her nest"], answer: 1 },
            { q: "What did the fox ask the crow to do?", options: ["Fly down", "Share the cheese", "Sing a song", "Dance"], answer: 2 },
            { q: "Why did the crow open her mouth?", options: ["To eat", "To speak", "To sing", "To breathe"], answer: 2 },
            { q: "What happened when the crow opened her beak?", options: ["She sang beautifully", "The cheese fell out", "The fox ran away", "Nothing happened"], answer: 1 },
            { q: "What did the fox do with the cheese?", options: ["Gave it back", "Swallowed it in one gulp", "Shared it", "Saved it for later"], answer: 1 },
            { q: "Did the fox really think the crow had a magnificent voice?", options: ["Yes", "No, he was lying", "Maybe", "He didn't care"], answer: 1 },
            { q: "What is the moral of the story?", options: ["Cheese is delicious", "Crows can't sing", "Beware of flatterers", "Always share your food"], answer: 2 }
        ]
    },
    {
        id: "wtMUy_3NGl4",
        title: "Snow White",
        url: "https://youtu.be/wtMUy_3NGl4?si=q5Qf8Ftb9Tx_6BSp",
        questions: [
            { q: "What did the Queen ask the magic mirror?", options: ["Who is the richest?", "Who is the smartest?", "Who is the most beautiful?", "Where is the King?"], answer: 2 },
            { q: "Who did the mirror say was more beautiful than the Queen?", options: ["Cinderella", "Snow White", "Sleeping Beauty", "The Fairy"], answer: 1 },
            { q: "Who did Snow White live with in the forest?", options: ["Seven Giants", "Seven Dwarfs", "Seven Elves", "Seven Bears"], answer: 1 },
            { q: "What was the deal Snow White made with the dwarfs?", options: ["She would pay rent", "She would wash the dishes", "She would sing songs", "She would cook only"], answer: 1 },
            { q: "How did the Queen trick Snow White?", options: ["Dressed as a merchant", "Dressed as an old woman selling fruit", "Sent a letter", "Cast a spell from afar"], answer: 1 },
            { q: "Which part of the apple was poisoned?", options: ["The whole apple", "The green half", "The red half (one half only)", "The stem"], answer: 2 },
            { q: "How did Snow White wake up in this version?", options: ["A kiss", "The coffin was dropped/bumped and the apple fell out", "A magic potion", "Time ran out"], answer: 1 },
            { q: "What happened to the magic mirror?", options: ["It was sold", "The Queen smashed it", "It stopped working", "It was stolen"], answer: 1 },
            { q: "How did the Queen feel after the spell broke?", options: ["Angry forever", "Free from anxiety and jealousy", "Sad", "Confused"], answer: 1 },
            { q: "What did the Prince buy for the dwarfs?", options: ["A new house", "A dishwasher", "A car", "New beds"], answer: 1 }
        ]
    },
    {
        id: "VjTJvwgJnGc",
        title: "The Little Red Hen",
        url: "https://youtu.be/VjTJvwgJnGc?si=VVpyVyLaKyVEQBNQ",
        questions: [
            { q: "Which animals were the Little Red Hen's friends?", options: ["Pig, Cow, Sheep", "Cat, Dog, Horse", "Duck, Goose, Rat", "Lion, Tiger, Bear"], answer: 1 },
            { q: "What did the Hen want to make?", options: ["Bread", "Pizza", "A Raspberry Cake", "Soup"], answer: 2 },
            { q: "What was the Horse usually doing?", options: ["Sleeping", "Running", "Watching TV", "Eating"], answer: 2 },
            { q: "What did the friends say when asked for help?", options: ["Yes, of course!", "Maybe later", "Not me", "I will help"], answer: 2 },
            { q: "Who picked the raspberries?", options: ["The Dog", "The Cat", "The Little Red Hen", "Everyone"], answer: 2 },
            { q: "What ingredients did the Hen need?", options: ["Meat and potatoes", "Flour, sugar, milk, butter", "Eggs and cheese", "Water and salt"], answer: 1 },
            { q: "Who wanted to eat the cake?", options: ["Only the Hen", "Only the Horse", "All the animals", "None of them"], answer: 2 },
            { q: "Did the Hen share the cake?", options: ["Yes", "No", "Only with the Cat", "A little bit"], answer: 1 },
            { q: "Why didn't she share?", options: ["There wasn't enough", "They didn't help make it", "She didn't like them", "It tasted bad"], answer: 1 },
            { q: "What is the lesson?", options: ["Work hard to enjoy the reward", "Always watch TV", "Cats are lazy", "Cake is healthy"], answer: 0 }
        ]
    },
    {
        id: "9a9qNLUpkV8",
        title: "Jack and the Beanstalk",
        url: "https://youtu.be/9a9qNLUpkV8?si=w_f9WTLwAjFC0NPz",
        questions: [
            { q: "What did Jack trade the cow for?", options: ["Money", "Magic Beans", "A horse", "A car"], answer: 1 },
            { q: "What happened when his mother threw the beans out?", options: ["Birds ate them", "A giant beanstalk grew", "They disappeared", "Nothing happened"], answer: 1 },
            { q: "Who helped Jack in the castle initially?", options: ["The Giant", "The Giantess (Giant's wife)", "A prisoner", "A fairy"], answer: 1 },
            { q: "What did the Giant say when he smelled Jack?", options: ["Welcome!", "Fee Fi Fo Fum", "Who is there?", "I am hungry"], answer: 1 },
            { q: "What was the first thing Jack stole?", options: ["Golden Hen", "Golden Harp", "Bag of Gold Coins", "Food"], answer: 2 },
            { q: "What was special about the Hen?", options: ["It talked", "It laid golden eggs", "It was huge", "It could fly"], answer: 1 },
            { q: "Why did the Giant wake up the second time?", options: ["Jack sneezed", "The Harp screamed", "The Hen clucked", "Jack tripped"], answer: 1 },
            { q: "How did Jack stop the Giant?", options: ["He fought him", "He chopped down the beanstalk", "He used magic", "He ran faster"], answer: 1 },
            { q: "What does the story say thunder is?", options: ["Clouds banging", "Giants dancing", "Magic spells", "Rain falling"], answer: 1 },
            { q: "How did Jack feel later in life?", options: ["Perfectly happy", "Sad and guilty", "Angry", "Bored"], answer: 1 }
        ]
    },
    {
        id: "ZC38jekCaB8",
        title: "The Emperor's New Clothes",
        url: "https://youtu.be/ZC38jekCaB8?si=hAMiuS68p_LmapGW",
        questions: [
            { q: "What did the Emperor love the most?", options: ["Food", "War", "Fancy Clothes", "Books"], answer: 2 },
            { q: "What did the tailor claim about the clothes?", options: ["They were fireproof", "They were invisible to stupid people", "They could fly", "They were made of gold"], answer: 1 },
            { q: "Could the Emperor actually see the clothes?", options: ["Yes, clearly", "No, he saw nothing", "A little bit", "Only in the sun"], answer: 1 },
            { q: "Why did everyone pretend to see the clothes?", options: ["They liked the color", "They didn't want to look stupid", "The tailor paid them", "They were magic"], answer: 1 },
            { q: "What fancy words did the Emperor like?", options: ["Small words", "Fancy, complicated words", "Rhyming words", "Foreign words"], answer: 1 },
            { q: "What was the Emperor actually wearing at the parade?", options: ["A beautiful robe", "Only his underpants", "A suit of armor", "Jeans"], answer: 1 },
            { q: "Who finally said the truth?", options: ["A general", "The Queen", "A small child", "The tailor"], answer: 2 },
            { q: "How did the crowd react to the truth?", options: ["They cried", "They laughed", "They got angry", "They ran away"], answer: 1 },
            { q: "What did the Emperor do when people laughed?", options: ["He stopped", "He ran back to the palace", "He fought them", "He laughed too"], answer: 1 },
            { q: "How did the tailor leave?", options: ["With suitcases full of gold", "Empty handed", "In chains", "Without a carriage"], answer: 0 }
        ]
    }
];

let currentQuizIndex = -1;

// Render Video Grid
function renderVideoGrid() {
    const grid = document.getElementById('videoContainer');
    videoData.forEach((video, index) => {
        const card = document.createElement('div');
        card.className = 'video-card';

        const thumbUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

        card.innerHTML = `
            <div class="thumbnail-container">
                <a href="${video.url}" target="_blank">
                    <img src="${thumbUrl}" alt="${video.title}">
                    <div class="play-icon"></div>
                </a>
            </div>
            <div class="card-content">
                <div class="video-title">${video.title}</div>
                <button class="quiz-btn" onclick="openQuiz(${index})">Take Listening Quiz</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Open Quiz Modal
function openQuiz(index) {
    currentQuizIndex = index;
    const video = videoData[index];
    document.getElementById('modalTitle').innerText = `Quiz: ${video.title}`;
    const questionsContainer = document.getElementById('questionsContainer');
    questionsContainer.innerHTML = '';

    document.getElementById('resultArea').style.display = 'none';
    document.querySelector('.submit-btn').style.display = 'block';

    video.questions.forEach((qObj, qIdx) => {
        const qBlock = document.createElement('div');
        qBlock.className = 'question-block';

        let optionsHtml = '';
        qObj.options.forEach((opt, optIdx) => {
            optionsHtml += `
                <label>
                    <input type="radio" name="q${qIdx}" value="${optIdx}"> ${opt}
                </label>
            `;
        });

        qBlock.innerHTML = `
            <div class="question-text">${qIdx + 1}. ${qObj.q}</div>
            <div class="options">${optionsHtml}</div>
            <div class="feedback" id="feedback-q${qIdx}"></div>
        `;
        questionsContainer.appendChild(qBlock);
    });

    document.getElementById('quizModal').style.display = 'block';
}

// Close Modal
function closeModal() {
    document.getElementById('quizModal').style.display = 'none';
}

// Check Answers
function checkAnswers() {
    const video = videoData[currentQuizIndex];
    let score = 0;
    const total = video.questions.length;
    let allAnswered = true;

    video.questions.forEach((qObj, qIdx) => {
        const selected = document.querySelector(`input[name="q${qIdx}"]:checked`);
        const feedbackDiv = document.getElementById(`feedback-q${qIdx}`);

        if (!selected) {
            allAnswered = false;
        }

        feedbackDiv.style.display = 'block';

        if (selected && parseInt(selected.value) === qObj.answer) {
            score++;
            feedbackDiv.innerHTML = `<span class="correct-answer">✓ Correct!</span>`;
        } else {
            const correctText = qObj.options[qObj.answer];
            feedbackDiv.innerHTML = `<span class="wrong-answer">✗ Incorrect. The correct answer is: ${correctText}</span>`;
        }
    });

    if (!allAnswered) {
        alert("Please answer all questions before submitting.");
        return;
    }

    const resultArea = document.getElementById('resultArea');
    const scoreDisplay = document.getElementById('scoreDisplay');

    resultArea.style.display = 'block';
    document.querySelector('.submit-btn').style.display = 'none';
    scoreDisplay.innerText = `${score} / ${total}`;
    resultArea.scrollIntoView({ behavior: 'smooth' });
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('quizModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', renderVideoGrid);
