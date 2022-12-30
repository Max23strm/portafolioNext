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
    ]
  }
  res.statusCode= 200
  res.setHeader('Content-type','application/json')
  res.end(JSON.stringify(informacion))

  // res.status(200).json(informacion)
  
}