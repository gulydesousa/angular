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
    }
}
