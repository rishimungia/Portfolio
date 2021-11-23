const projectsData = [
    {
        "id": 0,
        "title": "COVIDSOS Bot",
        "description": "Twitter Bot to help people during the COVID19 pandemic",
        "cardImage": "https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png",
        "coverImage": require("../data/assets/tweetBotCover.png"),

        "content": [
            {
                "paragraph": {
                    "content": "The idea for this bot originated from the #COVIDSOS trend on Twitter. The goal was to create a bot that can help users find relevant information without going through the hassel of digging through thousands of tweets."
                }
                
            },
            {
                "paragraph": {
                    "title": "| Auto-reply",
                    "content": "The bot can reply to mention tweets on it's timeline. It is configured to automaticly reply to mentions with hashtags like #reply, #COVIDSOS, #covidDM, etc.\nThis module also manages enrollment of users to the Direct Messages feature, it looks for keywords like: '#coviddm start' and initiates the CovidDM module."
                }
            },
            {
                "imagePara": {
                    "style": 1,
                    "title": "| CovidDM",
                    "image": "https://basicarticle.com/wp-content/uploads/2021/06/twitter-the-basics-on-how-to-to-use-it-for-business.gif",
                    "content": "If the user is following the Bot account, they can get any information related to COVID19 directly through their personal messages. The availabe commands for DM module are:\n\n> CovidStatus: Get details of present COVID cases.\n> CovidSOS [Location] [Requirement]: Get relevant #COVIDSOS Tweets.\n> Stop: Unenroll from the CovidDM module."
                }
            },
            {
                "paragraph": {
                    "title": "| Terminal Interface",
                    "content": "The terminal interface is designed to be user friendly. It also has some audio output for accesibility. It contains commands to control the TweetBot like:\n\n> Custom Tweet\n> Check for unreplied tweets\n> Covid Status - Get details of present COVID cases\n> Search Tweets by hashtag\n> Search Tweets by Username\n> Search for #COVIDSOS Tweets"
                }
            }

        ]
    },
    {
        "id": 1,
        "title": "Nano Slayer",
        "description": "2D Action Platformer Game made using Unity Engine",
        "cardImage": "https://purepng.com/public/uploads/thumbnail//google-stadia-logo-hd4.png",
        "coverImage": "image-url",

        "content": [
            {
                "paragraph": {
                    "content": "This was a semester project that I made with my friends for Computer Graphics course. But just like any other game developer, I was not satisfied with the end result. So I did what any other game developer would do, is to remaster the entire game.\nSo what exactly is Nano Slayer? Well it's an 2D Action Platformer in which you have to fight through endless hoards of enemies. The idea was heighly inspired from the classic FPS Shooter DOOM."
                }
            },
            {
                "imagePara": {
                    "style": 1,
                    "title": "| Player Mechanics",
                    "image": "https://shush25.github.io/graphics-project/static/media/rishi1.4733a2b6.png",
                    "content": "Since this is core part of the game, it took the most time to perfect. A bad player controller can easily break immersion and break the game so I put a lot of effort to make the movement as fluid as possible. There are some special player mechanics apart from base movement: \n> Wall Sliding\n> Double Jump\n> Wall Jump"
                }
            },
            {
                "paragraph": {
                    "title": "| Enemies and Powers",
                    "content": "Currently there are three enemy types each with it's own behaviour and attacks so they give the player a good amount of challenge. But fret not as our protagonist has some cool gadgets and powerups in it's arsenal. I am not going to spoil all the fun so instead let's take a look at the different foes you'll be facing..."
                }
            },
            {
                "imagePara": {
                    "style": 0,
                    "title": "| Jumper",
                    "image": "https://shush25.github.io/graphics-project/static/media/rishi1.4733a2b6.png",
                    "content": "This is one of the more annoing ones to kill. It jumps above the player and does a massive damage by directly landing on the head."
                }
            },
            {
                "imagePara": {
                    "style": 1,
                    "title": "| Atomic Crab",
                    "image": "https://shush25.github.io/graphics-project/static/media/rishi1.4733a2b6.png",
                    "content": "It's the result of a radioactive experiment on a crab gone very WRONG! It shoots radioactive projectiles that explode instantly on impact. However it dosent like to be in close contact to the player."
                }
            },
            {
                "imagePara": {
                    "style": 0,
                    "title": "| Robo Spider",
                    "image": "https://shush25.github.io/graphics-project/static/media/rishi1.4733a2b6.png",
                    "content": "This sneaky spider has just one goal, to sneak up behind the Slayer and Go BOOM! And it is most definately not a reskined Minecraft Creeper."
                }
            },
            {
                "paragraph": {
                    "title": "| Graphics and Art",
                    "content": "The game assets all follow pixel-art style. It makes the task of asset creation easy and is pleasing to look at. Along with that Unity's new 2D Lights bundled with the Universal Render Pipeline gives the whole level a sense of depth. And not to forget Unity's amazing Particle System which brings the game world to life, it gives simple boring looking scenes a sence of motion.\nI also used some Pixel Art Assets made by Ansimuz (https://ansimuz.itch.io/)."
                }
            },
            {
                "paragraph": {
                    "title": "| Play Now",
                    "content": "Comming Soon!"
                }
            },
            {
                "paragraph": {
                    "title": "| Gameplay Screenshots"
                }
            }
        ]
    },
    {
        "id": 2,
        "title": "Project C",
        "description": "Fugiat ut consequat deserunt ad voluptate.",
        "cardImage": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
        "coverImage": "image-url",

        "content": [
            {
                "paragraph": {
                    "title": "Subtitle B1",
                    "content": "Sit ea non officia proident qui nostrud laborum ea officia minim nulla exercitation. Sit ipsum non anim cupidatat cillum velit. Magna elit velit culpa eu sint quis incididunt. Dolor amet aute laboris irure amet Lorem sint incididunt. Ut irure dolore eiusmod mollit amet incididunt."
                }
            },
            {
                "imagePara": {
                    "style": 1,
                    "title": "Subtitle B2",
                    "image": "image-url",
                    "content": "Sit ea non officia proident qui nostrud laborum ea officia minim nulla exercitation. Sit ipsum non anim cupidatat cillum velit. Magna elit velit culpa eu sint quis incididunt. Dolor amet aute laboris irure amet Lorem sint incididunt. Ut irure dolore eiusmod mollit amet incididunt."
                }
            }
        ]
    }
];

export default projectsData;