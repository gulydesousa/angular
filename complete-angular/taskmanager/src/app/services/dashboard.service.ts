import { Injectable } from '@angular/core';
import { DashboardRegion } from '../classes/dashboard-region.class';
import { RegionName } from '../enums/region-names.enum';
import { TeamMembersService } from './team-members.service';

@Injectable({
  providedIn: 'root'
})
/**
 * Service for managing regions.
 */
export class DashboardService {

  constructor(private teamMembersService: TeamMembersService) {
    this.DashboardRegionInit();
  }

  /**
   * Array of regions.
   */
  public Dashboard: DashboardRegion[] = [];

  /**
   * Initializes the regions array with default values.
   */
  private DashboardRegionInit() {
    //Iterate over the regions enum and create a dashboard-region for each value.
    for (let region in RegionName) {
      let dashboardRegion = new DashboardRegion(region as RegionName);
      dashboardRegion.TeamMembers = this.teamMembersService.GetTeamMembers(region as RegionName);
      dashboardRegion.Display = dashboardRegion.TeamMembers.length > 0;
      dashboardRegion.Card = dashboardRegion.Name === RegionName.East;
      this.Dashboard.push(dashboardRegion);
    }
  }

  /**
   * Retrieves the regions based on the displayAll parameter.
   * @param displayAll - If true, returns all regions. If false, returns only the regions with Display set to true.
   * @returns An array of regions.
   */
  public GetRegions(displayAll: boolean): DashboardRegion[] {
    //If displayAll is true, return all regions.
    if (displayAll) {
      return this.Dashboard;
    }
    //If displayAll is false, return only the regions with Display set to true.
    else {
      return this.Dashboard.filter(region => region.Display);
    }
  }
}
