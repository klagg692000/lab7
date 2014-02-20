var models = require('../models');

exports.projectInfo = function(req, res) {
  var projectID = req.params.id;

models.Project
  // query for the specific project and
  .find(projectID)
  .exec(afterQuery);
  // call the following callback

  function afterQuery(err, projects) {
    if(err) console.log(err);
    res.json(projects[0]);
  }
}

exports.addProject = function(req, res) {
  var form_data = req.body;
  console.log(form_data);
  
  var newPost = new models.Project(form_data);
 
 models.Project
  newPost.save(afterSaving);
  
  function afterSaving(err){
  if(err) {console.log(err); res.send(500);}
  }

  // make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();
}

exports.deleteProject = function(req, res) {
  var projectID = req.params.id;
  //find the projec then remove it
  //You must send an OK response w/ res.send()
  //Write a query to find the project with id matching projectID and remove it
 
 models.Project
  .find(projectID)
  .remove()
  .exec(afterRemoving);
  
  function afterRemoving(err) {
    if(err) {console.log(err); res.send(500);}
  }

  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
}