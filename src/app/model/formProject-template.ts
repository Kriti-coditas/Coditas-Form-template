export class formProjectTemplate {
    public projectName!: string;
    public roleInProject!: string;
    public projectDuration!: string;
    constructor(projectName: string, roleInProject: string, projectDuration: string) {
        this.projectName = projectName,
        this.roleInProject = roleInProject,
        this.projectDuration = projectDuration
    }
}
