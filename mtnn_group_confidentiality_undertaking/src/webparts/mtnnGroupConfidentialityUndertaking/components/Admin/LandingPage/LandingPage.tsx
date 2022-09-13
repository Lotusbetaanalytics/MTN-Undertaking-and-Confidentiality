import * as React from 'react';
import ComponentLanding from '../../containers/ComponentLanding';

const AdminLandingPage = () => {
  return (
    <div className='app'>
      <ComponentLanding undertaking='/admin/dashboard'/>
    </div>
  )
}

export default AdminLandingPage;