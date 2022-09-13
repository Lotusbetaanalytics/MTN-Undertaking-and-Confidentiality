import { WebPartContext } from "@microsoft/sp-webpart-base";  
import { PageContext } from '@microsoft/sp-page-context';

export interface IMtnnGroupConfidentialityUndertakingProps {
  description: string;
  // isDarkTheme: boolean;
  // environmentMessage: string;
  // hasTeamsContext: boolean;
  // userDisplayName: string;
  context:WebPartContext;
  pageContext: PageContext;
}
