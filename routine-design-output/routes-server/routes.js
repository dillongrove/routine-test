import React from 'react';
import {Route} from 'react-router-dom';
class Routes extends React.Component {
render() {return (<div>
<Route exact path='/logo' component={require('../../test/render/logo/index.js').default}/>
</div>);}
}
export default Routes
