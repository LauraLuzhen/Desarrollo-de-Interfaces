// Guardará un objeto que actúa como un mapa de identificadores para
// tus dependencias, facilitando la inyección de las mismas en otras 
// partes de la aplicación.

const TYPES = {
    IRepositoryPersonas: Symbol.for("IRepositoryPersonas"),
    IndexVM: Symbol.for("IndexVM"),
};
export { TYPES };