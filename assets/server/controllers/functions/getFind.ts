import cliente from "../../dbConnetc.ts";
import PlantillaProducto from "../../interfaces/productos.ts";
import { Bson } from "../../deps.ts";
const { ObjectId } = Bson;


export default async function getFind({params, response}:{params:{text:string}, response:any}){
	const db =  cliente.database("esomegusta");
	interface PlantillaProductosGet extends PlantillaProducto{
		_id:typeof ObjectId | string;
	}
	const productos = db.collection<PlantillaProductosGet>("productos");

	try {
		//const consulta = await productos.find({ $text: { $search: `"\"${params.text}\""` } }).limit(8).toArray();
		const consulta = await productos.aggregate([{$match: { $text: { $search: `"\"${params.text}\""` }}}, {$project:{"nombre":1}}, {$sort:{score:{$meta:"textScore"}}}, {$limit:16}]).toArray();
		if(consulta.length <= 0){
			response.status = 400;
			response.body = {
				success: false,
				message: "No value find"
			};
			return;
		}
		
		response.status = 200;
		response.body = {
			success: true,
			data: consulta
		};
	} catch (error) {
		console.log(error);
	}
}