// const machoteProducto = {
// 	categoria: 'geek',
// 	producType:"Vinil Adhesivo",
// 	sku:"0101geek010101m01",
// 	nombre:"Goku Pasado y Presente",
// 	img:{name:"img-geek-kakaroto-goku", format:"webp"},
// 	ico: {name:"ico-dm-geek-kakaroto-goku", format:"webp"},
// 	monaje:{name:"dm-geek-kakaroto-goku", format:"webp"},
// 	imgGalery:[
// 		{name:"img-geek-kakaroto-gokuo", format:"webp"}
// 	],
// 	desc:"Vinil adhesivo mate o brillante con tematica de Dragon Ball donde se representa al Goku en su iconica etapa de niño con su baculo sagrado que aparecio en la primera saga de la serie llamada 'Dragon Ball' y envolviendo todo, esta el mismo personaje pero con el aspecto iconico de Súper Saiyajin ya adulto, que aparecío en las saga llamadas 'Drgon Ball Z'.",
// 	descShort:"Vinil adhesivo mate o brillante Dragon Ball - Goku Niño y Adulto",
// 	costo:{u:150, c:'00'},
// 	descuento:[
// 		{tipo:'2x1', costo:'150.00'},
// 		{tipo:'rebaja', costo:'140'}
// 	],
// 	size:[
// 		{h:15, w:8},
// 		{h:30, w:16},
// 		{h:60, w:32},
// 		{h:100, w:85.3},
// 		{h:150, w:79.4}
// 	],
// 	producTypeSuB:["Decorativo"],
// 	cat:"Geek",
// 	CatSub:[
// 		'Anime', 'Dragon Ball', 'Goku'
// 	],
// 	destacado:[
// 		'destacados'
// 	],
// 	particularidad:[
// 		{nombre:'invertido', valor:'true'}
// 	]
// };
export default interface PlantillaProducto {
	categoria:string,
	producType:string,
	sku:string,
	nombre:string,
	img: {name:string, format:string},
	ico: {name:string, format:string},
	monaje?:{name:string, format:string},
	imgGalery?:JSON[],
	desc:string,
	descShort?:string,
	costo:{u:number, c:string},
	descuento?:JSON[],
	size?:JSON[],
	producTypeSuB?:Record<string, unknown>,
	CatSub?:Record<string, unknown>,
	destacado?:Record<string, unknown>,
	particularidad?:JSON[]
}
