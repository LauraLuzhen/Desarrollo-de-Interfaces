export class Connection {
    private static readonly BASE_URL = "https://ui20251201140912-echufmbcephkfyfc.francecentral-01.azurewebsites.net/";

    static getPersonasEndpoint(): string {
        return `${this.BASE_URL}/Personas`;
    }

    static getDepartamentosEndpoint(): string {
        return `${this.BASE_URL}/Departamentos`;
    }
}
