import mixpanel from "mixpanel-browser";

export function trackHomePageVisited() {
    mixpanel.track('Home page visited')
}

export function trackExperienceInterest(companyName: string) {
    mixpanel.track('Interested in experience', {companyName})
}

export function trackPivotalClientInterest(projectName: string) {
    mixpanel.track('Interested in Pivotal Product', {projectName})
}

export function trackAuthorisedToViewProducts() {
    mixpanel.track('Page visited with ability to see Pivotal Products')
}

export function trackTogglingPivotalProjects(toggledOn: boolean) {
    if (toggledOn) {
        mixpanel.track('Showing Pivotal Clients')
    } else {
        mixpanel.track('Hiding Pivotal Clients')
    }
}

export function trackInterestInReview(reviewerName: string) {
    mixpanel.track('Interest in Review', {reviewerName})
}

export function trackTogglingReviews(toggledOn: boolean) {
    if (toggledOn) {
        mixpanel.track('Showing Reviews')
    } else {
        mixpanel.track('Hiding Reviews')
    }
}

export function trackInterestInProject(projectName: string) {
    mixpanel.track('Interest in project', {projectName})
}

export function trackInterestInLink(linkName: string) {
    mixpanel.track('Clicked on link', {linkName})
}

export function trackInterestInVolunteering(orgName: string) {
    mixpanel.track('Interest in volunteering', {orgName})
}

export function trackScrollPast(sectionName: string) {
    mixpanel.track('Scrolled past section', {sectionName})
}

export function trackNearBottom() {
    mixpanel.track('User scrolled to the bottom')
}

export function trackProjectLinkClick(projectName: string, link: string) {
    mixpanel.track('Clicked project link', {projectName, link})
}