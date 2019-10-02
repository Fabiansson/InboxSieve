import React from 'react';

import { withAuthorization } from '../../services/Session';

const DashboardPage = () => (
  <div>
    <h1>DashboardPage</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(DashboardPage);