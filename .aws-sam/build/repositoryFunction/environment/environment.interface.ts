import { EnvironmentEnum } from "../app/enums/environment.enum";

export interface EnvironmentInterface {
  ENVIRONMENT: EnvironmentEnum;
  DEBUG: boolean;  
  DOCUMENTS_IN_QUEUE : string;
}
