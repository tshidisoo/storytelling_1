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
    },
    {
        id: "GxcGVCEEdcU",
        title: "The Tortoise and the Hare",
        url: "https://youtu.be/GxcGVCEEdcU",
        questions: [
            { q: "How does the hare usually run?", options: ["Very fast", "Very slowly", "Carefully", "Quietly"], answer: 0 },
            { q: "How does the tortoise move?", options: ["Quickly", "Very slowly", "Loudly", "Fast"], answer: 1 },
            { q: "Why does the hare laugh at the tortoise?", options: ["Because the tortoise walks slowly", "Because he is green", "Because he is funny", "Because he is fast"], answer: 0 },
            { q: "How does the tortoise walk during the race?", options: ["Carefully and steadily", "Angrily", "Quickly", "Badly"], answer: 0 },
            { q: "What does the hare decide to do under the tree?", options: ["Eat well", "Sleep well", "Sing loudly", "Work hard"], answer: 1 },
            { q: "How does the hare wake up when he realizes he's late?", options: ["Slowly", "Suddenly and quickly", "Quietly", "Carefully"], answer: 1 },
            { q: "Did the tortoise do his best?", options: ["No, he didn't", "Yes, he worked very hard and well", "He was lazy", "He slept"], answer: 1 },
            { q: "Who ultimately wins the race?", options: ["The Hare", "The Tortoise", "The Fox", "The Owl"], answer: 1 },
            { q: "How does the tortoise cross the finish line?", options: ["Quickly and jumping", "Slowly but surely", "Running fast", "Flying"], answer: 1 },
            { q: "What is the moral of the story?", options: ["Fast runners always win", "Slow and steady wins the race", "Never sleep", "Always run fast"], answer: 1 }
        ]
    },
    {
        id: "0W86K1jBJFI",
        title: "Little Red Riding Hood",
        url: "https://youtu.be/0W86K1jBJFI",
        questions: [
            { q: "Why does Little Red Riding Hood have to visit her grandmother?", options: ["Because she is sick", "Because it is her birthday", "Because she wants to play", "Because she is hungry"], answer: 0 },
            { q: "What does her mother tell her she has to do on her journey?", options: ["Go straight on and stay on the path", "Run as fast as she can", "Climb a tree", "Turn left and swim"], answer: 0 },
            { q: "Why does she stop in the forest?", options: ["Because she has to sleep", "Because she wants to pick beautiful flowers", "Because she is lost", "Because it is raining"], answer: 1 },
            { q: "When she turns left off the path, who does she meet?", options: ["A friendly woodcutter", "A fairy", "A dangerous wolf", "A little bear"], answer: 2 },
            { q: "What does the wolf ask her?", options: ["\"Where do you have to go?\"", "\"What is your name?\"", "\"Do you like apples?\"", "\"Can you run fast?\""], answer: 0 },
            { q: "How does the wolf get to the house first?", options: ["He goes straight on a shorter path", "He flies over the trees", "He takes a bus", "He walks very slowly"], answer: 0 },
            { q: "Why does the wolf wear grandmother's clothes?", options: ["Because he is cold", "Because he has to trick Little Red Riding Hood", "Because they look nice", "Because his clothes are dirty"], answer: 1 },
            { q: "Little Red says, \"Why are your ears so big?\" What is his answer?", options: ["\"Because I listen to music\"", "\"Because I have to hear you better\"", "\"Because I am a wolf\"", "\"Because I am cold\""], answer: 1 },
            { q: "Who finally saves Little Red Riding Hood and her grandmother?", options: ["Her mother", "The wolf", "A brave woodcutter", "A police officer"], answer: 2 },
            { q: "What did she learn she always has to do next time?", options: ["Listen to her mother and go straight on", "Talk to stranger wolves", "Walk slowly in the dark", "Pick more flowers"], answer: 0 }
        ]
    },
    {
        id: "_svBrlehmMo",
        title: "The Ant and the Grasshopper",
        url: "https://youtu.be/_svBrlehmMo",
        questions: [
            { q: "What season is it at the beginning of the story?", options: ["Winter", "Spring", "Summer", "Autumn"], answer: 2 },
            { q: "What is the ant doing during the warm days?", options: ["Working hard to collect food", "Sleeping in the sun", "Singing loudly", "Playing games"], answer: 0 },
            { q: "What is the grasshopper doing?", options: ["Helping the ant", "Building a warm house", "Singing and playing all day", "Crying"], answer: 2 },
            { q: "Why does the ant work so hard?", options: ["Because he enjoys working", "To save food for the cold winter", "Because the grasshopper told him to", "Because he is hungry right now"], answer: 1 },
            { q: "What happens when the seasons change to winter?", options: ["It gets very hot", "It gets cold and snow falls", "The flowers bloom beautifully", "The leaves turn green"], answer: 1 },
            { q: "How does the grasshopper feel in the winter?", options: ["Cold and very hungry", "Warm and happy", "Tired from working", "Excited to play in the snow"], answer: 0 },
            { q: "Where does the grasshopper go to ask for help?", options: ["To the ant's house", "To the bear's warm cave", "To the top of a tree", "To the big city"], answer: 0 },
            { q: "Does the ant have enough food?", options: ["No, he is starving", "Yes, because he worked hard in the summer", "He only has a little bit left", "He lost all his food"], answer: 1 },
            { q: "What does the ant do when the grasshopper asks for food?", options: ["He chases him away", "He shares his food and lets him in", "He laughs at him", "He tells him to sing to keep warm"], answer: 1 },
            { q: "What is the important lesson of this story?", options: ["Play all summer long", "Winter is the most fun season", "Work hard today to be ready for tomorrow", "Ants are mean to grasshoppers"], answer: 2 }
        ]
    },
    {
        id: "FU_0NF_jrgE",
        title: "The Bird and the Whale",
        url: "https://youtu.be/FU_0NF_jrgE",
        questions: [
            { q: "Where does the whale live?", options: ["In the dark forest", "Deep in the sea", "High in the sky", "On a tall mountain"], answer: 1 },
            { q: "What does the bird like doing?", options: ["Swimming deep", "Flying and singing high in the sky", "Eating big fish", "Sleeping all day"], answer: 1 },
            { q: "What does the whale like doing?", options: ["Flying high above the clouds", "Swimming deep in the ocean", "Singing in the green trees", "Running on the beach"], answer: 1 },
            { q: "Where do the bird and the whale first meet?", options: ["At the surface of the water", "High up in the sky", "At the very bottom of the sea", "In a tall tree branch"], answer: 0 },
            { q: "How do they communicate with each other?", options: ["They write long letters", "They sing beautiful songs to each other", "They dance together", "They talk on the phone"], answer: 1 },
            { q: "What is the big problem they face as friends?", options: ["They don't like each other anymore", "They like doing different things in different places", "The whale is too loud", "The bird is too small to see"], answer: 1 },
            { q: "Can the whale go into the sky to fly with the bird?", options: ["Yes, very easily", "No, whales can't fly", "Only in the summer time", "Sometimes when it rains"], answer: 1 },
            { q: "Can the bird go deep under the water with the whale?", options: ["Yes, he loves it", "No, birds can't breathe underwater", "Only to catch big fish", "Yes, to sleep comfortably"], answer: 1 },
            { q: "What do they decide to do at the end of the story?", options: ["Stay together forever", "Go their separate ways but always remember each other", "The bird learns to swim", "The whale learns to fly"], answer: 1 },
            { q: "What does the story teach us about friendship?", options: ["Birds and whales are exactly the same", "Friends can like doing different things and still care for each other", "Swimming is much better than flying", "Never talk to big whales"], answer: 1 }
        ]
    },
    {
        id: "K5gr-A03RFM",
        title: "Bremen Town Musicians",
        url: "https://youtu.be/K5gr-A03RFM",
        questions: [
            { q: "Which group of animals makes up the Bremen Town Musicians?", options: ["Dog, Cat, Mouse, Cow", "Donkey, Dog, Cat, Rooster", "Pig, Horse, Sheep, Goat", "Lion, Tiger, Bear, Wolf"], answer: 1 },
            { q: "Why did the donkey leave his home?", options: ["He wanted to travel the world", "He was too old and his master didn't want him anymore", "He was very angry", "He found a new job in town"], answer: 1 },
            { q: "What did the donkey want to become in Bremen?", options: ["A famous farmer", "A town musician", "The new king", "A brave guard"], answer: 1 },
            { q: "Why was the dog sitting by the road feeling sad?", options: ["He was too old to hunt for his master", "He lost his favorite bone", "He was very hungry", "He didn't like barking anymore"], answer: 0 },
            { q: "Why was the cat looking miserable?", options: ["She couldn't run fast enough to catch mice anymore", "She lost her favorite toy", "She was feeling very cold", "She hated loud music"], answer: 0 },
            { q: "Why was the rooster crowing so loudly?", options: ["Because it was early morning", "Because he was going to be made into soup that evening", "Because he was very happy", "Because he saw the bright sun"], answer: 1 },
            { q: "Where did the tired animals decide to sleep on their journey?", options: ["In a big comfortable hotel", "In a dark forest near a large tree", "In a warm barn", "Right in the middle of Bremen"], answer: 1 },
            { q: "Who was actually living in the cozy house they found in the forest?", options: ["A very kind old lady", "A dangerous group of robbers", "A big scary bear", "The rich mayor of Bremen"], answer: 1 },
            { q: "How did the animals manage to scare the robbers away?", options: ["They quickly called the police", "They stood on each other's backs and made a loud, scary noise", "They ran in and bit them", "They started a big fire"], answer: 1 },
            { q: "Did the animals ever actually reach the town of Bremen?", options: ["Yes, and they played music for the king", "No, they happily stayed in the robbers' house forever", "Yes, but they quickly came back", "No, they got hopelessly lost"], answer: 1 }
        ]
    },
    {
        id: "lMCG5rLlDdI",
        title: "The Three Little Pigs",
        url: "https://youtu.be/lMCG5rLlDdI?si=1bopOfbjQr7dGcdw",
        questions: [
            { q: "What did the mommy pig warn her children about before they left?", options: ["A bad winter storm", "The big bad wolf", "Getting lost in the dark", "Running out of food"], answer: 1 },
            { q: "What material did the first lazy little pig use to build his house?", options: ["Bricks", "Wood", "Straw", "Mud"], answer: 2 },
            { q: "What material did the second little pig use to build his house?", options: ["Sticks and branches", "Leaves", "Straw", "Heavy stones"], answer: 0 },
            { q: "What kind of house did the third little pig build?", options: ["A tent made of cloth", "A fast house of wood", "A tall house of glass", "A sturdy house of brick"], answer: 3 },
            { q: "What did the pigs reply when the wolf asked to come in?", options: ["Go away, wolf!", "Not by the hair on my chinny chinny chin", "We are not home", "You can come in later"], answer: 1 },
            { q: "What did the wolf say right before he destroyed the first two houses?", options: ["I will break down the door!", "I'll huff and I'll puff and I'll blow your house down!", "I will climb through the window!", "I am very hungry!"], answer: 1 },
            { q: "What happened to the second pig's stick house when the wolf blew on it?", options: ["It stood firm", "The roof flew off", "It shuddered, cracked, and collapsed", "It caught on fire"], answer: 2 },
            { q: "What happened when the wolf tried to blow down the third pig's brick house?", options: ["The door broke", "The chimney fell off", "The wind howled but the brick walls stood firm", "The house shook and cracked"], answer: 2 },
            { q: "How did the angry wolf try to get inside the brick house?", options: ["He dug a tunnel under it", "He broke a window", "He knocked it down with a rock", "He slid down the chimney"], answer: 3 },
            { q: "What was waiting for the wolf at the bottom of the chimney?", options: ["A trap door", "A great iron pot filled with boiling water", "The three pigs with sticks", "A locked fireplace"], answer: 1 }
        ]
    }
];

let currentQuizIndex = -1;

// Render Video Grid
function renderVideoGrid() {
    const grid = document.getElementById('videoContainer');
    grid.innerHTML = ''; // Ensure the grid is clear before rendering
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
    
    // This entirely clears the previous questions, effectively resetting the radio buttons
    questionsContainer.innerHTML = '';

    // Hide the result area and ensure the submit button is visible again
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

    // STEP 1: Check if all questions are answered FIRST
    video.questions.forEach((qObj, qIdx) => {
        const selected = document.querySelector(`input[name="q${qIdx}"]:checked`);
        if (!selected) {
            allAnswered = false;
        }
    });

    if (!allAnswered) {
        alert("Please answer all questions before submitting.");
        return; // Stop the function here so we don't reveal answers
    }

    // STEP 2: Calculate score, show feedback, and lock radio buttons
    video.questions.forEach((qObj, qIdx) => {
        const selected = document.querySelector(`input[name="q${qIdx}"]:checked`);
        const feedbackDiv = document.getElementById(`feedback-q${qIdx}`);
        
        // Disable the radio buttons so they can't change their answer
        const allRadios = document.querySelectorAll(`input[name="q${qIdx}"]`);
        allRadios.forEach(radio => radio.disabled = true);

        feedbackDiv.style.display = 'block';

        if (parseInt(selected.value) === qObj.answer) {
            score++;
            feedbackDiv.innerHTML = `<span class="correct-answer">✓ Correct!</span>`;
        } else {
            const correctText = qObj.options[qObj.answer];
            feedbackDiv.innerHTML = `<span class="wrong-answer">✗ Incorrect. The correct answer is: ${correctText}</span>`;
        }
    });

    // STEP 3: Display the final score
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
