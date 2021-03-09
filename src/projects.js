const projects = [
    {
        id: "1",
        name: "Holidays",
        title: "Full Stack Application",
        technology: "Nodejs, Express, MongoDB, PUG",
        imageURL: "./holidays-2.gif",
        summary: "This is javascript full stack server side rendered application. ExpressJS, MongoDB, JWT based authentication, PUG and other node based libarary are implemented",
        button: {
            text: "CHECK LIVE",
            postmanText: "API WITH POSTMAN",
            liveURL: "https://holiday-adventure.herokuapp.com/",
            postmanURL: "https://documenter.getpostman.com/view/4087771/Tz5jdzYg",
            githubURL: "https://github.com/jay-web/holidays"
        },
        showAPI: true,
        showCode: true
    },
    {
        id: "2",
        name: "Prism- The world of colors",
        title: "React Application",
        technology: "React JS, Chroma-js, Material-UI",
        imageURL: "./prism.gif",
        summary: "Prism is reactjs based front end application. Chroma-js and Material-UI are also integrated to generate color palettes and application UI. User can use already generated color palettes or can generate new palette according to requirement.",
        button: {
            text: "CHECK LIVE",
            postmanText: "API WITH POSTMAN",
            liveURL: "https://jay-web.github.io/prism/",
            postmanURL: "",
            githubURL: "https://github.com/jay-web/prism"
        },
        showAPI: false,
        showCode: true
    },
    
    {
        id: "3",
        name: "Tasks",
        title: "React Application",
        technology: "React JS",
        imageURL: "./tasks.png",
        summary: "Task is the react based front end web application. New react features are implemented like react hooks (useState, useEffect, useContext etc..). User can create, edit or delete daily tasks as a todo list. ",
        button: {
            text: "CHECK LIVE",
            postmanText: "API WITH POSTMAN",
            liveURL: "https://jay-web.github.io/taskmanager",
            postmanURL: "",
            githubURL: "https://github.com/jay-web/taskmanager"
        },
        showAPI: false,
        showCode: true
    },
    {
        id: "4",
        name: "Bitcoin tracker",
        title: "Javascript Application",
        technology: "Javascript, HTML, CSS",
        imageURL: "./bitcoins.gif",
        summary: "Live Bitcoin is web app to fetch the price unit of bitcoin using the Bitcoin API. Multiple methods has been displayed to fetch the data i.e XHRHttpRequest Method of vanilla javascript, jQuery method and Fetch API.",
        button: {
            text: "CHECK LIVE",
            postmanText: "API WITH POSTMAN",
            liveURL: "https://jay-web.github.io/Live-Bitcoin/",
            postmanURL: "",
            githubURL: "https://github.com/jay-web/Live-Bitcoin"
        },
        showAPI: false,
        showCode: true
    },
    {
        id: "5",
        name: "Single Page Theme",
        title: "Bootstrap Application",
        technology: "Bootstrap Framework",
        imageURL: "./looplab.gif",
        summary: "UI theme which is based on bootstrap framework. Its has completely responsive layout. Easily access on desktop, mini screens as well mobile screens",
        button: {
            text: "CHECK LIVE",
            postmanText: "API WITH POSTMAN",
            liveURL: "https://jay-web.github.io/",
            postmanURL: "",
            githubURL:"https://github.com/jay-web/jay-web.github.io"
        },
        showAPI: false,
        showCode: true
    },
    {
        id: "6",
        name: "Maze Canvas",
        title: "Javascript Canvas Game",
        technology: "Matter.js, HTML, CSS, Javascript",
        imageURL: "./maze.gif",
        summary: "This is amazing classic maze game where we need to find the path to reach the target. Its written in native javascript and Matter.js libarary to work on HTML canvas",
        button: {
            text: "CHECK LIVE",
            postmanText: "API WITH POSTMAN",
            liveURL: "https://jay-web.github.io/maze-canvas/",
            postmanURL: "",
            githubURL: "https://github.com/jay-web/maze-canvas"
        },
        showAPI: false,
        showCode: true
    }
]

export default projects;