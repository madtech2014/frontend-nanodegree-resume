
var bio = {
		
		"name": "Alfred Richardson",
		"role": "Web Developer",
		"contacts": {
				"mobile": "ph:678 376-5470",
				"email": "alfredrichardsonjr@gmail.com",
				"github":  "madtech2014",
				"location": "Lawrenceville GA 30044"
		},
		"welcomeMessage": "The TIDE Has Risen!!",
		"skills": ["HTML", "CSS","Javascript", "jQuery","General Webology"],
		"bioPic": "images/alabama.jpg"
}
bio.display = function () {
	

	var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);

	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").prepend(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").prepend(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").prepend(formattedGithub);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").prepend(formattedLocation);
	
	var name = bio.name;
	var	formattedName = HTMLheaderName.replace("%data%", name);
	var role = bio.role;
	var	formattedRole = HTMLheaderRole.replace("%data%", role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
};	
var work = {
  	"jobs": [
		{
			"employer": "at&t",
			"title": "Sr. Network Specialist",
			"dates": "December 2007 to Present",
			"location": "Honolulu, HI",
			"description": "Tier II support for MW Radio Networks"
		},
		{		
			"employer": "Bellsouth Telecomunications",
			"title": "System Specialist Technician",
			"dates": "June 1998 to December 2007",
			"location":  "Atlanta, GA",
			"description": "Tier II desktop support for workcenters"
		}
	]
}
work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location)
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};
var projects = {
	"projects": [
		{
			"title": "Committed to Excellence",
			"dates": "Oct-2014 to Jan-2015",
			"description": "National Champions 1925 1926 1930 1934 1941 1961 1964 1965 1973 1978 1979 1992 2009 2011  Southeastern Conference Championships 1933 1934 1937 1945 1953 1961 1964 1965 1966 1971 1972 1973 1974 1975 1977 1978 1979 1981 1989 1992 1999 2009 2012 ",
			"images": ["images/alabama1.jpg",
			"images/flag2.jpg"
			]
		}
	]
}
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
var education = {
	"schools": [
		{
			"schoolName":  "Excelsior College",
			"degree":  "AAS Technical Studies",
			"location":  "Albany, NY",
			"major":  ["Computer Technologies", "Nuclear Engineering"],
			"dates": 2007,
			"url": "http://www.excelsior.edu"
		},
		{
			"schoolName":  "Central Georgia Technical College",
			"degree": "Technical Certificate",
			"location":  "Milledgeville, GA",
			"major":  ["Cisco CCNA Specialist", "Network Design"],
			"dates": 2008,
			"url":  "http://www.centralgatech.edu"
		}
		],
	"onlineClasses": [
		{	
			"title": "Frontend Web Developer",
			"schoolName": "Udacity",
			"dates":  "October 2014 - Present",
			"url":  "http://www.udacity.com"
		}		
		
	]
	
};
education.display = function(){

	for (var schools in education.schools ) {
		$('#education').append(HTMLschoolStart);
		var formatSchoolName = HTMLschoolName.replace('%data%',education.schools[schools].schoolName);
		var formatSchoolDegree = HTMLschoolDegree.replace('%data%',education.schools[schools].degree);
		$('.education-entry:last').append(formatSchoolName + formatSchoolDegree);

		var formatSchoolDates = HTMLschoolDates.replace('%data%',education.schools[schools].dates);
		$('.education-entry:last').append(formatSchoolDates);

		var formatSchoolLocation = HTMLschoolLocation.replace('%data%',education.schools[schools].location);
		$('.education-entry:last').append(formatSchoolLocation);

		var formatSchoolMajor = HTMLschoolMajor.replace('%data%',education.schools[schools].major);
		$('.education-entry:last').append(formatSchoolMajor);

		//var formatSchoolURL = HTMLSchoolURL.replace('%data%',education.schools[schools].url);
		//   $(".education-entry:last").append(formatOnlineURL);
	}

		for (var classes in education.onlineClasses) {

			$('#education').append(HTMLschoolStart);

			$(".education-entry:last").append(HTMLonlineClasses);

			var formatOnlineTitle = HTMLonlineTitle.replace('%data%',education.onlineClasses[classes].title);
		    var formatOnlineSchool = HTMLonlineSchool.replace('%data%',education.onlineClasses[classes].schoolName);
		    $(".education-entry:last").append(formatOnlineTitle + formatOnlineSchool);

		    var formatOnlineDates = HTMLonlineDates.replace('%data%',education.onlineClasses[classes].dates);
		    $(".education-entry:last").append(formatOnlineDates);

		    var formatOnlineURL = HTMLonlineURL.replace('%data%',education.onlineClasses[classes].url);
		    $(".education-entry:last").append(formatOnlineURL);

		    

		}
			
}	

//location finder
function locationizer(work_obj) {
var locationArray = [];
for (job in work_obj.jobs) {
var newLocation = work_obj.jobs[job].location;
locationArray.push(newLocation);
}
return locationArray;
console.log(locationArray);
}
//click catcher
$(document).click(function (loc) {
var x = loc.pageX;	
var y = loc.pageY;
logClicks(x, y);
});

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

bio.display();
work.display();
projects.display();
education.display();
inName(name);

function inName(name) {
name = bio.name.trim().split(" ");
console.log(name);
name[1] = name[1].toUpperCase();
name[0] = name[0].slice(0, 1).toUpperCase() +
name[0].slice(1).toLowerCase();
return name[0] +" " +name[1];
}
inName(name);
