import cliente from "../../dbConnetc.ts";
import PlantillaProducto from "../../interfaces/Productos.ts";

export default async function getCategoriaByName({params, response}:{params:{name:string, limite?:string}, response:any}){
	const db =  cliente.database("esomegusta");
	interface PlantillaProductosGet extends PlantillaProducto{
		_id:any;
	}
	const productos = db.collection<PlantillaProductosGet>("productos");

	try {
		const limite = (params.limite) ? +params.limite : 0;
		let consulta:any;
		if(limite > 0){
			consulta = await productos.find({categoria:params.name}).limit(limite).toArray();
		} else{
			consulta = await productos.find({categoria:params.name}).toArray();
		}
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