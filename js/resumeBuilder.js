 var work = {
  "jobs" : [
    {
      "employer" : "HiVE",
      "title" : "Event Animator",
      "location" : "Vancouver, BC",
      "dates" : "September 2016-current",
      "description" : "A part-time gig where I supervise events"
    },
    {
      "employer" : "TetraTech EBA",
      "title" : "Environmental Technician",
      "location" : "Vancouver, BC",
      "dates" : "August 2016-November 2016",
      "description" : "Researched recycling attittude and current status in CNV"
    },
    {
      "employer" : "Vancouver Photowalks",
      "title" : "Community Manager & Photo Guide",
      "location" : "Vancouver, BC",
      "dates" : "December 2013-May 2016",
      "description" : "Taught people photography while also guiding them through Vancouver. In the last year, I have also managed social media. Website visits from Facebook went up by 500%. Instagram following grew from 3 hundred to 11 hundred."
    }
  ],
  "display" : function (w) {
    for (job = 0; job < w.jobs.length; job++) {
      $("#workExperience").append(HTMLworkStart);
      var formatted_employer = HTMLworkEmployer.replace("%data%", w.jobs[job].employer);
      var formatted_title = HTMLworkTitle.replace("%data%", w.jobs[job].title);
      var formatted_location = HTMLworkLocation.replace("%data%", w.jobs[job].location);
      var formatted_dates = HTMLworkDates.replace("%data%", w.jobs[job].dates);
      var formatted_description = HTMLworkDescription.replace("%data%", w.jobs[job].description);
      var formatted_work = formatted_employer + formatted_title + formatted_location + formatted_dates + formatted_description;
      $(".work-entry:last").append(formatted_work);
    }
  }
}

work.display(work);

var projects = {
  "projects" : [
    {
      "title" : "West End Community Mapping",
      "dates" : "Summer 2016",
      "description" : "Residents were asked to mark or draw their favourite place in the West End on a large printed map.",
      "images" : ["https://unsplash.it/400/100?image=56"]
    },
    {
      "title" : "Vancouver Building Age Map",
      "dates" : "Summer 2014",
      "description" : "Created a map displaying Vancouver Building ages.",
      "images" : ["images/map.png"]
    }
  ],
  "display" : function (i) {
    for (proj=0; proj < i.projects.length; proj++) {
      $("#projects").append(HTMLprojectStart);
      var formatted_title = HTMLprojectTitle.replace("%data%", i.projects[proj].title);
      var formatted_dates = HTMLprojectDates.replace("%data%", i.projects[proj].dates);
      var formatted_description = HTMLprojectDescription.replace("%data%", i.projects[proj].description);
      var formatted_images = HTMLprojectImage.replace("%data%", i.projects[proj].images);
      var formatted_projects = formatted_title + formatted_dates + formatted_description+formatted_images;
      $(".project-entry:last").append(formatted_projects);
    }
  }
}

projects.display(projects);

var bio = {
  "name" : "Ekaterina Aristova",
  "role" : "Aspiring front end developer with passion for environmental issues",
  "welcomeMessage" : "You got here after all",
  "biopic" : ["images/bio.jpg"],
  "skills" : ["GIS", "writing content", "community management", "photography/illustration"],
  "contacts" :
    {
    "mobile" : "604-000-1111",
    "email" : "k.aristova@gmail.com",
    "github" : "katerinkus",
    "location" : "Vancouver, BC"
    },
  "display" : function () {
    $("#header").append(HTMLheaderName.replace("%data%", bio.name));
    $("#header").append(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLskillsStart);
    for (skill=0; skill < bio.skills.length; skill++) {
      var formatted_skill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formatted_skill);
    }
  }
}

bio.display();

var education = {
  "schools" : [
  {
    "name" : "University of Waterloo",
    "location" : "Waterloo, ON",
    "degree dates" : "2011-2013",
    "url" : "not sure",
    "majors" : ["Environment and Resource Studies", "Diploma in Ecological Restoration", "Diploma in Environmental Assessment"]
  },
  {
    "name" : "Ryerson University",
    "location" : "Toronto, ON",
    "degree dates" : "2009-2010",
    "url" : "not sure",
    "majors" : ["Architectural Science"]
  }
  ],

  "onlineCourses" : [
  {
    "title" : "Front-End Developer NanoDegree",
    "school" : "Udacity",
    "dates" : "2016-current",
    "url" : "link"
  }
],

}

//$("#header").append(HTMLheaderName.replace("%data%", bio.name));
//$("#header").append(HTMLheaderRole.replace("%data%", bio.role));

//if (bio.skills.length>0) {
  //$("#header").append(HTMLskillsStart);
  //for (skill in bio.skills) {
    //$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]))
  //};
//}
