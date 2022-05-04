import cliente from "../../dbConnetc.ts";
import PlantillaProducto from "../../interfaces/productos.ts";

export default async function getAllCategorias({ response }: { response:any  }){
	const db =  cliente.database("esomegusta");
	interface PlantillaProductosGet extends PlantillaProducto{
		_id:any;
	}
	const productos = db.collection<PlantillaProductosGet>("productos");

	try {
		const resulados = await productos.distinct("categoria");
		response.status = 200;
		response.body = {
			success: true,
			data: resulados
		};
	} catch (error) {
		console.log(error);
	}
	
}