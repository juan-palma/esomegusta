import { Bson, MongoClient } from "./deps.ts";

const cliente = new MongoClient();
//connection to a local database
await cliente.connect("mongodb://localhost:27017");
export default cliente;