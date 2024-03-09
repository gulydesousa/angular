import { Injectable } from '@angular/core';
import { TeamMember } from '../interfaces/team-member.interface';
import { RegionName } from '../enums/region-names.enum';
import { TMStatus } from '../enums/tm-status.enum';

@Injectable({
  providedIn: 'root'
})
export class TeamMembersService {

  constructor() { }

  //Array de teamMembers
  private teamMembers: TeamMember[] = [
    { id: 1, region: RegionName.East, name: "Ford", status: TMStatus.Available },
    { id: 2, region: RegionName.East, name: "Miller", status: TMStatus.Available },
    { id: 3, region: RegionName.East, name: "Jones", status: TMStatus.Busy },
    { id: 4, region: RegionName.East, name: "James", status: TMStatus.Busy },

    { id: 5, region: RegionName.West, name: "Ava", status: TMStatus.Available },
    { id: 6, region: RegionName.West, name: "Olivia", status: TMStatus.Busy },
    { id: 7, region: RegionName.West, name: "Ella", status: TMStatus.Available },
    { id: 8, region: RegionName.West, name: "Emily", status: TMStatus.Available },

    { id: 9, region: RegionName.North, name: "Liam", status: TMStatus.Busy },
    { id: 10, region: RegionName.North, name: "Noah", status: TMStatus.Busy },
    { id: 11, region: RegionName.North, name: "William", status: TMStatus.Available },
    { id: 12, region: RegionName.North, name: "James", status: TMStatus.Available },

    { id: 13, region: RegionName.South, name: "Oliver", status: TMStatus.Busy },
    { id: 14, region: RegionName.South, name: "Jacob", status: TMStatus.Available },
    { id: 15, region: RegionName.South, name: "Mason", status: TMStatus.Available },
    { id: 16, region: RegionName.South, name: "Logan", status: TMStatus.Busy }
  ];

  //Obtener teamMemebers por region, si no se indica region se obtienen todos
  public GetTeamMembers(region?: RegionName): TeamMember[] {
    let teamMembers: TeamMember[] = [];

    //Obtener todos los teamMembers
    if (region == null) {
      teamMembers = this.teamMembers;
    }
    //Obtener teamMembers por region
    else {
      teamMembers = this.teamMembers.filter(member => member.region == region);
    }

    return teamMembers;
  }

}
