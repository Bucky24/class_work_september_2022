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

let user;
let organization;
let unit;
callApiPromise("login?username=rwitman").then((result) => {
    user = result;
    console.log(`Got user ${user.id}`);

    return callApiPromise(`getSettings?user=${user.id}`);
}).then((settings) => {
    console.log("Got settings for user");

    return callApiPromise(`getOrganizations?user=${user.id}&loadAllOrgs=${settings.loadAllOrganizations}`);
}).then((organizations) => {
    console.log(`Got ${organizations.length} organizations`);
    organization = organizations[0];

    return callApiPromise(`getBusinessUnits?org=${organization.id}`);
}).then((units) => {
    console.log(`Got ${units.length} business units for organization ${organization.id}`);
    unit = units[0];

    return callApiPromise(`getPillars?unit=${unit.id}`);
}).then((pillars) => {
    console.log(`Got ${pillars.length} unit pillars for business unit ${unit.id}`);

    return callApiPromise(`getTeams?pillar=${pillars[0].id}`);
}).then((teams) => {
    console.log(`Got ${teams.length} teams`);// for pillar ${pillars[0].id}`);

    return callApiPromise(`getProjectsForTeam?team=${teams[0].id}`)
}).then((projects) => {
    console.log(`Got ${projects.length} projects`);// for team ${teams[0].id}`);

    return callApiPromise(`getAssignedProjectMembers?project=${projects[0].id}`);
}).then((members) => {
    console.log(`Got ${members.length} members`);// for project ${projects[0].id}`);
}).catch((error) => {
    console.log(`Error fetching data: ${error}`);
})