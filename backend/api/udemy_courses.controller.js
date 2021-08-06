import UCoursesDAO from "../dao/udemyCoursesDAO.js"

/* All the Data Manipulation takes place here */

export default class ProjectsController {
    static async apiGetUCourses(req, res) {
        const courses_for_date = req.params.date
        try{
            const coursesList = await UCoursesDAO.getCourses(courses_for_date)
            res.json(coursesList)
        }
        catch(err){
            console.log(`[udemy_courses.controller][apiGetUCourses] Error: ${err}`)
        }
    }

    static async apiAddUCourses(req, res) {
        const courses_to_be_added = [{"title": "Javascript For Beginners Complete Course", "link": "https://www.udemy.com/course/javascript-for-beginners-complete-course/?couponCode=DISCUDEMY.COM", "headline": "Learn Javascript Programming Language With Practical Interaction", "creator": "Vivek Dahibhate", "rating": "4.4"}, {"title": "Learn Machine learning & AI (Including Hands-on 3 Projects)", "link": "https://www.udemy.com/course/machine-learning-and-ai-with-hands-on-projects/?couponCode=FREEAUG2", "headline": "Get well versed with Machine learning and AI by working on Hands-on Projects.", "creator": "EdYoda Digital University", "rating": "4.2"}, {"title": "Building Android Widgets from Scratch ( Learn 8 Widgets)", "link": "https://www.udemy.com/course/learn-to-build-8-android-widgets-in-2-hours/?couponCode=FREEAUG2", "headline": "Build 8 fully functional widgets for Android devices - Right from Scratch in just 2 hours", "creator": "EdYoda Digital University, Qaifi Khan", "rating": "4.3"}, {"title": "AWS Services for Solutions Architect Associate [2021]", "link": "https://www.udemy.com/course/aws-services-for-solutions-architect-associates-course/?couponCode=FREEAUG2", "headline": "The best guide for various AWS certifications such as AWS Solutions Architect, AWS SysOps and AWS Developer Associates", "creator": "EdYoda Digital University, Ashish Pandey", "rating": "4.4"}, {"title": "DevOps Fundamentals", "link": "https://www.udemy.com/course/devops-fundamentals-for-beginners/?couponCode=FREEAUG2", "headline": "The simplest course to learn the fundamentals of DevOps right from scratch", "creator": "EdYoda Digital University, Ashish Pandey", "rating": "3.8"}, {"title": "Angular 12, Python Django and MySQL Full-Stack App", "link": "https://www.udemy.com/course/angular-12-python-django-and-mysql-full-stack-app/?couponCode=80FEB6BF59A86F0398BD", "headline": "learn to create a full stack web application from scratch using Angular 12, Python Django and MySQL", "creator": "Vinay Kumar", "rating": "3.5"}, {"title": "EF Core 5 With Code First And Db First [In-depth in 7 Days]", "link": "https://www.udemy.com/course/ef-core-5-with-code-first-and-db-first-in-depth-in-7-days/?couponCode=F27B2C9C7F4711457F01", "headline": "100% guarantee of simplicity in all the concepts with less theory and huge amount of practical real-world examples", "creator": "Manzoor Ahmed", "rating": "0.0"}, {"title": "Linux Operating System with Shell from Scratch for Beginners", "link": "https://www.udemy.com/course/linux-operating-system-with-shell-from-scratch-for-beginners/?couponCode=5C0921995EB397A8552C", "headline": "Learn the Linux Command Line from Scratch and hound your Skills towards becoming a Master", "creator": "Ankush Choudhary", "rating": "0.0"}, {"title": "ManageEngine OpManager+ Course | Network Monitoring/Full Lab", "link": "https://www.udemy.com/course/manageengine-opmanager-course-network-monitoring/?couponCode=CC7F0EAE927A4499323C", "headline": "OpManager Plus course | Monitoring Network Devices, Servers & Applications | GNS3 Lab Cisco, FortiGate, Sophos, Mikrotik", "creator": "Yaz Becker", "rating": "4.9"}, {"title": "Learn Elementor & WordPress, for Startups & Performers", "link": "https://www.udemy.com/course/beginner-to-expert-learn-elementor-wordpress/?couponCode=3-DAY-AUGUST-3", "headline": "Master WordPress and Elementor, from beginner to expert with free plugins and themes with this hands-on course", "creator": "Nathan Minns", "rating": "5.0"}, {"title": "Azure Cosmos DB - NoSQL DB For Busy .Net Developers", "link": "https://www.udemy.com/course/azure-cosmos-db-nosql-db-for-busy-net-developers/?couponCode=C8A50168D0097148B892", "headline": "Azure Cosmos DB \u2013 Non-Relational Database | Microsoft Azure", "creator": "Jaleel Ahmed, Manzoor Ahmed", "rating": "0.0"}, {"title": "Bootstrap 4 Ultimate Course", "link": "https://www.udemy.com/course/learn-advanced-bootstrap-4/?couponCode=TRY10FREE82102", "headline": "Everything you need to know to Build a 4 Web Page Website with Bootstrap 4", "creator": "Learn Tech Plus", "rating": "4.2"}, {"title": "CSS3 Ultimate Course", "link": "https://www.udemy.com/course/the-complete-css-course/?couponCode=TRY10FREE82102", "headline": "CSS3 For Web Development: Quickly Master CSS3 By Building A Project From Scratch", "creator": "Learn Tech Plus", "rating": "4.2"}, {"title": "Hacking \u00c9tico desde Dispositivos Android", "link": "https://www.udemy.com/course/hacking-etico-desde-dispositivos-android/?couponCode=63C6FF669F6F21E455F3", "headline": "Aprende Hacking \u00c9tico y realiza ataques desde tu dispositivo m\u00f3vil Android", "creator": "Thiago Araujo", "rating": "0.0"}, {"title": "Adobe After Effects 2021 Ultimate Course", "link": "https://www.udemy.com/course/adobe-after-effects-cc-2020/?couponCode=TRY10FREE82102", "headline": "Everything you need to know about Adobe After Effects 2021", "creator": "Learn Tech Plus", "rating": "4.1"}, {"title": "Adobe Premiere Pro 2021 Ultimate Course", "link": "https://www.udemy.com/course/adobe-premiere-pro-cc-2020/?couponCode=TRY10FREE82102", "headline": "Everything you need to know about Adobe Premiere Pro 2021", "creator": "Learn Tech Plus", "rating": "4.2"}, {"title": "React Redux Toolkit complete guide", "link": "https://www.udemy.com/course/react-redux-toolkit-complete-guide/?couponCode=INOVOLAUNCH2021", "headline": "Take your state management skills in react into another level by using redux toolkit than traditional redux", "creator": "iNovotek Academy", "rating": "3.9"}, {"title": "Programming Network Applications in Java", "link": "https://www.udemy.com/course/programming-network-applications-in-java/?couponCode=AUGUST21FREE", "headline": "TCP and UDP sockets in Java", "creator": "Cyber Quince", "rating": "4.6"}, {"title": "Python For Beginners Course In-Depth", "link": "https://www.udemy.com/course/python-for-beginners-course-in-depth/?couponCode=DISCUDEMY.COMM", "headline": "This course is a depth introduction to both fundamental python programming concepts and the Python programming language.", "creator": "Horizon Tech", "rating": "4.1"}, {"title": "Data Science Real-World Use Cases - Hands On Python", "link": "https://www.udemy.com/course/data-science-real-world-use-cases-hands-on-python/?couponCode=AUGUST_SALESBACK", "headline": "Solve 3 real Business Problems, Build Robust AI, Ml , NLP and Time Series models in Real World Scenarios..", "creator": "Shan Singh", "rating": "4.4"}, {"title": "Spatial Analysis & Geospatial Data Science in Python", "link": "https://www.udemy.com/course/spatial-data-science-in-python/?couponCode=SCHOOL_SALES", "headline": "Learn how to process and visualize geospatial data and perform spatial analysis using Python.", "creator": "Shan Singh", "rating": "4.5"}, {"title": "Local Lead Generation Course: The Complete Beginner's Guide", "link": "https://www.udemy.com/course/local-lead-generation-course-the-complete-beginners-guide/?couponCode=FREELOCALLEAD", "headline": "Business Lead Generation Strategies: Lead Generation For Local Business", "creator": "Zechariah Tech", "rating": "3.8"}, {"title": "IP Addressing and Subnetting - Zero to Hero", "link": "https://www.udemy.com/course/ip-addressing-zero-to-hero/?couponCode=AUGUST21FREE", "headline": "Go from zero to advanced in IP addressing in a single course!", "creator": "Cyber Quince", "rating": "4.5"}, {"title": "CSS3 and Bootstrap for Absolute Beginners : 4 courses in 1", "link": "https://www.udemy.com/course/learn-css-and-bootstrap-from-scratch/?couponCode=CSS3AUG2021", "headline": "Learn CSS3, Bootstrap from Scratch using step by step process", "creator": "Creative Online School", "rating": "3.8"}, {"title": "Learn Bash Quickly", "link": "https://www.udemy.com/course/learn-bash-quickly/?couponCode=BASHFREE", "headline": "Master Bash Scripting and learn how to automate boring Linux tasks.", "creator": "Ahmed Alkabary", "rating": "4.2"}, {"title": "Statistics with R - Beginner Level", "link": "https://www.udemy.com/course/statistics-with-r-beginner-level/?couponCode=TENSTARS", "headline": "Basic statistical analyses using the R program", "creator": "Bogdan Anastasiei", "rating": "4.4"}, {"title": "Complete Adobe Animate Megacourse: Beginner to Expert", "link": "https://www.udemy.com/course/complete-adobe-animate-megacourse-beginner-to-expert/?couponCode=B7F6C1F76E7A646ECE2F", "headline": "Learn how to use Adobe Animate like a pro with this step-by-step course!", "creator": "Creativity Unleashed", "rating": "0.0"}, {"title": "Hands on ASP.NET Core 5 production grade API Development", "link": "https://www.udemy.com/course/hands-on-aspnet-core-31-production-grade-api-development/?couponCode=F9D60D5E42ABBC0D2EB4", "headline": "asp.net core 5 production grade API with next generation technology (Oauth2, elastic search, redis, mongodb, rabitmq )", "creator": "Biswanath Ghosh", "rating": "4.4"}, {"title": "Python Bootcamp 2021 Build 15 working Applications and Games", "link": "https://www.udemy.com/course/python-complete-bootcamp-2019-learn-by-applying-knowledge/?couponCode=AUG001", "headline": "Learn complete python with basics, data science, data visualisation, desktop graphical applications and python for web.", "creator": "Dev Nirwal", "rating": "4.3"}, {"title": "Quantum Computing A-Z", "link": "https://www.udemy.com/course/quantum-computing-az/?couponCode=DISCUDEMY.COM", "headline": "Learn Quantum Algorithms, Quantum Machine Learning, Quantum Information Theory, Quantum Error Correction & More!", "creator": "Syed-Mohammad Raza", "rating": "5.0"}]
        // console.log("[udemy_courses.controller][apiAddUCourses] Request: \n" + JSON.stringify(courses_to_be_added,null,2))

        try{
            await UCoursesDAO.addCourses(courses_to_be_added)
            res.json({"Response":"Courses added successfully"})
        }
        catch(err){
            console.log(`[udemy_courses.controller][apiAddUCourses] Error: ${err}`)
        }
    }
}