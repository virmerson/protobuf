            import * as fs from 'fs';
import { GasStationList, GasStation } from './gas_station_pb';

const gasStations = new GasStationList();
const station1 = new GasStation();
station1.setName('Galp');
station1.setAddress('Rua da Alegria');
station1.setPricePerGallon(1.5);

const station2 = new GasStation();
station2.setName('Sheal');
station2.setAddress('Rua da Tristeza');
station2.setPricePerGallon(1.6);

gasStations.addGasStations(station1);
gasStations.addGasStations(station2);


const json = JSON.stringify(gasStations.toObject());
fs.writeFileSync('gas_stations.json', json);
const jsonSize = fs.statSync('gas_stations.json').size;
console.log(`JSON size: ${jsonSize} bytes`);

const binary = gasStations.serializeBinary();
fs.writeFileSync('gas_stations.binary', binary);
const binarySize = fs.statSync('gas_stations.binary').size;

console.log(`Binary size: ${binarySize} bytes`);
console.log(`Binary is ${jsonSize / binarySize} times smaller than JSON`);


console.log('JSON:', json);
console.log('Binary:', binary); 