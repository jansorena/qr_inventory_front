export interface EquipoParlante {
    id: string;
    tipo: string;
    marca: string;
    modelo: string;
    ubicacion: string;
    potencia: string;
    cantidadAltavoces: number;
    bluetooth: boolean;
}

export interface EquipoParlanteProps {
    equipo: EquipoParlante  | null;
}

export interface HeroProps {
  equipo: EquipoParlante | null;
}