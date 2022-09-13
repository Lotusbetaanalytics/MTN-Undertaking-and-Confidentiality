import * as React from 'react';
import { IMtnnGroupConfidentialityUndertakingProps } from './IMtnnGroupConfidentialityUndertakingProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as jQuery from 'jquery';
import {HashRouter, Switch, Route} from 'react-router-dom';
import ContractStaffLandingPage from './ContractStaff/LandingPage/LandingPage';
import ContractStaffUndertaking from './ContractStaff/Undertaking/Undertaking';
import ContractStaffUndertakingForm from './ContractStaff/UndertakingForm/UndertakingForm';
import PermStaffLandingPage from './PermStaff/LandingPage/LandingPage';
import PermStaffUndertaking from './PermStaff/Undertaking/Undertaking';
import PermStaffUndertakingForm from './PermStaff/UndertakingForm/UndertakingForm';
import PermStaffDashboard from './PermStaff/Dashboard/Dashboard';
import PermStaffPendingRequests from './PermStaff/PendingRequests/PendingRequests';
import PermStaffPendingRequestsDetails from './PermStaff/PendingRequestsDetails/PendingRequestsDetails';
import AdminLandingPage from './Admin/LandingPage/LandingPage';
import AdminDashboard from './Admin/Dashboard/Dashboard';
import AdminPendingRequests from './Admin/PendingRequests/PendingRequests';
import AdminPendingRequestsDetails from './Admin/PendingRequestsDetails/PendingRequestsDetails';
import AdminUndertaking from './Admin/Undertaking/Undertaking';
import AdminUndertakingForm from './Admin/UndertakingForm/UndertakingForm';
import './global.scss';

export default class MtnnGroupConfidentialityUndertaking extends React.Component<IMtnnGroupConfidentialityUndertakingProps, {}> {
  public render(): React.ReactElement<IMtnnGroupConfidentialityUndertakingProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
      <HashRouter>
        <Switch>
          {/* Contract Staff Routes */}
          <Route path='/' exact component={ContractStaffLandingPage} />
          <Route path='/contractstaff/undertaking' exact component={ContractStaffUndertaking}/>
          <Route path='/contractstaff/undertaking/form' exact component={ContractStaffUndertakingForm}/>

          {/* Permanent Staff Routes */}
          <Route path='/permanentstaff/home' exact component={PermStaffLandingPage} />
          <Route path='/permanentstaff/undertaking' exact component={PermStaffUndertaking}/>
          <Route path='/permanentstaff/undertaking/form' exact component={PermStaffUndertakingForm}/>
          <Route path='/permanentstaff/dashboard' exact component={PermStaffDashboard}/>
          <Route path='/permanentstaff/pendingrequests' exact component={PermStaffPendingRequests} />
          <Route path='/permanentstaff/pendingrequests/details' exact component={PermStaffPendingRequestsDetails}/>

          {/* Admin Routes */}
          <Route path='/admin/home' exact component={AdminLandingPage} />
          <Route path='/admin/undertaking' exact component={AdminUndertaking}/>
          <Route path='/admin/undertaking/form' exact component={AdminUndertakingForm}/>
          <Route path='/admin/dashboard' exact component={AdminDashboard}/>
          <Route path='/admin/pendingrequests' exact component={AdminPendingRequests} />
          <Route path='/admin/pendingrequests/details' exact component={AdminPendingRequestsDetails}/>
        </Switch>
      </HashRouter>
    );
  }
}
