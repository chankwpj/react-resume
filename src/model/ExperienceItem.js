export default class ExperienceItem {

  constructor(companyName, jobTitle, from, to,
    location, team, descriptions, techStacks) {
    this.companyName = companyName;
    this.jobTitle = jobTitle;
    this.from = from;
    this.to = to;
    this.location = location;
    this.team = team;
    this.descriptions = descriptions;
    this.techStacks = techStacks;
  }

}