// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function info (req,res) {
  const informacion={
    about:[
      {
        img:'/assets/about04.png',
        name: "Fullstack Development",
        body:'I am a Full Stack developer with a passion for building functional applications and learning new methodologies.'
      },
      {
        img:'/assets/self.webp',
        name: "Self Taught",
        body:'I’ve spend several years learning and making research on my own. It was a wonderful experience in order to learn to be patient and persistent.'
      },
      {
        img:'/assets/about03.png',
        name: "Certified",
        body:'My certifications show my proficiency in Fullstack and Frontend development. I’m willing to keep on refining my skills.'
      },
    ],
    trabajos:[
      {
        titulo: "Grupo Anderson's NFL Calendar",
        desc:"NFL calendar for the company's restaurants",
        link:"https://grupoandersons.com/nfl/",
        repo:'https://github.com/Max23strm/AndersonsCalendar',
        tag:["React","Web App","Responsive"],
        img:'/assets/calendar.png',
      },
      {
        titulo: "Revista Ambigú",
        desc:"Redesign of an old magazine for Grupo Omnios",
        link:"https://revistaambigu.com/",
        repo:null,
        tag:["Wordpress","Web App","Responsive"],
        img:'/assets/ambigu.png',
      },
      {
        titulo: "Revista Raudal",
        desc:"Redesign of an old magazine for Grupo Omnios",
        link:"https://revistaraudal.com/",
        repo:null,
        tag:["Wordpress","Web App","Responsive"],
        img:'/assets/raudal.png',
      },
      {
        titulo: "Revista Margen",
        desc:"Redesign of an old magazine for Grupo Omnios",
        link:"https://revista-margen.com/",
        repo:null,
        tag:["Wordpress","Web App","Responsive"],
        img:'/assets/margen.png',
      },
      {
        titulo: "Kustom Sports ",
        desc:"Final project for Henry's bootcamp. We used Tailwind, React, ExpressJS and other technologies. Hosted in Heroku",
        link:"https://kustoms-sports.vercel.app/",
        repo:"https://github.com/Kustoms-Sports/kustoms-sports",
        tag:["ReactJS","Tailwind","Web App","Responsive"],
        img:'/assets/Kustoms.png',
      },
      {
        titulo: "Turbine Messaging",
        desc:"App made with Stream API and react. I'ts a chat application",
        link:"https://turbine-messaging.netlify.app/",
        repo:"https://github.com/Max23strm/TrubineMessaging",
        tag:["ReactJs", "Web App"],
        img:'/assets/Turbine.png',
      },
      {
        titulo: "La Casaca Ecommerce",
        desc:"This is my final project for Coderhouse's ReactJs Course. It uses Firebase and of course ReactJS",
        link:"https://lacasaca-ecommerce.netlify.app/",
        repo:"https://github.com/Max23strm/IdeaOvejak",
        tag:["ReactJs","Web App","Responsive", "NodeJs"],
        img:'/assets/laCasaca.png',
      },
      {
        titulo: "Perros",
        desc:'Dog app. This application fetches the information from an external API and shows it in the browser',
        link:"https://dulcet-kangaroo-71f905.netlify.app/",
        repo:"https://github.com/Max23strm/Perros",
        tag:["Javascript","Web App", "Responsive"],
        img:'/assets/Visor.png',
      },
      {
        titulo: "Mole Game",
        desc:"A clasic whack-a-mole game",
        link:"https://max23strm.github.io/mole-game/",
        repo:"https://github.com/Max23strm/mole-game",
        tag:["Javascript","Web App","Responsive"],
        img:'/assets/mole.png',
      },
      {
        titulo: "Pelotitas",
        desc:"This is a page made exclusively for playing with canvas and interactivity",
        link:"https://max23strm.github.io/pelotitas/",
        repo:"https://github.com/Max23strm/pelotitas",
        tag:["Javascript","Web App","Responsive"],
        img:'/assets/pelotitas.png',
      },
      {
        titulo: "Color Generator",
        desc:"Color generator app made with ReactJS",
        link:"https://maximilianoportafolio.netlify.app/suspicious-villani-b905d1.netlify.app/",
        repo:"https://github.com/Max23strm/color-generator",
        tag:["ReactJs","Web App","Responsive"],
        img:'/assets/color.png',
      },
      {
        titulo: "Henry Videogames",
        desc:"This is the 'individual project' required in the Henry bootcamp to continue to the final stage of the process. I'ts a fullstack app made with ReactJs and NodeJs",
        link:"https://henry-videogames-pink.vercel.app/",
        repo:"https://github.com/Max23strm/HenryVideogames",
        tag:["ReactJs","Web App","Responsive", "Tailwind"],
        img:'/assets/henryVid.png',
      },
      {
        titulo: "Adopt v2",
        desc:"This project is the second version of an old project of mine, it is made with ReactJs and Tailwind",
        link:"https://henry-videogames-pink.vercel.app/",
        repo:"https://github.com/Max23strm/HenryVideogames",
        tag:["ReactJs","Web App","Responsive", "Tailwind"],
        img:'/assets/perros.png',
      },
      
    ],

    experience : {
      skills: [
        {
          img:'/assets/next-js.png',
          name:'NextJs'
        },
        {
          img:'/assets/javascript.png',
          name:'Javascript'
        },
        {
          img:'/assets/react.png',
          name:'ReactJs'
        },
        {
          img:'/assets/redux.png',
          name:'Redux'
        },
        {
          img:'/assets/html.png',
          name:'HTML'
        },
        {
          img:'/assets/css.png',
          name:'CSS'
        },
        {
          img:'/assets/typescript.png',
          name:'Typescript'
        },
        {
          img:'/assets/Node.png',
          name:'NodeJs'
        },
        {
          img:'/assets/Figma.png',
          name:'Figma'
        },
        {
          img:'/assets/Wordpress.png',
          name:'Wordpress'
        },
        {
          img:'/assets/Tailwind.png',
          name:'Tailwind'
        },
        {
          img:'/assets/postgress.png',
          name:'PostgreSQL'
        },
        {
          img:'/assets/git.png',
          name:'Git'
        },
      ],

      exp:[
        {
          year:2023,
          exp:[
            {name:"React Developer", company:"GA Tech Solutions LTD"}
          ]
        },
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