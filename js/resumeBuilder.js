var work = {
    "jobs": [{
        "employer": "HiVE",
        "title": "Event Animator",
        "location": "Vancouver, BC",
        "dates": "September 2016-current",
        "description": "A part-time gig where I supervise events"
    }, {
        "employer": "TetraTech EBA",
        "title": "Environmental Technician",
        "location": "Vancouver, BC",
        "dates": "August 2016-November 2016",
        "description": "Researched recycling attittude and current status in CNV"
    }, {
        "employer": "Vancouver Photowalks",
        "title": "Community Manager & Photo Guide",
        "location": "Vancouver, BC",
        "dates": "December 2013-May 2016",
        "description": "Taught people photography while also guiding them through Vancouver. In the last year, I have also managed social media. Website visits from Facebook went up by 500%. Instagram following grew from 3 hundred to 11 hundred."
    }],
    "display": function(exp) {
        for (job = 0; job < exp.jobs.length; job++) {
            $("#workExperience").append(HTMLworkStart);
            var formatted_employer = HTMLworkEmployer.replace("%data%", exp.jobs[job].employer);
            var formatted_title = HTMLworkTitle.replace("%data%", exp.jobs[job].title);
            var formatted_location = HTMLworkLocation.replace("%data%", exp.jobs[job].location);
            var formatted_dates = HTMLworkDates.replace("%data%", exp.jobs[job].dates);
            var formatted_description = HTMLworkDescription.replace("%data%", exp.jobs[job].description);
            var formatted_work = formatted_employer + formatted_title + formatted_location + formatted_dates + formatted_description;
            $(".work-entry:last").append(formatted_work);
        }
    }
};

work.display(work);

var projects = {
    "projects": [{
        "title": "West End Community Mapping",
        "dates": "Summer 2016",
        "description": "Residents were asked to mark or draw their favourite place in the West End on a large printed map.",
        "images": ["https://unsplash.it/300/200?image=816", "https://unsplash.it/300/200?image=1005"]
    }, {
        "title": "Vancouver Building Age Map",
        "dates": "Summer 2014",
        "description": "Created a map displaying Vancouver Building ages.",
        "images": ["images/map.png"]
    }],
    "display": function(projectList) {
        for (proj = 0; proj < projectList.projects.length; proj++) {
            $("#projects").append(HTMLprojectStart);
            var formatted_title = HTMLprojectTitle.replace("%data%", projectList.projects[proj].title);
            var formatted_dates = HTMLprojectDates.replace("%data%", projectList.projects[proj].dates);
            var formatted_description = HTMLprojectDescription.replace("%data%", projectList.projects[proj].description);
            var formatted_projects = formatted_title + formatted_dates + formatted_description;
            $(".project-entry:last").append(formatted_projects);
            for (img = 0; img < projectList.projects[proj].images.length; img++) {
                var formatted_images = HTMLprojectImage.replace("%data%", projectList.projects[proj].images[img]);
                $(".project-entry:last").append(formatted_images);
            };
        }
    }
};

projects.display(projects);

var bio = {
    "name": "Ekaterina Aristova",
    "role": "Aspiring front end developer with passion for environmental issues",
    "welcomeMessage": "You got here after all",
    "biopic": "images/bio.jpg",
    "skills": ["GIS", "writing content", "community management", "photography/illustration"],
    "contacts": {
        "mobile": "604-000-1111",
        "email": "k.aristova@gmail.com",
        "github": "katerinkus",
        "location": "Vancouver, BC"
    },
    "display": function(bio) {
        $("#header").append(HTMLheaderName.replace("%data%", bio.name));
        $("#header").append(HTMLheaderRole.replace("%data%", bio.role));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
        $("#header").append(HTMLskillsStart);
        for (skill = 0; skill < bio.skills.length; skill++) {
            var formatted_skill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formatted_skill);
        }
        $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    }
};

bio.display(bio);

var education = {
    "schools": [{
        "name": "University of Waterloo",
        "degree": "Environmental Studies (BA)",
        "location": "Waterloo, ON",
        "dates": "2011-2013",
        "majors": ["Environment and Resource Studies", "Diploma in Ecological Restoration", "Diploma in Environmental Assessment"],
        "url": "https://uwaterloo.ca/"
    }, {
        "name": "Ryerson University",
        "degree": "Architecture (first year)",
        "location": "Toronto, ON",
        "dates": "2009-2010",
        "majors": ["Architectural Science"],
        "url": "http://www.ryerson.ca/"
    }],

    "onlineCourses": [{
        "title": "Front-End Developer NanoDegree",
        "school": "Udacity",
        "dates": "2016-current",
        "url": "https://udacity.com"
    }],

    "display": function(edu) {
        for (school = 0; school < edu.schools.length; school++) {
            $("#education").append(HTMLschoolStart);
            var formatted_name = HTMLschoolName.replace("%data%", edu.schools[school].name);
            var formatted_degree = HTMLschoolDegree.replace("%data%", edu.schools[school].degree);
            var formatted_location = HTMLschoolLocation.replace("%data%", edu.schools[school].location);
            var formatted_dates = HTMLschoolDates.replace("%data%", edu.schools[school]["dates"]);
            var formatted_majors = HTMLschoolMajor.replace("%data%", edu.schools[school].majors.join(", "));
            var formatted_url = HTMLonlineURL.replace("%data%", edu.schools[school].url);
            var formatted_schools = formatted_name + formatted_degree + formatted_location + formatted_dates + formatted_majors + formatted_url;
            $(".education-entry:last").append(formatted_schools);
        }
        for (course = 0; course < edu.onlineCourses.length; course++) {
            $("#education").append(HTMLschoolStart);
            var formatted_title = HTMLonlineTitle.replace("%data%", edu.onlineCourses[course].title);
            var formatted_onlineschool = HTMLonlineSchool.replace("%data%", edu.onlineCourses[course].school);
            var formatted_onlinedates = HTMLonlineDates.replace("%data%", edu.onlineCourses[course].dates);
            var formatted_url = HTMLonlineURL.replace("%data%", edu.onlineCourses[course].url);
            var formatted_courses = HTMLonlineClasses + formatted_title + formatted_onlineschool + formatted_onlinedates + formatted_url;
            $(".education-entry:last").append(formatted_courses);
        }
    }
};
education.display(education);
