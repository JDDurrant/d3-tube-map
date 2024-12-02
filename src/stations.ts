type Direction = unknown;

type StationData = {
  name: string;
  label: string;
  labelPos: Direction;
  x: number;
  y: number;
  marker: {
    marker?: string;
    line: unknown;
    color: string;
    dir: Direction;
    shiftX: number;
    shiftY: number;
    shiftNormal: number;
  }[];
};

type StationsData = Record<string, Omit<StationData, "name">>;

class Stations {
  constructor(private stations: StationsData) {}

  toArray = () => {
    var stations: StationData[] = [];
  
    for (const name in this.stations) {
      if (this.stations.hasOwnProperty(name)) {
        stations.push({
          name,
          ...this.stations[name],
        });
      }
    }
  
    return stations;
  };

  interchanges = () => {
    var interchangeStations = this.toArray();

    return interchangeStations.filter(function (station) {
      return station.marker[0].marker === "interchange";
    });
  };

  normalStations = () => {
    var stations = this.toArray();
  
    var stationStations = stations.filter(function (station) {
      return station.marker[0].marker !== "interchange";
    });
  
    var stationMarkers: any[] = [];
  
    stationStations.forEach(function (station) {
      station.marker.forEach(function (marker) {
        stationMarkers.push({
          name: station.name,
          line: marker.line,
          x: station.x,
          y: station.y,
          color: marker.color,
          dir: marker.dir,
          shiftX: marker.shiftX,
          shiftY: marker.shiftY,
          shiftNormal: marker.shiftNormal,
          labelPos: station.labelPos,
        });
      });
    });
  
    return stationMarkers;
  };
}

export default function stationsList(stations: StationsData) {
  return new Stations(stations);
}
