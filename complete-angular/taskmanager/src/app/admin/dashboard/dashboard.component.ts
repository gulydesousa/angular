import { Component, OnInit } from '@angular/core';
import { RegionName } from '../../enums/region-names.enum';
import { DashboardService } from '../../services/dashboard.service';
import { DashboardRegion } from '../../classes/dashboard-region.class';
import { TMStatus } from '../../enums/tm-status.enum';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements OnInit {

  regions: RegionName[] = [];
  dashboardRegions: DashboardRegion[] = [];
  TMStatus = TMStatus;

  //Inyecta el servicio DashboardService
  constructor(private dashboardService: DashboardService) {

  }


  // Propiedades del componente
  //deberían ser publicas para que puedan ser accedidas desde el template
  //de ser privadas no se podrian acceder desde el template
  public Designation: string = "";
  public UserName: string = "";
  public NoOfTeamMembers: number = 0;
  public TotalCostOfAllProjects: number = 0;
  public PendingTasks: number = 0;
  public UpcomingProjects: number = 0;

  //!Project breif
  public ProjectName: string = "";
  public ProjectCost: number = 0;
  public CurrentExpenditure: number = 0;
  public AvailableFunds: number = 0;

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];


  ahora: Date = new Date();

  //Inicializa las propiedades del componente
  ngOnInit(): void {
    //En aplicaciones reales estos valores se obtendrían de una API, base de datos, etc.
    this.Designation = "Team Leader";
    this.UserName = "John Doe";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpcomingProjects = 0.2;
    this.ClientsInit();
    this.ProjectsInit();
    this.YearsInit();
    this.ProjectBriefInit("Project A");

    this.initDashboard();
  }


  /**
   * Initializes the dashboard component.
   * Retrieves the regions from the RegionName enum and calls the GetRegions method of the dashboard service.
   */
  private initDashboard(): void {
    //Todas las regiones en el enum RegionName
    this.regions = Object.values(RegionName).filter(value => typeof value === 'string') as RegionName[];
    this.dashboardRegions = this.dashboardService.GetRegions(true);
  }


  private ClientsInit() {
    this.Clients = ["ABC Infotech Ltd.", "DEF Software Solutions", "GHI Industries", "JKL INC"];
  }

  private ProjectBriefInit(projectName: string) {
    //Arreglo de ProjectBriefs para los Projects
    let projectBriefs = [
      { name: "Project A", cost: 10000, expenditure: 45 },
      { name: "Project B", cost: 2200, expenditure: 145 },
      { name: "Project C", cost: 33000, expenditure: 245 },
      { name: "Project D", cost: 8400, expenditure: 345 }
    ];

    //Itera sobre el arreglo de projectBriefs
    for (let i = 0; i < projectBriefs.length; i++) {
      //Si el nombre del proyecto es igual al nombre del proyecto seleccionado
      if (projectBriefs[i].name == projectName) {
        //Asigna el costo, gasto y fondos disponibles
        this.ProjectCost = projectBriefs[i].cost;
        this.CurrentExpenditure = projectBriefs[i].expenditure;
        this.AvailableFunds = this.ProjectCost - this.CurrentExpenditure;
        this.ProjectName = projectName;
      }
    }
  }

  private ProjectsInit() {
    this.Projects = ["Project A", "Project B", "Project C", "Project D"];
  }

  private YearsInit() {
    this.Years = [];
    let currentYear = new Date().getFullYear();

    for (let i = -5; i <= 5; i++) {
      this.Years.push(currentYear + i);
    }
  }

  onProjectChange($event: any) {
    //console.log($event.target.innerHTML);
    this.ProjectName = $event.target.innerHTML;
    this.ProjectBriefInit($event.target.innerHTML);
  }

  /**
   * Returns the first visible region from the dashboardRegions array.
   * @returns The first region with the 'Display' property set to true, or undefined if no visible region is found.
   */
  getFirstVisibleRegion() {
    //Retorna la primera region que tenga display en true
    return this.dashboardRegions.find(region => region.Display);
  }

  getYearComparison(year: number) {
    const currentYear = new Date().getFullYear();
    if (year < currentYear) {
      return 'past';
    } else if (year === currentYear) {
      return 'present';
    } else {
      return 'future';
    }
  }
}
