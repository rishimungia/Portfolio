(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/tweetBotCover.f71d5e60.png"},20:function(e,t,a){"use strict";a.r(t);var i=a(2),n=a.n(i),s=a(6),c=a.n(s),r=(a(14),a(3)),o=a(7),l=a.n(o),d=(a(16),function(){var e=Object(i.useState)(window.innerWidth),t=Object(r.a)(e,2),a=t[0],n=t[1],s=function(){n(window.innerWidth)};return Object(i.useEffect)((function(){return window.addEventListener("resize",s),function(){window.removeEventListener("resize",s)}}),[]),a<=768});var m=a(1),u=function(e){var t=e.isHovering,a=function(){var e=Object(i.useState)({x:null,y:null,down:!1}),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(i.useEffect)((function(){var e=function(e){var t=e.clientX,a=e.clientY,i=e.buttons;n({x:t,y:a}),n(i>0?{down:!0}:{down:!1})};document.addEventListener("mousemove",e);var t=function(e){var t=e.type;n("mousedown"===t?{down:!0}:{down:!1})};return document.addEventListener("mouseup",t),document.addEventListener("mousedown",t),function(){document.removeEventListener("mousemove",e),document.removeEventListener("mousedown",t),document.removeEventListener("mouseup",t)}}),[]),a}(),n=a.x,s=a.y,c=a.down,o={left:"calc(".concat(n,"px - 10px)"),top:"calc(".concat(s,"px - 10px)")};return t&&!c?o={left:"calc(".concat(n,"px - 10px)"),top:"calc(".concat(s,"px - 10px)"),filter:"blur(15px)",background:"hsla(0, 0%, 100%, 0.2)"}:t&&c?o={left:"calc(".concat(n,"px - 10px)"),top:"calc(".concat(s,"px - 10px)"),background:"hsla(0, 0%, 100%, 0.4)",filter:"blur(10px)"}:!t&&c&&(o={left:"calc(".concat(n,"px - 10px)"),top:"calc(".concat(s,"px - 10px)"),background:"hsla(0, 0%, 40%, 0.5)",transform:"scale(0.9)"}),Object(m.jsx)("div",{className:"cursor",style:o})},h=function(e){var t=e.text;return Object(m.jsx)("div",{className:"panel",children:Object(m.jsx)("div",{className:"gradient-container",children:Object(m.jsx)("p",{children:t})})})},p=a.p+"static/media/Me800.4f600c0e.jpg",j=function(){return Object(m.jsx)("div",{className:"panel",children:Object(m.jsxs)("div",{className:"home-container",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"profile-glow"}),Object(m.jsx)("div",{className:"profile-container",children:Object(m.jsx)("img",{src:p,alt:"Rishi Mungia"})})]}),Object(m.jsxs)("div",{className:"home-text","data-aos":"fade-up","data-aos-delay":"1000",children:[Object(m.jsx)("h1",{children:"Rishi Mungia"}),Object(m.jsx)("p",{children:"Web developer, Game designer and UI/UX enthusiast who loves to create breathtaking experiences"})]})]})})},g=function(e){var t=e.setIsHovering,a=e.text;return Object(m.jsx)("div",{className:"hover-button",onMouseEnter:function(){return t(!0)},onMouseLeave:function(){return t(!1)},children:a})},b=a(8),O=function(e){e.isHovering;var t=e.setIsHovering;return Object(m.jsxs)("div",{className:"navbar",children:[Object(m.jsx)("p",{className:"nav-logo",children:"RM"}),Object(m.jsx)("div",{className:"nav-links",children:Object(m.jsx)(g,{setIsHovering:t,text:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(b.a,{style:{height:"1rem",margin:"-2px 0",color:"red"}})," Work in Progress"]})})})]})},v=(a(18),a.p+"static/media/tech-stack.af6f9509.png"),f=a.p+"static/media/creative-apps.809b8b22.png",x=function(){return Object(m.jsx)("div",{className:"panel",children:Object(m.jsxs)("div",{className:"toolkit-container",children:[Object(m.jsx)("h1",{children:"My Toolkit"}),Object(m.jsxs)("div",{className:"toolkit-grid",children:[Object(m.jsx)("div",{className:"pixel","data-aos":"fade-up",children:Object(m.jsx)("p",{children:"Pixel Perfect Code"})}),Object(m.jsx)("div",{className:"tech-apps","data-aos":"fade-up",style:{backgroundImage:"url("+v+")"},children:Object(m.jsx)("p",{children:"And Expanding"})}),Object(m.jsx)("div",{className:"creative-apps","data-aos":"fade-up",style:{backgroundImage:"url("+f+")"}}),Object(m.jsx)("div",{className:"pallet","data-aos":"fade-up",children:Object(m.jsx)("p",{children:"Creative Pallet"})})]})]})})},y=a(4),w=function(e){var t=e.isOpen,a=e.setIsOpen;return Object(m.jsx)("div",{className:"floating-button",onClick:function(){return a(!t)},style:t?{pointerEvents:"none",width:"215px",height:"215px",borderRadius:"20px"}:null,children:Object(m.jsx)(y.c,{style:t?{opacity:"0"}:null})})},k=a(9),I=function(e){var t=e.isOpen,a=e.setIsOpen,i=e.isDark,n=e.setIsDark;return Object(m.jsxs)("div",{className:"menu-container",style:t?{transform:"translateY(0) scale(1)",opacity:"1",zIndex:"1"}:null,children:[Object(m.jsx)("div",{className:"menu-item",children:Object(m.jsx)("p",{children:"Contact"})}),Object(m.jsxs)("div",{className:"menu-item",onClick:function(){return n(!i)},children:[Object(m.jsx)("p",{children:"Light"}),Object(m.jsx)("p",{children:"Dark"}),Object(m.jsx)("div",{className:"theme-switch",style:i?{transform:"translateX(100%)"}:null})]}),Object(m.jsx)("div",{className:"menu-item icon",onClick:function(){return a(!1)},children:Object(m.jsx)(y.a,{})}),Object(m.jsx)("div",{className:"menu-item icon",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(m.jsx)(y.b,{})}),Object(m.jsx)("a",{href:"https://github.com/rishimungia",children:Object(m.jsx)("div",{className:"menu-item icon",children:Object(m.jsx)(k.a,{})})})]})},S=function(e){e.setIsHovering;var t=e.image,a=e.title,i=e.description,n=e.delay,s=e.onClick;return Object(m.jsxs)("div",{className:"project-card","data-aos":"fade-up","data-aos-delay":n,children:[Object(m.jsxs)("div",{className:"card-blur",onClick:s,children:[Object(m.jsx)("p",{className:"card-blur-title",children:a}),Object(m.jsx)("p",{children:"Learn More"})]}),Object(m.jsx)("div",{className:"image",style:{backgroundImage:"url("+t+")"}}),Object(m.jsx)("h2",{children:a}),Object(m.jsx)("p",{children:i})]})},N=[{id:0,title:"COVIDSOS Bot",description:"Twitter Bot to help people during the COVID19 pandemic",cardImage:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png",coverImage:a(19),content:[{paragraph:{content:"The idea for this bot originated from the #COVIDSOS trend on Twitter. The goal was to create a bot that can help users find relevant information without going through the hassel of digging through thousands of tweets."}},{paragraph:{title:"| Auto-reply",content:"The bot can reply to mention tweets on it's timeline. It is configured to automaticly reply to mentions with hashtags like #reply, #COVIDSOS, #covidDM, etc.\nThis module also manages enrollment of users to the Direct Messages feature, it looks for keywords like: '#coviddm start' and initiates the CovidDM module."}},{imagePara:{style:1,title:"| CovidDM",image:"https://basicarticle.com/wp-content/uploads/2021/06/twitter-the-basics-on-how-to-to-use-it-for-business.gif",content:"If the user is following the Bot account, they can get any information related to COVID19 directly through their personal messages. The availabe commands for DM module are:\n\n> CovidStatus: Get details of present COVID cases.\n> CovidSOS [Location] [Requirement]: Get relevant #COVIDSOS Tweets.\n> Stop: Unenroll from the CovidDM module."}},{paragraph:{title:"| Terminal Interface",content:"The terminal interface is designed to be user friendly. It also has some audio output for accesibility. It contains commands to control the TweetBot like:\n\n> Custom Tweet\n> Check for unreplied tweets\n> Covid Status - Get details of present COVID cases\n> Search Tweets by hashtag\n> Search Tweets by Username\n> Search for #COVIDSOS Tweets"}}]},{id:1,title:"Nano Slayer",description:"2D Action Platformer Game made using Unity Engine",cardImage:"https://purepng.com/public/uploads/thumbnail//google-stadia-logo-hd4.png",coverImage:"image-url",content:[{paragraph:{content:"This was a semester project that I made with my friends for Computer Graphics course. But just like any other game developer, I was not satisfied with the end result. So I did what any other game developer would do, is to remaster the entire game.\nSo what exactly is Nano Slayer? Well it's an 2D Action Platformer in which you have to fight through endless hoards of enemies. The idea was heighly inspired from the classic FPS Shooter DOOM."}},{imagePara:{style:1,title:"| Player Mechanics",image:"https://shush25.github.io/graphics-project/static/media/rishi1.4733a2b6.png",content:"Since this is core part of the game, it took the most time to perfect. A bad player controller can easily break immersion and break the game so I put a lot of effort to make the movement as fluid as possible. There are some special player mechanics apart from base movement: \n> Wall Sliding\n> Double Jump\n> Wall Jump"}},{paragraph:{title:"| Enemies and Powers",content:"Currently there are three enemy types each with it's own behaviour and attacks so they give the player a good amount of challenge. But fret not as our protagonist has some cool gadgets and powerups in it's arsenal. I am not going to spoil all the fun so instead let's take a look at the different foes you'll be facing..."}},{imagePara:{style:0,title:"| Jumper",image:"https://shush25.github.io/graphics-project/static/media/rishi1.4733a2b6.png",content:"This is one of the more annoing ones to kill. It jumps above the player and does a massive damage by directly landing on the head."}},{imagePara:{style:1,title:"| Atomic Crab",image:"https://shush25.github.io/graphics-project/static/media/rishi1.4733a2b6.png",content:"It's the result of a radioactive experiment on a crab gone very WRONG! It shoots radioactive projectiles that explode instantly on impact. However it dosent like to be in close contact to the player."}},{imagePara:{style:0,title:"| Robo Spider",image:"https://shush25.github.io/graphics-project/static/media/rishi1.4733a2b6.png",content:"This sneaky spider has just one goal, to sneak up behind the Slayer and Go BOOM! And it is most definately not a reskined Minecraft Creeper."}},{paragraph:{title:"| Graphics and Art",content:"The game assets all follow pixel-art style. It makes the task of asset creation easy and is pleasing to look at. Along with that Unity's new 2D Lights bundled with the Universal Render Pipeline gives the whole level a sense of depth. And not to forget Unity's amazing Particle System which brings the game world to life, it gives simple boring looking scenes a sence of motion.\nI also used some Pixel Art Assets made by Ansimuz (https://ansimuz.itch.io/)."}},{paragraph:{title:"| Play Now",content:"Comming Soon!"}},{paragraph:{title:"| Gameplay Screenshots"}}]},{id:2,title:"Project C",description:"Fugiat ut consequat deserunt ad voluptate.",cardImage:"https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",coverImage:"image-url",content:[{paragraph:{title:"Subtitle B1",content:"Sit ea non officia proident qui nostrud laborum ea officia minim nulla exercitation. Sit ipsum non anim cupidatat cillum velit. Magna elit velit culpa eu sint quis incididunt. Dolor amet aute laboris irure amet Lorem sint incididunt. Ut irure dolore eiusmod mollit amet incididunt."}},{imagePara:{style:1,title:"Subtitle B2",image:"image-url",content:"Sit ea non officia proident qui nostrud laborum ea officia minim nulla exercitation. Sit ipsum non anim cupidatat cillum velit. Magna elit velit culpa eu sint quis incididunt. Dolor amet aute laboris irure amet Lorem sint incididunt. Ut irure dolore eiusmod mollit amet incididunt."}}]}],P=function(e){var t=e.setIsHovering,a=e.setProjectScreen;return Object(m.jsx)("div",{className:"panel",children:Object(m.jsxs)("div",{className:"projects-container",children:[Object(m.jsx)("h1",{children:"Projects"}),Object(m.jsx)("div",{className:"project-grid",children:N.map((function(e){return Object(m.jsx)(S,{setIsHovering:t,image:e.cardImage,title:e.title,description:e.description,delay:e.id%3*500,onClick:function(){return a({id:e.id,isOpen:!0})}},e.id)}))})]})})},C=function(e){var t=e.projectScreen,a=e.setProjectScreen,i=N[t.id];return Object(m.jsx)("div",{className:"project-screen-container",style:t.isOpen?{opacity:1,pointerEvents:"unset"}:null,children:Object(m.jsxs)("div",{className:"project-screen",style:t.isOpen?{transform:"translateY(0px)"}:null,children:[Object(m.jsx)("div",{className:"close-btn",onClick:function(){a({id:t.id,isOpen:!1}),setTimeout((function(){return a({id:-1,isOpen:!1})}),250)},children:Object(m.jsx)(y.a,{})}),i?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"cover-image",style:{backgroundImage:"url("+i.coverImage.default+")"}}),Object(m.jsx)("h1",{children:i.title}),Object(m.jsx)(m.Fragment,{children:i.content.map((function(e){return Object(m.jsxs)(m.Fragment,{children:[e.paragraph?Object(m.jsxs)("div",{className:"project-para",children:[e.paragraph.title?Object(m.jsx)("h2",{children:e.paragraph.title}):null,Object(m.jsx)("p",{children:e.paragraph.content})]}):null,e.imagePara?Object(m.jsx)("div",{className:"project-img-para",children:0===e.imagePara.style?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"project-image",style:{backgroundImage:"url("+e.imagePara.image+")"}}),e.imagePara.content?Object(m.jsxs)("div",{children:[e.imagePara.title?Object(m.jsx)("h2",{children:e.imagePara.title}):null,Object(m.jsx)("p",{children:e.imagePara.content})]}):null]}):Object(m.jsxs)(m.Fragment,{children:[e.imagePara.content?Object(m.jsxs)("div",{children:[e.imagePara.title?Object(m.jsx)("h2",{children:e.imagePara.title}):null,Object(m.jsx)("p",{children:e.imagePara.content})]}):null,Object(m.jsx)("div",{className:"project-image",style:{backgroundImage:"url("+e.imagePara.image+")"}})]})}):null]})}))})]}):Object(m.jsx)("div",{className:"project-screen-404",children:Object(m.jsx)("h1",{children:"404 Not Found"})})]})})};l.a.init({duration:500,easing:"ease-out",once:!0});var D=function(){var e=JSON.parse(localStorage.getItem("DARK_MODE"));null==e&&(e=window.matchMedia("(prefers-color-scheme: dark)").matches);var t=Object(i.useState)(!1),a=Object(r.a)(t,2),n=a[0],s=a[1],c=Object(i.useState)(e),o=Object(r.a)(c,2),l=o[0],p=o[1],g=Object(i.useState)(!1),b=Object(r.a)(g,2),v=b[0],f=b[1],y=Object(i.useState)({id:-1,isOpen:!1}),k=Object(r.a)(y,2),S=k[0],N=k[1],D=d();return Object(i.useEffect)((function(){localStorage.setItem("DARK_MODE",l)}),[l]),Object(m.jsxs)("div",{className:"App","data-theme":l?"dark":"light","data-scroll":S.isOpen?"hidden":null,children:[Object(m.jsx)(j,{}),Object(m.jsx)(h,{text:D?Object(m.jsxs)(m.Fragment,{children:["Web",Object(m.jsx)("br",{}),"Gaming",Object(m.jsx)("br",{}),"Design"]}):"Web | Gaming | Design"}),Object(m.jsx)(x,{}),Object(m.jsx)(P,{isHovering:v,setIsHovering:f,setProjectScreen:N}),Object(m.jsx)(I,{isOpen:n,setIsOpen:s,isDark:l,setIsDark:p}),Object(m.jsx)(w,{isOpen:n,setIsOpen:s}),Object(m.jsx)(O,{isHovering:v,setIsHovering:f}),Object(m.jsx)(C,{projectScreen:S,setProjectScreen:N}),!D&&Object(m.jsx)(u,{isHovering:v})]})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),i(e),n(e),s(e),c(e)}))};c.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root")),T()}},[[20,1,2]]]);
//# sourceMappingURL=main.8dc34229.chunk.js.map