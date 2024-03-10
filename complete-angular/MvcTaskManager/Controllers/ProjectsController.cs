using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using MvcTaskManager.Models;


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
            return Ok();
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
            return Ok();
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
            return Ok();
        }


        
    }
}
