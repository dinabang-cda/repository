import { EnvironmentEnum } from "../app/enums/environment.enum";
import { EnvironmentInterface } from "./environment.interface";

export const environment: EnvironmentInterface = {
  ENVIRONMENT: EnvironmentEnum.DEVELOPMENT,
  DEBUG: process.env.DEBUG == "true" || false,
  DOCUMENTS_IN_QUEUE: process.env.DOCUMENTS_IN_QUEUE || "https://sqs.sa-east-1.amazonaws.com/388908880061/documentsNew.fifo"  
};
