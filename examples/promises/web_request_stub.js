const ERROR = "__ERROR__";
const responses = {
    "best_singer": "Taylor Swift",
    "albums/Taylor Swift": ["1989", "Red", "Fearless"],
    "song_list/1989": ["Blank Space", "Shake it Off", "All You Had to Do Was Stay"],
    "login?username=rwijtman": { id: 5 },
    "getSettings?user=5": { loadAllOrganizations: true },
    "getOrganizations?user=5&loadAllOrgs=true": [{ id: 7 }],
    "getBusinessUnits?org=7": [{ id: 12 }],
    "getPillars?unit=12": [{ id: 17 }],
    "getTeams?pillar=17": [{ id: 34 }],
    "getProjectsForTeam?team=34": [{ id: 44 }],
    "getAssignedProjectMembers?project=44": [{}, {}, {}, {}],
    "login?username=rwitman": ERROR,
}

function webRequest(api, callback, errCallback) {
    setTimeout(() => {
        const result = responses[api];
        if (result === ERROR) {
            if (errCallback) {
                errCallback("Error calling api");
            }
        } else {
            callback(responses[api]);
        }
    }, 100);
}

module.exports = webRequest;