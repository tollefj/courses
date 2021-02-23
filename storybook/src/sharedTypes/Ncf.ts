export interface DateRange {
    start: Date
    end: Date
}

export interface LocationUTM {
    X: string
    Y: string
    Z: string
}

export interface LocationLatLon {
    lat: string
    lon: string
}

export interface NcfFileInfo {
    creationDate: Date
    createdBy: string
}

export interface NcfMetadata {
    time: DateRange
    project: string
    documentation: string
    location: string
    position: LocationUTM
    file: NcfFileInfo
}