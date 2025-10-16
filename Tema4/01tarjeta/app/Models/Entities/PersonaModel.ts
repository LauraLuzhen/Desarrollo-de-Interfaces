class Persona {
    private id: number;
    private nombre: string;
    private apellido: string;

    constructor(id: number, nombre: string, apellido: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
    }
    getId(): number {
        return this.id;
    }

    getNombre(): string {
        return this.nombre;
    }

    getApellido(): string {
        return this.apellido;
    }   
    
    setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    setApellido(apellido: string): void {
        this.apellido = apellido;
    }
}

export default Persona;