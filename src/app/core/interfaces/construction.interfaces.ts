export interface Obra {
    _id: string;
    nombre: string;
    descripcion: string;
    direccion: string;
    fecha_inicio: Date;
    fecha_finalizacion: Date;
    telefono: string;
    tipo_obra: string;
    horario: string;
    latitud?: number;
    longitud?: number;
}
