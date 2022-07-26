export class formTemplate {
    public fullName!: string;
    public profession!: string;
    public programmingLangFromework!: string;
    public versionControlName!: string;
    public databaseName!: string;
    public cloudTechnologiesName!: string;
    public operatingSystemName!: string;
    public projectNameOne!: string;
    public roleInProjectOne!: string;
    public projOneDuration!: string;
    public projectNameTwo!: string;
    public roleInProjectTwo!: string;
    public projTwoDuration!: string;
    public lastQualificationName!: string;
    public nameOfInstitution!: string;
    public yearOfPassing!: Date;
    public certifierName!: string;
    public achievementDescr!: string;
    public profileSummary!: string;
    constructor(fullName: string, profession: string, programmingLangFromework: string, versionControlName: string, databaseName: string, cloudTechnologiesName: string, operatingSystemName:
        string, projectNameOne: string, roleInProjectOne: string, projOneDuration: string, projectNameTwo: string, roleInProjectTwo: string, projTwoDuration: string, lastQualificationName: string,
        nameOfInstitution: string, yearOfPassing: Date, certifierName: string, achievementDescr: string, profileSummary: string) {
        this.fullName = fullName;
        this.profession = profession,
            this.programmingLangFromework = programmingLangFromework,
            this.versionControlName = versionControlName,
            this.databaseName = databaseName,
            this.cloudTechnologiesName = cloudTechnologiesName,
            this.operatingSystemName = operatingSystemName,
            this.projectNameOne = projectNameOne,
            this.roleInProjectOne = roleInProjectOne,
            this.projOneDuration = projOneDuration,
            this.projectNameTwo = projectNameTwo,
            this.roleInProjectTwo = roleInProjectTwo,
            this.projTwoDuration = projTwoDuration,
            this.lastQualificationName = lastQualificationName,
            this.nameOfInstitution = nameOfInstitution,
            this.yearOfPassing = yearOfPassing,
            this.certifierName = certifierName,
            this.achievementDescr = achievementDescr,
            this.profileSummary = profileSummary
    }
}