export default class Resume {

  constructor(name, contact, experienceItems, educationItem, awardItems, skillItems) {
    this.experienceItems = experienceItems;
    this.educationItem = educationItem;
    this.awardItems = awardItems;
    this.skillItems = skillItems;
    this.name = name;
    this.contact = contact;
  }

}