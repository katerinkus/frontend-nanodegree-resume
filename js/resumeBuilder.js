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
  ]
}

var projects = {
  "projects" : [
    {
      "title" : "West End Community Mapping",
      "dates" : "Summer 2016",
      "description" : "Residents were asked to mark or draw their favourite place in the West End on a large printed map.",
      "images" : ["", ""]
    },
    {
      "title" : "Vancouver Building Age Map",
      "dates" : "Summer 2014",
      "description" : "Created a map displaying Vancouver Building ages.",
      "images" : ["", ""]
    }
  ]
}

var bio = {
  "name" : "Ekaterina Aristova",
  "role" : "Aspiring front end developer with passion for environmental issues",
  "welcomeMessage" : "You got here after all",
  "biopic" : [""],
  "skills" : ["GIS", "writing content", "community management", "photography/illustration"],
  "contacts" :
    {
    "mobile" : "604-000-1111",
    "email" : "k.aristova@gmail.com",
    "github" : "katerinkus",
    "location" : "Vancouver, BC"
    },
}

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
]
}

$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));

if (bio.skills.length>0) {
  $("#header").append(HTMLskillsStart);
  for (skill in bio.skills) {
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]))
  };
}

// F U N C T I O N S //

work.display = function (w) {
  for (job = 0; job < w.jobs.length; job++) {
    $("#workExperience").append(HTMLworkStart);
    var formatted_employer = HTMLworkEmployer.replace("%data%", w.jobs[job].employer);
    var formatted_title = HTMLworkTitle.replace("%data%", w.jobs[job].title);
    var formatted_location = HTMLworkLocation.replace("%data%", w.jobs[job].location);
    var formatted_dates = HTMLworkDates.replace("%data%", w.jobs[job].dates);
    var formatted_description = HTMLworkDescription.replace("%data%", w.jobs[job].description);
    var formatted_work =formatted_employer + formatted_title + formatted_location + formatted_dates + formatted_description;
    $(".work-entry:last").append(formatted_work);
  }
}

projects.display = function(){};
bio.display = function(){};


//var sections = [work, projects, bio];
//var displays = function (sections) {
//  for (s = 0; s < sections.length; s++ ) {
//    sections[s].display();
//  }
//}
//displays(sections);
