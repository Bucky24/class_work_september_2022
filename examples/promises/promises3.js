const callApi = require("./web_request_stub");

function callApiPromise(api) {
    return new Promise((resolve, reject) => {
        callApi(
            api,
            (apiResult) => {
                resolve(apiResult);
            },
            (err) => {
                reject(err);
            }
        );
    });
}

async function getTeamsForProject() {
    let organization;
    let unit;

    try {
        const user = await callApiPromise("login?username=rwitman");
        console.log(`Got user ${user.id}`);
        
        const settings = await callApiPromise(`getSettings?user=${user.id}`);
        console.log("Got settings for user");
        
        const organizations = await callApiPromise(`getOrganizations?user=${user.id}&loadAllOrgs=${settings.loadAllOrganizations}`);
        console.log(`Got ${organizations.length} organizations`);
        organization = organizations[0];
        
        const units = await callApiPromise(`getBusinessUnits?org=${organization.id}`);
        console.log(`Got ${units.length} business units for organization ${organization.id}`);
        unit = units[0];
        
        const pillars = await callApiPromise(`getPillars?unit=${unit.id}`);
        console.log(`Got ${pillars.length} unit pillars for business unit ${unit.id}`);
        
        const teams = await callApiPromise(`getTeams?pillar=${pillars[0].id}`);
        console.log(`Got ${teams.length} teams for pillar ${pillars[0].id}`);
        
        const projects = await callApiPromise(`getProjectsForTeam?team=${teams[0].id}`);
        console.log(`Got ${projects.length} projects for team ${teams[0].id}`);
        
        const members = await callApiPromise(`getAssignedProjectMembers?project=${projects[0].id}`);
        console.log(`Got ${members.length} members for project ${projects[0].id}`);

        return "foo";
    } catch (error) {
        console.error(error);
    }
}

getTeamsForProject().then((data) => {
    console.log("all data loaded: " + data);
});
