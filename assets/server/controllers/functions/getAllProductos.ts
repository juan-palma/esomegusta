import cliente from "../../dbConnetc.ts";
import PlantillaProducto from "../../interfaces/Productos.ts";

export default async function getAllProductos({ response }: { response:any  }){
	const db =  cliente.database("esomegusta");
	interface PlantillaProductosGet extends PlantillaProducto{
		_id:any;
	}
	const productos = db.collection<PlantillaProductosGet>("productos");

	try {
		const listaProductos = await productos.find({}).toArray();
		response.status = 200;
		response.body = {
			success: true,
			data: listaProductos
		};
	} catch (error) {
		console.log(error);
	}
	
}