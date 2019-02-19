import React from 'react'; 
import { Route, Switch } from 'react-router';
import HomePage from '../components/HomePage';
import MediaGalleryPage from '../containers/MediaGalleryPage';

// Map components to different routes.
// The parent component wraps other components and thus serves as  the entrance to 
// other React components.
// IndexRoute maps HomePage component to the default route
export default (
    <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/library" component={MediaGalleryPage} />
    </Switch>
);