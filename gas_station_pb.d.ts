// package: 
// file: gas_station.proto

import * as jspb from "google-protobuf";

export class GasStation extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getPricePerGallon(): number;
  setPricePerGallon(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GasStation.AsObject;
  static toObject(includeInstance: boolean, msg: GasStation): GasStation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GasStation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GasStation;
  static deserializeBinaryFromReader(message: GasStation, reader: jspb.BinaryReader): GasStation;
}

export namespace GasStation {
  export type AsObject = {
    name: string,
    address: string,
    pricePerGallon: number,
  }
}

export class GasStationList extends jspb.Message {
  clearGasStationsList(): void;
  getGasStationsList(): Array<GasStation>;
  setGasStationsList(value: Array<GasStation>): void;
  addGasStations(value?: GasStation, index?: number): GasStation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GasStationList.AsObject;
  static toObject(includeInstance: boolean, msg: GasStationList): GasStationList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GasStationList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GasStationList;
  static deserializeBinaryFromReader(message: GasStationList, reader: jspb.BinaryReader): GasStationList;
}

export namespace GasStationList {
  export type AsObject = {
    gasStationsList: Array<GasStation.AsObject>,
  }
}

