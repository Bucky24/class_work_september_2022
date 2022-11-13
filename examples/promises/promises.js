const callApi = require("./web_request_stub");

callApi("login?username=rwijtman", (user) => {
    console.log(`Got user ${user.id}`);

    callApi(`getSettings?user=${user.id}`, (settings) => {
        console.log("Got settings for user");

        callApi(`getOrganizations?user=${user.id}&loadAllOrgs=${settings.loadAllOrganizations}`, (organizations) => {
            console.log(`Got ${organizations.length} organizations`);

            callApi(`getBusinessUnits?org=${organizations[0].id}`, (units) => {
                console.log(`Got ${units.length} business units for organization ${organizations[0].id}`);

                callApi(`getPillars?unit=${units[0].id}`, (pillars) => {
                    console.log(`Got ${pillars.length} unit pillars for business unit ${units[0].id}`);

                    callApi(`getTeams?pillar=${pillars[0].id}`, (teams) => {
                        console.log(`Got ${teams.length} teams for pillar ${pillars[0].id}`);

                        callApi(`getProjectsForTeam?team=${teams[0].id}`, (projects) => {
                            console.log(`Got ${projects.length} projects for team ${teams[0].id}`);

                            callApi(`getAssignedProjectMembers?project=${projects[0].id}`, (members) => {
                                console.log(`Got ${members.length} members for project ${projects[0].id}`);
                            });
                        });
                    });
                });
            });
        });
    });
});
