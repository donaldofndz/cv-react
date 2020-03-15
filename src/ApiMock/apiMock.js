class apiMock {
  getBasicData() {
    return {
      name: "José Donaldo Fernández Montenegro",
      studies: [
        {
          nameOfSchool: "UDLA",
          country: "MX",
          completeNameOfSchool: "Universidad de las Americas",
          grade: "Master In Business Administration"
        },
        {
          nameOfSchool: "UNAM",
          country: "MX",
          completeNameOfSchool: "Universidad Nacional Autonoma de México",
          grade: "Computer Engineer"
        }
      ],
      extraInfo: {
        "Email": "donaldo.fndz@gmail.com",
        "Phone Number": "+52 (55) 48-90-58-31",
        "GitHub": "https://github.com/donaldofndz"
      }
    };
  }

  getStudiesData() {
    return {
      section: "Education",
      data: [
        {
          univesityName: "Universidad de las Americas",
          shortName: "UDLA",
          grade: "Master in Business Administration (MBA)",
          graduationDate: "June 2019",
          ID: ""
        },
        {
          univesityName: "Universidad de las Americas",
          shortName: "UDLA",
          grade: "Advance Administracion Specialist",
          graduationDate: "June 2019",
          ID: "11616311"
        },
        {
          univesityName: "Universidad Nacional Autónoma de México",
          shortName: "UNAM",
          graduationDate: "December 2017",
          grade: "Computer Engineer",
          ID: "11499643"
        }
      ]
    }
  }

  getWorkExperience() {
    return {
      section: "Work Experience",
      data: [
        {
          company: "GLOBANT",
          job: "Web UI Developer",
          data: [
            {
              company: "TicketMaster Project",
              job: "Web Developer",
              data: "In this project I am working as a Front-end developer creating new tools for TicketMaster core business administration, for this project my tasks requires the use of JS and different framework such as React, Mobx, etc.",
              techonologies: ["JS", "Java", "React", "Mobx", "Jess", "CSS", "SASS"],
            },
            {
              company: "TicketWeb Project",
              job: "Web Developer",
              data: "During my first project at globant I worked on a TicketWeb project, this was about doing improvements on their platform for selling tickets and administer all the business, my main task was the Front-end development, Java development of the backend and the design of user interfaces.",
              techonologies: ["Java", "SQL", "Scala", "JS", "NodeJS"]
            },
          ],
          techonologies: [],
        },
        {
          company: "IVESCO",
          job: "Web Developer",
          data: "This project was about making a full administration system regarding to the whole business of the company. During this project my main task was to develop an API for the communication between the backend and the frontend, for this purpose I used tools such as Node JS, MongoDB and skills of front-end development",
          techonologies: ["NodeJS", "SailsJS", "MongoDB", "Python"]
        },
        {
          company: "UNAM",
          job: "Instructor for Programming Courses at PROTECO",
          data: "I was the main instructor for courses that taught people with diverse backgrounds how to build websites using popular tools and languages such as HTML, CSS, Javascript, Python, PHP and SQL",
          techonologies: ["HTML", "CSS", "JS", "Python", "PHP", "SQL"]
        },
      ]
    }
  }

  getResearchProjects() {
    return {
      section: "Research Projects",
      data: [{
        title: "Institute of Engineering UNAM",
        data: "I was an undergraduate research assistant for a project focused on helping people to collaborate and better administrate energy, specifically power plants. \n I designed and developed an online system that collected, interpreted and provided data visualizations of a hydroelectric power plant. I implemented the front-end, back-end and also optimized the existing database using Data Quality and KDD.",
        techonologies: ["Research"],
      }]
    }
  }

  getCertifiedCourses() {
    return {
      section: "Certified Courses",
      data: [{
        title: "Cisco Certified Network Associate Routing and Switching",
        data: "Training Courses in Network Fundamentals, Routing Protocols, LAN Switching and Wireless, Accessing the WAN, 2016-2017",
        techonologies: []
      },
      {
        title: "PROTECO UNAM (prestigious programming school in LATAM.)",
        data: "Finished training courses in GNU Linux, Computer Networks, C language for UNIX, Relational Databases, Object Oriented Programming with Java, 2015-2017",
        techonologies: []
      }]
    }
  }

  getTechSkills() {
    return {
      section: "Technology Skills",
      data: [
        {
          title: "Programming Lenguages",
          data: "",
          techonologies: ["C", "HTML5", "CSS3", "JavaScript", "NodeJS", "Python", "PHP", "Java", "SQL", "Scala"]
        },
        {
          title: "Databases",
          data: "",
          techonologies: ["Oracle", "MysQL", "MongoDB"]
        },
        {
          title: "Frameworks",
          data: "",
          techonologies: ["React", "Angular", "AngularJS", "Bootstrap", "Materialize", "JQuery", "CodeIgniter", "Material UI", "Skeleton", "AKKA", "Spring"]
        },
        {
          title: "Version Control",
          data: "",
          techonologies: ["Git", "GitLab"]
        },
        {
          title: "Methodologies",
          data: "",
          techonologies: ["SCRUM", "KANBAN"]
        }
      ]
    }
  }

  getLenguage() {
    return {
      section: "Lenguages",
      data: [
        {
          title: "",
          data: "Spanish (native), English (advanced)",
          techonologies: []
        }
      ]
    }
  }

  getFooterLinks(){
    return{
      links: {
        "GitHub" : "https://github.com/donaldofndz",
        "LinkedIn" : "https://www.linkedin.com/in/donaldo-fernandez/",
        "HackerRank" : "https://www.hackerrank.com/donaldo_fndz?hr_r=1",
        "CodeSignal" : "https://app.codesignal.com/profile/jose_f20"
      }
    }
  }

  getFooterContacts(){
    return{
      links: {
        "donaldo.fndz@gmail.com"  : "mailto:donaldo.fndz@gmail.com",
        "+52 (55) 48-90-58-31" : "tel:+525548905831"
      }
    }
  }

}

export default apiMock;
