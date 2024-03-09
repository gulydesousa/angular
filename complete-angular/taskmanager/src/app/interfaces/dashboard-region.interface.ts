
    /// <summary>
    /// Represents a region.

import { RegionName } from "../enums/region-names.enum";
import { TeamMember } from "./team-member.interface";

    /// </summary>
    /**
     * Represents a dashboard region.
     */
    export interface IDashboardRegion {
      /**
       * Gets or sets the name of the region.
       */
      Name: RegionName;

      /**
       * Gets or sets a value indicating whether the region should be displayed.
       */
      Display: boolean;

      /**
       * Gets or sets a value indicating whether the region should be displayed as a card.
       */
      Card: boolean;

      /**
       * Gets or sets the team members in the region.
       */
      TeamMembers: TeamMember[];
    }
