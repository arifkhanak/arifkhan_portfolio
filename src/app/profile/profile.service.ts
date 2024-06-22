import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects: any = [
    {
      id: 1,
      title: 'Poshan Tracker WebApp Helping make india malnutrition free',
      desc: '',
      livedemo: 'https://www.poshantracker.in/',
      //githurl: 'https://www.instaval.co/',
      mediumlink: 'https://socialwall.poshantracker.in/',
      imgUrl: 'assets/images/poshan-tracker.jpg',
      tech: 'Reactjs, GoogleAPI, JavaScript, Media Query React Bootstrap, HTML5 and CSS3'
    },

    {
      id: 2,
      title: 'Poshan Tracker App is a job-aid to the Anganwadi worker for efficient delivery',
      desc: '',
      livedemo: 'https://play.google.com/store/apps/details?id=com.poshantracker&hl=en_US',
      githurl: 'https://www.instaval.co/',
      mediumlink: 'https://socialwall.poshantracker.in/',
      imgUrl: 'assets/images/poshan-tracker-app.jpg',
      tech: 'React Native, React Native UI Library, NPM and Chart Js'
    },


    {
      id: 3,
      title: 'InstaVal | Data Driven Investment Readiness Platform  ',
      desc: '',
      livedemo: 'https://www.instaval.co/',
      githurl: 'https://www.instaval.co/',
      mediumlink: 'https://www.instaval.co/press',
      imgUrl: 'assets/images/instaval.jpg',
      tech: 'Angular 14, Chart Js, Angular Material, Angular Bootstrap, Bootstrap5, HTML5 and CSS3'
    },

    {
      id: 4,
      title: 'Thumbstack Technologies Software Development Company',
      desc: '',
      livedemo: 'https://thumbstack.in/',
      githurl: 'https://thumbstack.in/',
      mediumlink: 'https://thumbstack.in/about-us/',
      imgUrl: 'assets/images/thumbstack.jpg',
      tech: 'Angular, ASP.NET(MVC), Bootstrap, Jquery, Media Query, HTML5 and CSS3'
    },

    {
      id: 5,
      title: 'Indu Enterprises Construction Based Application',
      desc: '',
      livedemo: 'https://induenterprise.com/',
      githurl: 'https://induenterprise.com/',
      mediumlink: 'https://induenterprise.com/',
      imgUrl: 'assets/images/indu.jpg',
      tech: 'ASP.NET(MVC), Web API, Bootstrap, Jquery, Media Query, HTML5 and CSS3'
    },

    {
      id: 11,
      title: 'Personal Portfolio To Showcase The Work',
      desc: '',
      livedemo: 'http://localhost:4200/#about',
      githurl: 'http://localhost:4200/#about',
      mediumlink: 'http://localhost:4200/#about',
      imgUrl: 'assets/images/arif-p-home.jpg',
      tech: 'Angular 14 ,Angular Bootstrap, Media Query, HTML5 and CSS3'
    },

    // {
    //   id: 8,
    //   title: 'COVID 19 Tracker (Statistics) app Using Angularr',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/COVOID-19/',
    //   githurl: 'https://github.com/mehulk05/COVOID-19',
    //   mediumlink: 'https://codeburst.io/covoid-19-tracker-statistics-app-using-angular-2358347b3d1f',
    //   imgUrl: 'assets/images/z2.png',
    //   tech: 'Angular 10 ,Bootstrap,Javascript'
    // },

    // {
    //   id: 6,
    //   title: 'News App using ReactJS (Parsing XML to JSON)',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/NewsApp-using-React',
    //   githurl: 'https://github.com/mehulk05/NewsApp-using-React',
    //   mediumlink: 'https://codeburst.io/news-app-using-reactjs-f9752d7ab6ce',
    //   imgUrl: 'assets/images/z24.png',
    //   tech: 'React JS, XMl to JSON'
    // },



    // {
    //   id: 7,
    //   title: 'Medium-Like Blog App Using Angular 9 and Firebase',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/Blog-Book/',
    //   githurl: 'https://github.com/mehulk05/Blog-Book',
    //   mediumlink: 'https://codeburst.io/blogging-app-using-angular-9-and-firebase-98e36168d850',
    //   imgUrl: 'assets/images/z21.png',
    //   tech: 'HTML, Bootstrap, CSS, Angular-9, Firebase'
    // },






    // {
    //   id: 9,
    //   title: 'Weather App with React',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/React-Weather/',
    //   githurl: 'https://github.com/mehulk05/React-Weather-App',
    //   mediumlink: 'https://medium.com/analytics-vidhya/weather-app-with-react-adaa7268bbdb',
    //   imgUrl: 'assets/images/z9.png',
    //   tech: 'React, Open MAp Api'
    // },


    // {
    //   id: 10,
    //   title: 'Spring Boot + Angular 8 CRUD Example',
    //   desc: '',
    //   livedemo: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
    //   githurl: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
    //   mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
    //   imgUrl: 'assets/images/z28.png',
    //   tech: 'Angular8, Java ,Hibernate'
    // },


    // {
    //   id: 11,
    //   title: 'Personal Portfolio Using Angular',
    //   desc: '',
    //   livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
    //   githurl: 'https://github.com/mehulk05/Personal-Portfolio-Angular-Updated',
    //   mediumlink: 'https://javascript.plainenglish.io/personal-portfolio-using-angular-8-and-bootstrap-5dde6fc7cf9b',
    //   imgUrl: 'assets/images/z11.png',
    //   tech: 'Angular ,Bootstrap'
    // },


    // {
    //   id: 12,
    //   title: 'Personal Portfolio Using Django',
    //   desc: '',
    //   livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
    //   githurl: 'https://github.com/mehulk05/My-Personal-Portfolio',
    //   mediumlink: 'https://mehulkothari05.medium.com/personal-portfolio-using-django-dba49c355905',
    //   imgUrl: 'assets/images/z12.png',
    //   tech: 'Django'
    // },

    // {
    //   id: 13,
    //   title: 'Movie Success Prediction',
    //   desc: '',
    //   livedemo: 'https://mehulkothari05.medium.com/',
    //   githurl: 'https://github.com/mehulk05',
    //   mediumlink: 'https://mehulkothari05.medium.com/movie-success-prediction-a67d871a7b1',
    //   imgUrl: 'assets/images/z13.png',
    //   tech: 'Python, Machine Learning, Django Framework.'
    // },

    // {
    //   id: 14,
    //   title: 'Matrimonial Website',
    //   desc: '',
    //   livedemo: 'https://mehulkothari05.medium.com/',
    //   githurl: 'https://github.com/mehulk05/Matrimonial-Website.git',
    //   mediumlink: 'https://mehulkothari05.medium.com/matrimonial-website-9cd5247f477d',
    //   imgUrl: 'assets/images/z14.png',
    //   tech: 'HTML, CSS, Bootstrap, Jquery'
    // },

  ]
  about2 = `Senior Angular UI Developer with 7+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 2+ All versions, React, Javascript,  Node JS and UI with Responsive Designs .
  Have good understanding of Python, Jquery, Bootstrap, MongoDB, Firebase, and MYSQL`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://docs.google.com/document/d/1WODFuhIzQw2AXPsjt6f3rs-EDWhdhT8s89fOTrGRh70/edit?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 1.X AND ANGULAR 2+',
      'progress': '95%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT, JQUERY AND CHARTJS',
      'progress': '90%'
    },

    {
      'id': '8',
      'skill': 'HMTL5, BOOTSTRAP4 AND CSS3',
      'progress': '95%'
    },
    {
      'id': '7',
      'skill': 'REACT JS',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'REACT NATIVE',
      'progress': '70%'
    },

    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '70%'
    },
    {
      'id': '4',
      'skill': 'SQL , MYSQL, MONOGO DB, FIREBASE',
      'progress': '70%'
    },

    {
      'id': '6',
      'skill': 'JAVA , CORE JAVA , JSP AND SERVLET',
      'progress': '70%'
    }
    ,

    {
      'id': '6',
      'skill': 'FIGMA AND BALSAMIQ',
      'progress': '75%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2015 - 2019',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.
Won the Best Student Award 3 times for excellent Academic records at College.
Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`
    }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'Trigyn Technologies',
      location: 'Mumbai MIDC',
      timeline: 'Aug 2021 to Present',
      role: 'Senior Technical Analyst',
      work: `Technologies : Reactjs, React-Native, Angular11, Bootstrap, JQuery, JavaScript, SQL, HTML5 & CSS3 .
      1. The 'Poshan Tracker' is a mobile based application rolled out by the Ministry of Women and Child Development, Government of India on 1st March 2021 through National e-Governance Division .
      2. Optimizing web pages and Mobile App for maximum speed and scalability .
      3. Developed new user-facing features .
      4. Poshan Tracker is an important governance tool. Technology under Poshan Tracker is being leveraged for dynamic identification of stunting, wasting, under-weight prevalence .
      5. Contributed on developing the Admin Dashboard with different charts and insights for the application.`
    },
    {
      id: 3,
      company: 'InstaVal',
      location: 'Dubai - DIFC Fintech Hive',
      timeline: 'Aug 2020 - Aug 2021',
      role: 'Senior AngularFrontend Web Developer',
      work: `Technologies : Bootstrap, Angular, JavaScript, JQuery, SQL, HTML5 & CSS3 .
      1. Developed features to enhance the user experience .
      2. Optimizing web pages for maximum speed and scalability .
      3. Developed new user-facing features .
      4. Collaborate with other team members and stakeholders .
      5. Contributed on developing the admin dashboard with different charts and insights for the application.`
    },
    //   {
    //     id: 2,
    //     company: 'Growth99',
    //     location: 'Remote',
    //     timeline: '',
    //     role: 'Frontend  Developer',
    //     work: `Technologies : Angular , Node JS , MongoDB .
    // Worked on the product of Growth99 which allowed other clients to come and integrate our product in their website .
    // Worked on REST Api , Admin Dashboard , Appointment Booking for services and UI of the application .
    // Created sections like templates for email, sms, landing pages, clinic, services, providers and triggers Automation.
    // `
    //   },

    {
      id: 1,
      company: 'ThumbStack Technologies',
      location: 'Mumbai Area, India',
      timeline: 'Sep 2016 - Feb 2021 · 4 yrs 6 mos',
      role: 'Software Developer',
      work: `Technologies : ASP.NET(MVC & WebAPI), Bootstrap, Angular, JavaScript, Wordpress,JQuery, SQL, HTML5 & CSS3 .
  Project 1 : Worked on building CRM Application (Full Stack Development) ( ASP.NET(MVC & WebAPI), Angular , Bootstrap) .

  Project 2 : Worked on Mobile application based on Ioinc, Cordova and Angular11 .

  Maintenance and feature updates of CRM Application Portal .
  Interacting with client for requirements, testing, feature suggestions and guiding product path .
  Collaborating with team and assisting Junior Developers to deliver awesome products.
  `
    },


  ]

  extraCircularInfo: any = [
    // {
    //   id:1,
    //   title: 'Blogger',
    //   description: '',
    //   img: 'assets/images/Mehul Kothari – Medium1.png',
    //   url: 'https://mehulkothari05.medium.com/'
    // },
    {
      id: 1,
      title: 'Github',
      description: '',
      img: 'assets/images/arifkhan_github.jpg',
      url: 'https://github.com/arifkhanak'
    },
    // {
    //   id:1,
    //   title: 'Freelancing',
    //   description: '',
    //   img: 'assets/images/mehul_freelancing.png',
    //   url: 'https://www.upwork.com/freelancers/~016d6f497a5629df4b'
    // },
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
