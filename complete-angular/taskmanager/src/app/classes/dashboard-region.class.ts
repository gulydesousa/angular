import { IDashboardRegion } from "../interfaces/dashboard-region.interface";
import { RegionName } from "../enums/region-names.enum";
import { TeamMember } from "../interfaces/team-member.interface";
import { TMStatus } from '../enums/tm-status.enum';

export class DashboardRegion implements IDashboardRegion {
  Name: RegionName;
  Display: boolean;
  Card: boolean;
  TeamMembers: TeamMember[];

  constructor(region: RegionName) {
    this.Name = region; // Initialize 'Name' property
    this.Display = true; // Initialize 'Display' property
    this.Card = true; // Initialize 'Card' property
    this.TeamMembers = []; // Initialize 'TeamMembers' property
  }

  get teammembersCount(): number {
    return this.TeamMembers.length; // Change 'this.teammembers' to 'this.TeamMembers'
  }

  get availableTeamMembers(): number {
    return this.TeamMembers.filter(member => member.status === TMStatus.Available).length; // Change 'this.teammembers' to 'this.TeamMembers'
  }

  get busyTeamMembers(): number {
    return this.TeamMembers.filter(member => member.status === TMStatus.Busy).length; // Change 'this.teammembers' to 'this.TeamMembers'
  }

}
