import { Grid } from 'semantic-ui-react';
import ActivityList from "./ActivityList.tsx";
import {useStore} from "../../../app/stores/store.ts";
import {observer} from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent.tsx";
import { useEffect } from 'react';


export default observer( function ActivityDashboard() {
    const {activityStore} = useStore();
    const {loadActivities, activityRegistry} = activityStore;

    useEffect(() => {
        if (activityRegistry.size <= 1) loadActivities();
    }, [loadActivities])


    if (activityStore.loadingInitial) return <LoadingComponent content='Loading app'/>;
    
    return (        
        <Grid>
            <Grid.Column width="10">
                <ActivityList/>
            </Grid.Column>
            <Grid.Column width="6">
                <h2>Activivty filters</h2>
            </Grid.Column>
        </Grid>
    )
})