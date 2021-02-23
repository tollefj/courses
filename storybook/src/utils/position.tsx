import { LocationLatLon, LocationUTM } from "../sharedTypes/Ncf";

export function UTMtoString(utm: LocationUTM) {
    return `${utm.X}, ${utm.Y}, ${utm.Z}`;
}
