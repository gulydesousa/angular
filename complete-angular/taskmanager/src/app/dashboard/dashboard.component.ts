import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements OnInit
{
  // Propiedades del componente
  //deberían ser publicas para que puedan ser accedidas desde el template
  //de ser privadas no se podrian acceder desde el template
  public Designation: string = "";
  public UserName: string = "";
  public NoOfTeamMembers: number = 0;
  public TotalCostOfAllProjects: number = 0;
  public PendingTasks: number = 0;
  public UpcomingProjects: number = 0;
  public ProjectCost: number = 0;
  public CurrentExpenditure: number = 0;
  public AvailableFunds: number = 0;

  Clients: string[] = ["ABC Infotech Ltd.", "DEF Software Solutions", "GHI Industries"];
  Projects: string[] = ["Project A", "Project B", "Project C", "Project D"];
  Years: number[] = [2019, 2020, 2021, 2022, 2023];
  TeamMembersSummary: any[] = [];
  TeamMembers: any[] = [];

  //Inicializa las propiedades del componente
  ngOnInit(): void {
    //En aplicaciones reales estos valores se obtendrían de una API, base de datos, etc.
    this.Designation = "Team Leader";
    this.UserName = "John Doe";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpcomingProjects = 2;
    this.ProjectCost = 211;
    this.CurrentExpenditure = 198;
    this.AvailableFunds = 189;
  }

}
