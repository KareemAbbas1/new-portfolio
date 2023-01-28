const skills = [
    {
        skill: "HTML5",
        proficiency: "90%"
    },
    {
        skill: "CSS3",
        proficiency: "90%"
    },
    {
        skill: "JavaScript(ES6)",
        proficiency: "80%"
    },
    {
        skill: "React.js",
        proficiency: "80%"
    },
    {
        skill: "Redux.js",
        proficiency: "70%"
    },
    {
        skill: "Styled Components",
        proficiency: "90%"
    },
    {
        skill: "Bootstrap",
        proficiency: "70%"
    },
    {
        skill: "Node.js",
        proficiency: "75%"
    },
    {
        skill: "Express.js",
        proficiency: "70%"
    },
    {
        skill: "MongoDB",
        proficiency: "70%"
    },
    {
        skill: "Next.js",
        proficiency: "75%"
    },
    {
        skill: "Mongoose",
        proficiency: "70%"
    },
    {
        skill: "WebPack",
        proficiency: "30%"
    },
    {
        skill: "Saas",
        proficiency: "30%"
    },
    {
        skill: "Figma",
        proficiency: "90%"
    }
]


export default function handler(req, res) {
    res.status(200).json(skills);
}