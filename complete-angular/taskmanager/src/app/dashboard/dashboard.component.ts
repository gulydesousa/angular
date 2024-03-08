import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements OnInit {
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

  TeamMembersSummary: any[] = [];
  TeamMembers: any[] = [];
  Regions: any[] = [];

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
    this.RegionsInit();

    this.ProjectBriefInit("Project A");
  }

  private RegionsInit() {
    this.Regions = [
      { name: "East", display: false, card: true},
      { name: "West", display: true, card: false },
      { name: "North", display: true, card: false },
      { name: "South", display: true, card: true }
    ];

    this.TeamMembersInit();

    this.TeamMembersSummaryInit();

  }

  private TeamMembersSummaryInit() {
    this.TeamMembersSummary = this.Regions.map(region => {
      const count = this.TeamMembers.filter(member => member.region === region.name).length;
      const unavailable = this.TeamMembers.filter(member => member.region === region.name && member.status === 'Busy').length;
      return { region, count, unavailable };
    });
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

  private TeamMembersInit() {
    this.TeamMembers = [
      { id: 1, name: 'Ford', status: 'Busy', region: 'East' },
      { id: 10, name: 'Miller', status: 'Available', region: 'North' },
      { id: 11, name: 'James', status: 'Busy', region: 'South' },
      { id: 2, name: 'Smith', status: 'Available', region: 'East' },
      { id: 3, name: 'Johnson', status: 'Available', region: 'East' },
      { id: 4, name: 'Brown', status: 'Available', region: 'East' },
      { id: 5, name: 'Davis', status: 'Available', region: 'East' },
      { id: 6, name: 'Wilson', status: 'Available', region: 'North' },
      { id: 7, name: 'Moore', status: 'Available', region: 'North' },
      { id: 8, name: 'Taylor', status: 'Busy', region: 'North' },
      { id: 9, name: 'Anderson', status: 'Available', region: 'North' },
      { id: 12, name: 'Brown', status: 'Available', region: 'South' },
      { id: 13, name: 'Clark', status: 'Busy', region: 'South' },
      { id: 14, name: 'Hall', status: 'Busy', region: 'South' },
      { id: 15, name: 'Lewis', status: 'Busy', region: 'South' },
      { id: 16, name: 'Johnson', status: 'Available', region: 'West' },
      { id: 17, name: 'Williams', status: 'Available', region: 'West' },
      { id: 18, name: 'Jones', status: 'Available', region: 'West' },
      { id: 19, name: 'Brown', status: 'Available', region: 'West' },
      { id: 20, name: 'Davis', status: 'Busy', region: 'West' }
    ];

  }

  onProjectChange($event: any) {
    //console.log($event.target.innerHTML);
    this.ProjectName = $event.target.innerHTML;
    this.ProjectBriefInit($event.target.innerHTML);
  }

  getFirstVisibleRegion() {
    //Retorna la primera region que tenga display en true
    return this.Regions.find(region => region.display);
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
