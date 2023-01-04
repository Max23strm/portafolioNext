// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function info (req,res) {
  const informacion={
    about:[
      {
        img:'/../public/assets/about04.png',
        name: "Fullstack Development",
        body:'I am a Full Stack developer with a passion for building functional applications and learning new methodologies.'
      },
      {
        img:'/../public/assets/self.webp',
        name: "Self Taught",
        body:'I’ve spend several years learning and making research on my own. It was a wonderful experience in order to learn to be patient and persistent.'
      },
      {
        img:'/../public/assets/about03.png',
        name: "Certified",
        body:'My certifications show my proficiency in Fullstack and Frontend development. I’m willing to keep on refining my skills.'
      },
    ],
    trabajos:[
      {
        titulo: "Turbine Messaging",
        desc:"App made with Stream API and react. I'ts a chat application",
        link:"https://turbine-messaging.netlify.app/",
        repo:"https://github.com/Max23strm/TrubineMessaging",
        tag:["ReactJs", "Web App"],
        img:'/../public/assets/about04.png',
      },
      {
        titulo: "Perros",
        desc:'Dog app. This application fetches the information from an external API and shows it in the browser',
        link:"https://dulcet-kangaroo-71f905.netlify.app/",
        repo:"https://github.com/Max23strm/Perros",
        tag:["Javascript","Web App", "Responsive"],
        img:'/../public/assets/about04.png',
      },
      {
        titulo: "La Casaca Ecommerce",
        desc:"This is my final project for Coderhouse's ReactJs Course. It uses Firebase and of course ReactJS",
        link:"https://lacasaca-ecommerce.netlify.app/",
        repo:"https://github.com/Max23strm/IdeaOvejak",
        tag:["ReactJs","Web App","Responsive", "NodeJs"],
        img:'/../public/assets/about04.png',
      },
      {
        titulo: "Mole Game",
        desc:"A clasic whack-a-mole game",
        link:"https://max23strm.github.io/mole-game/",
        repo:"https://github.com/Max23strm/mole-game",
        tag:["Javascript","Web App","Responsive"],
        img:'/../public/assets/about04.png',
      },
      {
        titulo: "Pelotitas",
        desc:"This is a page made exclusively for playing with canvas and interactivity",
        link:"https://max23strm.github.io/pelotitas/",
        repo:"https://github.com/Max23strm/pelotitas",
        tag:["Javascript","Web App","Responsive"],
        img:'/../public/assets/about04.png',
      },
      {
        titulo: "Color Generator",
        desc:"Color generator app made with ReactJS",
        link:"https://maximilianoportafolio.netlify.app/suspicious-villani-b905d1.netlify.app/",
        repo:"https://github.com/Max23strm/color-generator",
        tag:["ReactJs","Web App","Responsive"],
        img:'/../public/assets/about04.png',
      },
      {
        titulo: "Henry Videogames",
        desc:"This is the 'individual project' required in the Henry bootcamp to continue to the final stage of the process. I'ts a fullstack app made with ReactJs and NodeJs",
        link:"https://henry-videogames-pink.vercel.app/",
        repo:"https://github.com/Max23strm/HenryVideogames",
        tag:["ReactJs","Web App","Responsive", "Tailwind"],
        img:'/../public/assets/about04.png',
      },
      {
        titulo: "Adopt v2",
        desc:"This project is the second version of an old project of mine, it is made with ReactJs and Tailwind",
        link:"https://henry-videogames-pink.vercel.app/",
        repo:"https://github.com/Max23strm/HenryVideogames",
        tag:["ReactJs","Web App","Responsive", "Tailwind"],
        img:'/../public/assets/about04.png',
      },
      {
        titulo: "Revista Ambigú",
        desc:"Redesign of an old magazine for Grupo Omnios",
        link:"https://revistaambigu.com/",
        repo:null,
        tag:["Wordpress","Web App","Responsive"],
        img:'/../public/assets/about04.png',
      },
      {
        titulo: "Revista Raudal",
        desc:"Redesign of an old magazine for Grupo Omnios",
        link:"https://revistaraudal.com/",
        repo:null,
        tag:["Wordpress","Web App","Responsive"],
        img:'/../public/assets/about04.png',
      },
      {
        titulo: "Revista Margen",
        desc:"Redesign of an old magazine for Grupo Omnios",
        link:"https://revista-margen.com/",
        repo:null,
        tag:["Wordpress","Web App","Responsive"],
        img:'/../public/assets/about04.png',
      },
    ],

    experience : {
      skills: [
        {
          img:'/../public/assets/javascript.png',
          name:'Javascript'
        },
        {
          img:'/../public/assets/react.png',
          name:'ReactJs'
        },
        {
          img:'/../public/assets/redux.png',
          name:'Redux'
        },
        {
          img:'/../public/assets/html.png',
          name:'HTML'
        },
        {
          img:'/../public/assets/css.png',
          name:'CSS'
        },
        {
          img:'/../public/assets/typescript.png',
          name:'Typescript'
        },
        {
          img:'/../public/assets/Node.png',
          name:'NodeJs'
        },
        {
          img:'/../public/assets/Figma.png',
          name:'Figma'
        },
        {
          img:'/../public/assets/Wordpress.png',
          name:'Wordpress'
        },
        {
          img:'/../public/assets/Tailwind.png',
          name:'Tailwind'
        },
        {
          img:'/../public/assets/postgress.png',
          name:'PostgreSQL'
        },
        {
          img:'/../public/assets/git.png',
          name:'Git'
        },
      ],

      exp:[
        {
          year:2022,
          exp:[
            {name:"Web Developer", company:"Grupo Anderson's"},
            {name:"Front End Developer", company:"Kustom Sports"},
            {name:"Fullstack Developer Student", company: "Henry"},
            {name:"Frontend React Developer Student", company:"Coderhouse"},
          ]
        },
        {
          year:2021,
          exp:[
            {name:"Self taught developer", company:"Freelancer"},
            ]
        },
      ]
  }

  }
  res.statusCode= 200
  res.setHeader('Content-type','application/json')
  res.end(JSON.stringify(informacion))

  // res.status(200).json(informacion)
  
}