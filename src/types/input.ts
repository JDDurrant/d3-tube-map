import { CardinalDirection } from "../directions";

export type Coordinates = [x: number, y: number];

export type MapStation = {
  label: string;
  labelPos?: CardinalDirection;
};

export type MapStations = Record<string, MapStation>;

export type MapNode = {
  name?: string;
  labelPos?: CardinalDirection;
  marker?: "interchange";
  coords: Coordinates;
  shiftCoords?: Coordinates;
  dir?: CardinalDirection;
};

export type MapLine = {
  name: string;
  label?: string;
  color: string;
  shiftCoords: Coordinates;
  nodes: MapNode[];
  shiftNormal?: number;
};

export type MapData = {
  stations: MapStations;
  lines: MapLine[];
};
