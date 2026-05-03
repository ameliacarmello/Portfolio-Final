const personDetails = {
    personal: {
      firstName: "Amelia",
      lastName: "Carmello",
      email: "acarmello07@gmail.com",
      age: 21,
      
      location: "Philadelphia, PA",
      description: "I’m a graduating senior at Temple University that is passionate about people, health, and happiness! I am currently Majoring in Sociology, with minors in Public Health and Healthcare Management, along with a certificate in Geographic Information Systems, or GIS. Some of my passions outside of academics include baking, crochet, long walks, being social, and public health."
    },
    professional: {
      yoe: 1,
      completedProjects: 7,
      awardsWon: 1,
    },
    academic: {
    college: {
        name: "Temple University",
        duration: "2022 - 2026",
        course: "Sociology, Public Health, Healthcare Management, GIS",
    },
    school: {
        name: "Graduating May 2026",
        duration: "2022 - 2026",
        course: "Bachelor of Arts"
    }
},
    skills: {
      // key: skill name
      // value: skill percentage
      "html": 100,
      "javascript": 100,
        "Leaflet": 100,
      "JS Libraries": 100,
      "Amazon Q": 100,
      "Github": 100,
      "vscode": 100,
      },
    social: {
      github: "https://github.com/ameliacarmello/ameliacarmello",
      linkedin: "https://www.linkedin.com/in/amelia-carmello-690242358/",
    }
  };

  function setElemAttribute(elemId, elemValue, attr = 'innerText') {
    const elem = document.getElementById(elemId);

    // set value only if element is present
    if (elem) {
      console.log("setting attribute for" + elem, attr, elemValue);
      elem[attr] =  elemValue;
    }
  }

  function setSkillValue(skillName) {
    setElemAttribute('skill-' + skillName, personDetails.skills[skillName] + '%');
    const div = document.getElementsByClassName('skill-' + skillName)[0];
    if (div) {
      const className = 'p' + personDetails.skills[skillName];
      div.classList.remove('p0');
      div.classList.add(className);
    }
  }

  // index.html
  setElemAttribute('person-name', personDetails.personal.firstName + ' ' + personDetails.personal.lastName);
  setElemAttribute('person-desc', personDetails.personal.description);

  // about.html
  setElemAttribute('person-fname', personDetails.personal.firstName);
  setElemAttribute('person-lname', personDetails.personal.lastName);
  setElemAttribute('person-age', personDetails.personal.age);
  setElemAttribute('person-email', personDetails.personal.email);
setElemAttribute('person-location', personDetails.personal.location);
setElemAttribute('school-duration', personDetails.academic.school.duration);

  // professional
  setElemAttribute('person-yoe', personDetails.professional.yoe);
  setElemAttribute('person-completedProjects', personDetails.professional.completedProjects);
  setElemAttribute('person-awardsWon', personDetails.professional.awardsWon);
  // academic
  setElemAttribute('school-name', personDetails.academic.school.name);
  setElemAttribute('school-course', personDetails.academic.school.course);
  setElemAttribute('college-duration', personDetails.academic.college.duration);
  setElemAttribute('college-name', personDetails.academic.college.name);

  // TODO: can be replaced with a loop
  setSkillValue('html');
  setSkillValue('javascript');
  setSkillValue('Leaflet');
  setSkillValue('JS Libraries');
  setSkillValue('Amazon Q');
  setSkillValue('Github');
  setSkillValue('vscode');

  // contact.html
  setElemAttribute('github', personDetails.social.github, 'href');
  setElemAttribute('linkedin', personDetails.social.linkedin, 'href');
  setElemAttribute('mail-hyperlink', "mailto:"+personDetails.personal.contactMail, 'href');
