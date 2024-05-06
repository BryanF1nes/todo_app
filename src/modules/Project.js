export const Project = () => {
  const projects = [];

  const addProject = (name) => {
    projects.push([name]);
  };

  const getProjects = () => {
    console.log(projects);
  };
  return { addProject, getProjects };
};
