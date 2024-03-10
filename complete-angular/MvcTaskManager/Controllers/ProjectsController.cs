using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MvcTaskManager.Models;
using System.Reflection;


namespace MvcTaskManager.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController : Controller
    {
        [HttpGet]
        public List<Project> Index()
        {
            TaskManagerDbContext db = new TaskManagerDbContext();
            List<Project> projects = db.Projects.ToList();
            return projects;
        }

        [HttpPost]
        public IActionResult Create([FromBody] Project project)
        {
            TaskManagerDbContext db = new TaskManagerDbContext();
            db.Projects.Add(project);
            db.SaveChanges();
            return Ok(project);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] Project project)
        {
            TaskManagerDbContext db = new TaskManagerDbContext();
            Project existingProject = db.Projects.Find(id);
            if (existingProject == null)
            {
                return NotFound();
            }

            existingProject.Name = project.Name;
            existingProject.DateOfStart = project.DateOfStart;
            existingProject.TeamSize = project.TeamSize;

            db.SaveChanges();
            return Ok(existingProject);
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            TaskManagerDbContext db = new TaskManagerDbContext();
            Project existingProject = db.Projects.Find(id);
            if (existingProject == null)
            {
                return NotFound();
            }

            db.Projects.Remove(existingProject);
            db.SaveChanges();
            return Ok($"Project {id} eliminado con éxito");
        }

        [HttpGet("search/{searchby}/{searchtext}")]
        public List<Project> Search(string searchby, string searchtext)
        {
            TaskManagerDbContext db = new TaskManagerDbContext();
            List<Project> projects;

            switch (searchby.ToLower())
            {
                case "id":
                    projects = db.Projects.Where(p => p.ID.ToString().Contains(searchtext)).ToList();
                    break;
                case "name":
                    projects = db.Projects.Where(p => p.Name.Contains(searchtext)).ToList();
                    break;
                case "dateofstart":
                    if (DateTime.TryParse(searchtext, out DateTime dateOfStart))
                    {
                        projects = db.Projects.Where(p => p.DateOfStart == dateOfStart).ToList();
                    }
                    else
                    {
                        projects = new List<Project>();
                    }
                    break;
                case "teamsize":
                    if (int.TryParse(searchtext, out int teamSize))
                    {
                        projects = db.Projects.Where(p => p.TeamSize == teamSize).ToList();
                    }
                    else
                    {
                        projects = new List<Project>();
                    }
                    break;
                default:
                    projects = new List<Project>();
                    break;
            }

            return projects;
        }



        [HttpGet("properties")]
        public ObjectProperties GetPropertyNames()
        {
            List<string> propertyNames = typeof(Project).GetProperties()
                .Select(property => property.Name)
                .ToList();

            var result = new ObjectProperties(nameof(Project), propertyNames);

            return result;
        }
    }
}
