// Creates variables for all projects
var bio_models = {
    title: "Biology Models",
    info: "Creating models to visualize evolutionary patterns",
    categories: ["Computer Science", "Biology"],
  };
 
  var physics_education = {
    title: "Physics Education",
    info: "Analysis of new education method in middle school physics",
    categories: ["Human Factors Engineering"],
  };
 
  var chemistry_labs = {
    title: "Chemistry Labs",
    info: "Experiment to synthesize gold from lead",
    categories: ["Chemistry"],
  };
 
  var computer_science = {
    title: "Computer Science Research",
    info: "Researching new techniques",
    categories: ["Computer Science"],
  };
 
  var marine_biology = {
    title: "Marine Biology Study",
    info: "Blobfish: An Analysis",
    categories: ["Biology"],
  };
 
  var ai_ethics = {
    title: "AI Ethics",
    info: "Ai? Ethical?",
    categories: ["Computer Science", "Human Factors Engineering"],
  };


  var chemistry_modeling = {
    title: "Chemistry Modeling",
    info: "Modeling chemistry",
    categories: ["Chemistry", "Computer Science"],
  };


  var engineering_psych = {
    title: "Engineering Psychology",
    info: "Engineering thinky thinky",
    categories: ["Human Factors Engineering"],
  };


  var projects =
  [
    bio_models,
    physics_education,
    chemistry_labs,
    computer_science,
    marine_biology,
    ai_ethics,
    chemistry_modeling,
    engineering_psych
  ];


const optionSelect = document.getElementById("field");
const projectsDiv = document.getElementById("result_row1");
optionSelect.addEventListener("change", filterResearch);


filterResearch()
 
// Functions
function filterResearch()
{
    const currentOption = optionSelect.value;
    let filteredProjects = projects;


    if(currentOption != "All")
    {
        filteredProjects = projects.filter((project) =>
        {
            return project.categories.includes(currentOption);
        });
    }
    displayProjects(filteredProjects);
}


function displayProjects(projects)
{
    // Clears everything inside result_row1 to display a fresh page
    projectsDiv.innerHTML = "";


    // let project of projects - Accesses 1 item of projects every iteration
    for(let project of projects)
    {
        // Recreates what you put in the html file: This is 1 option in the
        // filter bar
        let result_profile_div = document.createElement("div");
        result_profile_div.className = "result_profile1";
       
        result_profile_div.appendChild(document.createElement("br"));


        let result_profile_div2 = document.createElement("div");
        result_profile_div2.className = "profile_title";
        result_profile_div2.innerHTML = project.title;
        result_profile_div.appendChild(result_profile_div2);


        result_profile_div.appendChild(document.createElement("hr"));


        let result_profile_div3 = document.createElement("div");
        result_profile_div3.className = "profile_info";
        result_profile_div3.innerHTML = project.info;
        result_profile_div.appendChild(result_profile_div3);
       
        result_profile_div.appendChild(document.createElement("hr"));
       
        let result_profile_div4 = document.createElement("div");
        result_profile_div4.className = "profile_tags";
        result_profile_div4.innerHTML = project.categories;
        result_profile_div.appendChild(result_profile_div4);


        projectsDiv.appendChild(result_profile_div);
    }
}


// // Reference of 1 project item - this is what the above for loop is trying
// to mimic
// <div class = result_profile1>
// <br>
// <div class = profile_title>Biology Models</div>
// <hr>
// <div class = profile_info>
// Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
// Aenean commodo ligula eget dolor.
// </div>
// <hr>
// <div class = profile_tags>
// Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
// </div>
