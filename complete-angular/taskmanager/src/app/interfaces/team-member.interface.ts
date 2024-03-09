import { RegionName } from "../enums/region-names.enum";
import { TMStatus } from "../enums/tm-status.enum";


/**
 * Represents a team member.
 */
/**
 * Represents a team member.
 */
export interface TeamMember {
  /**
   * The ID of the team member.
   */
  id: number;

  /**
   * The name of the team member.
   */
  name: string;

  /**
   * The status of the team member.
   */
  status: TMStatus;

  /**
   * The region of the team member.
   */
  region: RegionName;
}
