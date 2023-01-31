// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const projects = [
  {
      num: 1,
      title: "Break Trips",
      description: "A multi language app for booking hotel rooms and trips around Egypt, rent cars, and book one-day-trips for popular attractions. The application built using React.js, Next.js, and MongoDB. The app has an admin panel with different levels of authorization that allows level two admins to creat, read, update, and delete all different types of data; list orders and edit them, change their account information, and the same for level one admins plus creating and deleting users and monitoring revenue and profit.",
      url: "https://www.break-trips.com",
      gitHub: "https://github.com",
      image: [
          "https://res.cloudinary.com/dqmqc0uaa/image/upload/v1673983264/uploads/Group_1087_zgwyr3.webp"
      ]
  },
  {
      num: 2,
      title: "Roco",
      description: "Roco is a full-stack e-Commerce application for selling clothes. Built using the MERN stack with React.js for the front-end alongside Redux.js for state management. Node.js server with Express.js, and a MongoDB database.",
      url: "https://kareemabbas1.github.io/e-commerce-template/",
      gitHub: "https://github.com/KareemAbbas1/egy-tech-mern",
      image: [
          "https://res.cloudinary.com/dqmqc0uaa/image/upload/v1675159894/uploads/Web_capture_31-1-2023_105542_127.0.0.1_ih5fke.webp",
          "https://res.cloudinary.com/dqmqc0uaa/image/upload/v1675159890/uploads/Web_capture_31-1-2023_105653_127.0.0.1_hyddyu.webp",
          "https://res.cloudinary.com/dqmqc0uaa/image/upload/v1675159887/uploads/Web_capture_31-1-2023_111135_127.0.0.1_bikupi.webp",
          "https://res.cloudinary.com/dqmqc0uaa/image/upload/v1675159883/uploads/Web_capture_31-1-2023_111155_127.0.0.1_vyvd4b.webp",
          "https://res.cloudinary.com/dqmqc0uaa/image/upload/v1675159882/uploads/Web_capture_31-1-2023_11125_127.0.0.1_hetwla.webp"
      ]
  },
  {
      num: 3,
      title: "InstaWeather",
      description: "A weather application that displays the current temperature with 24 hours cast, and daily temperature with seven days cast based on the user's location. The temperature can be displayed in both Fahrenheit and Celsius scales.",
      url: "https://kareemabbas1.github.io/instaWeather-app/",
      gitHub: "https://github.com/KareemAbbas1/instaWeather-app",
      image: [
          "https://res.cloudinary.com/dqmqc0uaa/image/upload/v1673992358/uploads/Annotation_2023-01-17_235207_hsjjhu.webp",
          "https://res.cloudinary.com/dqmqc0uaa/image/upload/v1673992504/uploads/Annotation_2023-01-17_235341_hemfpe.webp",
          "https://res.cloudinary.com/dqmqc0uaa/image/upload/v1673992494/uploads/Annotation_2023-01-17_235323_sktb3f.webp",
          "https://res.cloudinary.com/dqmqc0uaa/image/upload/v1673992508/uploads/Annotation_2023-01-17_235357_sc7itc.webp"
      ]
  },
  {
    num: 4,
    title: "My Reads",
    description: "A book tracking app that tracks the books read by the user and categorize them into three shelves: Currently Reading, Want to Read, Read. Also, the user can search for new books and add them to the prefered shelf.",
    url: "https://kareemabbas1.github.io/myreads-udacity/#/",
    gitHub: "https://github.com/KareemAbbas1/myreads-udacity",
    image: ["https://res.cloudinary.com/dqmqc0uaa/image/upload/c_scale,w_1285/v1674586615/uploads/Annotation_2023-01-24_205344_qtzdds.webp"]
  },
]
export default function handler(req, res) {
  res.status(200).json(projects)
}
