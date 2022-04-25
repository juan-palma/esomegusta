/*::::::::::::::::::::::::::::::
	Codigo de Juan Palma
::::::::::::::::::::::::::::::*/
const idagl = {};
idagl.elementos = {};
const el = idagl.elementos;



const destacadosInfo = [
	{
		sku:"0101geek010101m01",
		nombre:"Goku Pasado y Presente",
		img:{name:"dm-geek-kakaroto-goku", format:"webp"},
		ico: {name:"ico-dm-geek-kakaroto-goku", format:"webp"},
		desc:"Vinil adhesivo mate o brillante con tematica de Dragon Ball donde se representa al Goku en su iconica etapa de niño con su baculo sagrado que aparecio en la primera saga de la serie llamada 'Dragon Ball' y envolviendo todo, esta el mismo personaje pero con el aspecto iconico de Súper Saiyajin ya adulto, que aparecío en las saga llamadas 'Drgon Ball Z'.",
		costo:{u:150, c:'00'},
		descuento:"null",
		size:[
			{h:15, w:8},
			{h:30, w:16},
			{h:60, w:32},
			{h:100, w:85.3},
			{h:150, w:79.4}
		],
		producType:"Vinil Adhesivo",
		producTypeSuB:["Decorativo"],
		cat:"Geek",
		CatSub:[
			'Anime', 'Dragon Ball', 'Goku'
		]
	},
	{
		sku:"0101geek010101m01",
		nombre:"Gym Bed Life go Hard",
		img:{name:"dm-f-gym-bed-life", format:"webp"},
		ico: {name:"ico-dm-f-gym-bed-life", format:"webp"},
		desc:"Vinil adhesivo mate o brillante con tematica GYM, para motivarte a realizar esa rutia sin pretextos :)",
		costo:{u:150, c:'00'},
		descuento:"null",
		size:[
			{h:15, w:12.7},
			{h:30, w:25.4},
			{h:60, w:50.8},
			{h:100, w:84.3},
			{h:150, w:127.2}
		],
		producType:"Vinil Adhesivo",
		producTypeSuB:["Decorativo"],
		cat:"Frases",
		CatSub:[
			'Motivacional', 'gym'
		]
	},
	{
		sku:"0101geek010101m01",
		nombre:"En los momentos Obscuros 1",
		img:{name:"dm-f-momentos-obscuros", format:"webp"},
		ico: {name:"ico-dm-f-momentos-obscuros", format:"webp"},
		desc:"Vinil adhesivo mate o brillante con frase 'Es durant nuestros momentos más oscuros cuando tenemos que centrarnos para ver la luz' y la figura de una luna y un lobo sobre un risco",
		costo:{u:150, c:'00'},
		descuento:"null",
		size:[
			{h:11.9, w:15},
			{h:23.8, w:30},
			{h:47.7, w:60},
			{h:79.5, w:100},
			{h:119.2, w:150}
		],
		producType:"Vinil Adhesivo",
		producTypeSuB:["Decorativo"],
		cat:"Frases",
		CatSub:[
			'Motivacional', 'momentos', 'obscuros'
		]
	},
	{
		sku:"0101geek010101m01",
		nombre:"Majora's Mask - Zelda",
		img:{name:"dm-geek-majora-s-mask", format:"webp"},
		ico: {name:"ico-dm-geek-majora-s-mask", format:"webp"},
		desc:"Vinil adhesivo mate o brillante con tematica de Zelda, La iconica Majora's Mask del videojuego. ",
		costo:{u:150, c:'00'},
		descuento:"null",
		size:[
			{h:12.6, w:15},
			{h:25.2, w:30},
			{h:50.5, w:60},
			{h:84.1, w:100},
			{h:126.2, w:150}
		],
		producType:"Vinil Adhesivo",
		producTypeSuB:["Decorativo"],
		cat:"Geek",
		CatSub:[
			'Game', 'Zelda', 'Majora\'s Mask'
		]
	},
	{
		sku:"0101geek010101m01",
		nombre:"Pleitesía de la que da alegría",
		img:{name:"dm-d-chica-de-rodillas", format:"webp"},
		ico: {name:"ico-dm-d-chica-de-rodillas", format:"webp"},
		desc:"Vinil adhesivo mate o brillante con tematica  sensual - erotica de una chica rubia de rodillas desnuda.",
		costo:{u:150, c:'00'},
		descuento:"null",
		size:[
			{h:15, w:9.4},
			{h:30, w:18.8},
			{h:60, w:37.6},
			{h:100, w:62.7},
			{h:150, w:94.1}
		],
		producType:"Vinil Adhesivo",
		producTypeSuB:["Decorativo"],
		cat:"sensual",
		CatSub:[
			'Sensual', 'Mujeres', 'Pleiteisa 1'
		]
	},
	{
		sku:"0101geek010101m01",
		nombre:"Kill Bill Gogo Yubari",
		img:{name:"dm-geek-kill-bill-gogo", format:"webp"},
		ico: {name:"ico-dm-geek-kill-bill-gogo", format:"webp"},
		desc:"Vinil adhesivo mate o brillante con tematica de la pelicula Kill Bill, el personaje de Gogo Yubari la chica peleadora con la bola con picos.",
		costo:{u:150, c:'00'},
		descuento:"null",
		size:[
			{h:14.2, w:15},
			{h:28.5, w:30},
			{h:57.1, w:60},
			{h:95.2, w:100},
			{h:142.9, w:150}
		],
		producType:"Vinil Adhesivo",
		producTypeSuB:["Decorativo"],
		cat:"Geek",
		CatSub:[
			'Movie', 'Kill Bill', 'Gogo Yubari'
		]
	}
];



const productos = [
	{
		categoria: 'geek',
		categoriaID: '01',
		productos: [
		{
			sku:"0101geek010101m01",
			nombre:"Goku Pasado y Presente",
			img:{name:"dm-geek-kakaroto-goku", format:"webp"},
			ico: {name:"ico-dm-geek-kakaroto-goku", format:"webp"},
			monaje:{name:"dm-geek-kakaroto-goku", format:"webp"},
			desc:"Vinil adhesivo mate o brillante con tematica de Dragon Ball donde se representa al Goku en su iconica etapa de niño con su baculo sagrado que aparecio en la primera saga de la serie llamada 'Dragon Ball' y envolviendo todo, esta el mismo personaje pero con el aspecto iconico de Súper Saiyajin ya adulto, que aparecío en las saga llamadas 'Drgon Ball Z'.",
			costo:{u:150, c:'00'},
			descuento:[
				{tipo:'2x1', costo:'150.00'},
				{tipo:'rebaja', costo:'140'}
			],
			size:[
				{h:15, w:8},
				{h:30, w:16},
				{h:60, w:32},
				{h:100, w:85.3},
				{h:150, w:79.4}
			],
			producType:"Vinil Adhesivo",
			producTypeSuB:["Decorativo"],
			cat:"Geek",
			CatSub:[
				'Anime', 'Dragon Ball', 'Goku'
			],
			propios:[
				{nombre:'invertido', valor:'true'}
			],
			user:{
				commprado: {status:'false', cantidad:0},
				carrito: {status:'false', cantidad:0},
				favoritos: {status:'false', lista:['me-gusta']}
			}
		},
		{
			sku:"0101geek010101m01",
			nombre:"Goku Pasado y Presente",
			img:{name:"dm-geek-kakaroto-goku", format:"webp"},
			ico: {name:"ico-dm-geek-kakaroto-goku", format:"webp"},
			monaje:{name:"dm-geek-kakaroto-goku", format:"webp"},
			desc:"Vinil adhesivo mate o brillante con tematica de Dragon Ball donde se representa al Goku en su iconica etapa de niño con su baculo sagrado que aparecio en la primera saga de la serie llamada 'Dragon Ball' y envolviendo todo, esta el mismo personaje pero con el aspecto iconico de Súper Saiyajin ya adulto, que aparecío en las saga llamadas 'Drgon Ball Z'.",
			costo:{u:150, c:'00'},
			descuento:[
				{tipo:'2x1', costo:'150.00'},
				{tipo:'rebaja', costo:'140'}
			],
			size:[
				{h:15, w:8},
				{h:30, w:16},
				{h:60, w:32},
				{h:100, w:85.3},
				{h:150, w:79.4}
			],
			producType:"Vinil Adhesivo",
			producTypeSuB:["Decorativo"],
			cat:"Geek",
			CatSub:[
				'Anime', 'Dragon Ball', 'Goku'
			],
			propios:[
				{nombre:'invertido', valor:'true'}
			],
			user:{
				commprado: {status:'false', cantidad:0},
				carrito: {status:'false', cantidad:0},
				favoritos: {status:'true', lista:['me-gusta']}
			}
		},
		{
			sku:"0101geek010101m01",
			nombre:"Goku Pasado y Presente",
			img:{name:"dm-geek-kakaroto-goku", format:"webp"},
			ico: {name:"ico-dm-geek-kakaroto-goku", format:"webp"},
			monaje:{name:"dm-geek-kakaroto-goku", format:"webp"},
			desc:"Vinil adhesivo mate o brillante con tematica de Dragon Ball donde se representa al Goku en su iconica etapa de niño con su baculo sagrado que aparecio en la primera saga de la serie llamada 'Dragon Ball' y envolviendo todo, esta el mismo personaje pero con el aspecto iconico de Súper Saiyajin ya adulto, que aparecío en las saga llamadas 'Drgon Ball Z'.",
			costo:{u:150, c:'00'},
			descuento:[
				{tipo:'2x1', costo:'150.00'},
				{tipo:'rebaja', costo:'140'}
			],
			size:[
				{h:15, w:8},
				{h:30, w:16},
				{h:60, w:32},
				{h:100, w:85.3},
				{h:150, w:79.4}
			],
			producType:"Vinil Adhesivo",
			producTypeSuB:["Decorativo"],
			cat:"Geek",
			CatSub:[
				'Anime', 'Dragon Ball', 'Goku'
			],
			propios:[
				{nombre:'invertido', valor:'true'}
			],
			user:{
				commprado: {status:'false', cantidad:0},
				carrito: {status:'false', cantidad:0},
				favoritos: {status:'false', lista:['me-gusta']}
			}
		},
		{
			sku:"0101geek010101m01",
			nombre:"Goku Pasado y Presente",
			img:{name:"dm-geek-kakaroto-goku", format:"webp"},
			ico: {name:"ico-dm-geek-kakaroto-goku", format:"webp"},
			monaje:{name:"dm-geek-kakaroto-goku", format:"webp"},
			desc:"Vinil adhesivo mate o brillante con tematica de Dragon Ball donde se representa al Goku en su iconica etapa de niño con su baculo sagrado que aparecio en la primera saga de la serie llamada 'Dragon Ball' y envolviendo todo, esta el mismo personaje pero con el aspecto iconico de Súper Saiyajin ya adulto, que aparecío en las saga llamadas 'Drgon Ball Z'.",
			costo:{u:150, c:'00'},
			descuento:[
				{tipo:'2x1', costo:'150.00'},
				{tipo:'rebaja', costo:'140'}
			],
			size:[
				{h:15, w:8},
				{h:30, w:16},
				{h:60, w:32},
				{h:100, w:85.3},
				{h:150, w:79.4}
			],
			producType:"Vinil Adhesivo",
			producTypeSuB:["Decorativo"],
			cat:"Geek",
			CatSub:[
				'Anime', 'Dragon Ball', 'Goku'
			],
			propios:[
				{nombre:'invertido', valor:'true'}
			],
			user:{
				commprado: {status:'false', cantidad:0},
				carrito: {status:'false', cantidad:0},
				favoritos: {status:'false', lista:['me-gusta']}
			}
		},
		{
			sku:"0101geek010101m01",
			nombre:"Goku Pasado y Presente",
			img:{name:"dm-geek-kakaroto-goku", format:"webp"},
			ico: {name:"ico-dm-geek-kakaroto-goku", format:"webp"},
			monaje:{name:"dm-geek-kakaroto-goku", format:"webp"},
			desc:"Vinil adhesivo mate o brillante con tematica de Dragon Ball donde se representa al Goku en su iconica etapa de niño con su baculo sagrado que aparecio en la primera saga de la serie llamada 'Dragon Ball' y envolviendo todo, esta el mismo personaje pero con el aspecto iconico de Súper Saiyajin ya adulto, que aparecío en las saga llamadas 'Drgon Ball Z'.",
			costo:{u:150, c:'00'},
			descuento:[
				{tipo:'2x1', costo:'150.00'},
				{tipo:'rebaja', costo:'140'}
			],
			size:[
				{h:15, w:8},
				{h:30, w:16},
				{h:60, w:32},
				{h:100, w:85.3},
				{h:150, w:79.4}
			],
			producType:"Vinil Adhesivo",
			producTypeSuB:["Decorativo"],
			cat:"Geek",
			CatSub:[
				'Anime', 'Dragon Ball', 'Goku'
			],
			propios:[
				{nombre:'invertido', valor:'true'}
			],
			user:{
				commprado: {status:'false', cantidad:0},
				carrito: {status:'false', cantidad:0},
				favoritos: {status:'false', lista:['me-gusta']}
			}
		},
		{
			sku:"0101geek010101m01",
			nombre:"Goku Pasado y Presente",
			img:{name:"dm-geek-kakaroto-goku", format:"webp"},
			ico: {name:"ico-dm-geek-kakaroto-goku", format:"webp"},
			monaje:{name:"dm-geek-kakaroto-goku", format:"webp"},
			desc:"Vinil adhesivo mate o brillante con tematica de Dragon Ball donde se representa al Goku en su iconica etapa de niño con su baculo sagrado que aparecio en la primera saga de la serie llamada 'Dragon Ball' y envolviendo todo, esta el mismo personaje pero con el aspecto iconico de Súper Saiyajin ya adulto, que aparecío en las saga llamadas 'Drgon Ball Z'.",
			costo:{u:150, c:'00'},
			descuento:[
				{tipo:'2x1', costo:'150.00'},
				{tipo:'rebaja', costo:'140'}
			],
			size:[
				{h:15, w:8},
				{h:30, w:16},
				{h:60, w:32},
				{h:100, w:85.3},
				{h:150, w:79.4}
			],
			producType:"Vinil Adhesivo",
			producTypeSuB:["Decorativo"],
			cat:"Geek",
			CatSub:[
				'Anime', 'Dragon Ball', 'Goku'
			],
			propios:[
				{nombre:'invertido', valor:'true'}
			],
			user:{
				commprado: {status:'false', cantidad:0},
				carrito: {status:'false', cantidad:0},
				favoritos: {status:'false', lista:['me-gusta']}
			}
		}
		]
	},


	{
		categoria: 'frases',
		categoriaID: '02',
		productos: [
		{
			sku:"0101geek010101m01",
			nombre:"Goku Pasado y Presente",
			img:{name:"dm-geek-kakaroto-goku", format:"webp"},
			ico: {name:"ico-dm-geek-kakaroto-goku", format:"webp"},
			monaje:{name:"dm-geek-kakaroto-goku", format:"webp"},
			desc:"Vinil adhesivo mate o brillante con tematica de Dragon Ball donde se representa al Goku en su iconica etapa de niño con su baculo sagrado que aparecio en la primera saga de la serie llamada 'Dragon Ball' y envolviendo todo, esta el mismo personaje pero con el aspecto iconico de Súper Saiyajin ya adulto, que aparecío en las saga llamadas 'Drgon Ball Z'.",
			costo:{u:150, c:'00'},
			descuento:[
				{tipo:'2x1', costo:'150.00'},
				{tipo:'rebaja', costo:'140'}
			],
			size:[
				{h:15, w:8},
				{h:30, w:16},
				{h:60, w:32},
				{h:100, w:85.3},
				{h:150, w:79.4}
			],
			producType:"Vinil Adhesivo",
			producTypeSuB:["Decorativo"],
			cat:"Geek",
			CatSub:[
				'Anime', 'Dragon Ball', 'Goku'
			],
			propios:[
				{nombre:'invertido', valor:'true'}
			],
			user:{
				commprado: {status:'false', cantidad:0},
				carrito: {status:'false', cantidad:0},
				favoritos: {status:'false', lista:['me-gusta']}
			}
		},
		{
			sku:"0101geek010101m01",
			nombre:"Goku Pasado y Presente",
			img:{name:"dm-geek-kakaroto-goku", format:"webp"},
			ico: {name:"ico-dm-geek-kakaroto-goku", format:"webp"},
			monaje:{name:"dm-geek-kakaroto-goku", format:"webp"},
			desc:"Vinil adhesivo mate o brillante con tematica de Dragon Ball donde se representa al Goku en su iconica etapa de niño con su baculo sagrado que aparecio en la primera saga de la serie llamada 'Dragon Ball' y envolviendo todo, esta el mismo personaje pero con el aspecto iconico de Súper Saiyajin ya adulto, que aparecío en las saga llamadas 'Drgon Ball Z'.",
			costo:{u:150, c:'00'},
			descuento:[
				{tipo:'2x1', costo:'150.00'},
				{tipo:'rebaja', costo:'140'}
			],
			size:[
				{h:15, w:8},
				{h:30, w:16},
				{h:60, w:32},
				{h:100, w:85.3},
				{h:150, w:79.4}
			],
			producType:"Vinil Adhesivo",
			producTypeSuB:["Decorativo"],
			cat:"Geek",
			CatSub:[
				'Anime', 'Dragon Ball', 'Goku'
			],
			propios:[
				{nombre:'invertido', valor:'true'}
			],
			user:{
				commprado: {status:'false', cantidad:0},
				carrito: {status:'false', cantidad:0},
				favoritos: {status:'false', lista:['me-gusta']}
			}
		},
		{
			sku:"0101geek010101m01",
			nombre:"Goku Pasado y Presente",
			img:{name:"dm-geek-kakaroto-goku", format:"webp"},
			ico: {name:"ico-dm-geek-kakaroto-goku", format:"webp"},
			monaje:{name:"dm-geek-kakaroto-goku", format:"webp"},
			desc:"Vinil adhesivo mate o brillante con tematica de Dragon Ball donde se representa al Goku en su iconica etapa de niño con su baculo sagrado que aparecio en la primera saga de la serie llamada 'Dragon Ball' y envolviendo todo, esta el mismo personaje pero con el aspecto iconico de Súper Saiyajin ya adulto, que aparecío en las saga llamadas 'Drgon Ball Z'.",
			costo:{u:150, c:'00'},
			descuento:[
				{tipo:'2x1', costo:'150.00'},
				{tipo:'rebaja', costo:'140'}
			],
			size:[
				{h:15, w:8},
				{h:30, w:16},
				{h:60, w:32},
				{h:100, w:85.3},
				{h:150, w:79.4}
			],
			producType:"Vinil Adhesivo",
			producTypeSuB:["Decorativo"],
			cat:"Geek",
			CatSub:[
				'Anime', 'Dragon Ball', 'Goku'
			],
			propios:[
				{nombre:'invertido', valor:'true'}
			],
			user:{
				commprado: {status:'false', cantidad:0},
				carrito: {status:'false', cantidad:0},
				favoritos: {status:'false', lista:['me-gusta']}
			}
		},
		{
			sku:"0101geek010101m01",
			nombre:"Goku Pasado y Presente",
			img:{name:"dm-geek-kakaroto-goku", format:"webp"},
			ico: {name:"ico-dm-geek-kakaroto-goku", format:"webp"},
			monaje:{name:"dm-geek-kakaroto-goku", format:"webp"},
			desc:"Vinil adhesivo mate o brillante con tematica de Dragon Ball donde se representa al Goku en su iconica etapa de niño con su baculo sagrado que aparecio en la primera saga de la serie llamada 'Dragon Ball' y envolviendo todo, esta el mismo personaje pero con el aspecto iconico de Súper Saiyajin ya adulto, que aparecío en las saga llamadas 'Drgon Ball Z'.",
			costo:{u:150, c:'00'},
			descuento:[
				{tipo:'2x1', costo:'150.00'},
				{tipo:'rebaja', costo:'140'}
			],
			size:[
				{h:15, w:8},
				{h:30, w:16},
				{h:60, w:32},
				{h:100, w:85.3},
				{h:150, w:79.4}
			],
			producType:"Vinil Adhesivo",
			producTypeSuB:["Decorativo"],
			cat:"Geek",
			CatSub:[
				'Anime', 'Dragon Ball', 'Goku'
			],
			propios:[
				{nombre:'invertido', valor:'true'}
			],
			user:{
				commprado: {status:'false', cantidad:0},
				carrito: {status:'false', cantidad:0},
				favoritos: {status:'false', lista:['me-gusta']}
			}
		},
		{
			sku:"0101geek010101m01",
			nombre:"Goku Pasado y Presente",
			img:{name:"dm-geek-kakaroto-goku", format:"webp"},
			ico: {name:"ico-dm-geek-kakaroto-goku", format:"webp"},
			monaje:{name:"dm-geek-kakaroto-goku", format:"webp"},
			desc:"Vinil adhesivo mate o brillante con tematica de Dragon Ball donde se representa al Goku en su iconica etapa de niño con su baculo sagrado que aparecio en la primera saga de la serie llamada 'Dragon Ball' y envolviendo todo, esta el mismo personaje pero con el aspecto iconico de Súper Saiyajin ya adulto, que aparecío en las saga llamadas 'Drgon Ball Z'.",
			costo:{u:150, c:'00'},
			descuento:[
				{tipo:'2x1', costo:'150.00'},
				{tipo:'rebaja', costo:'140'}
			],
			size:[
				{h:15, w:8},
				{h:30, w:16},
				{h:60, w:32},
				{h:100, w:85.3},
				{h:150, w:79.4}
			],
			producType:"Vinil Adhesivo",
			producTypeSuB:["Decorativo"],
			cat:"Geek",
			CatSub:[
				'Anime', 'Dragon Ball', 'Goku'
			],
			propios:[
				{nombre:'invertido', valor:'true'}
			],
			user:{
				commprado: {status:'false', cantidad:0},
				carrito: {status:'false', cantidad:0},
				favoritos: {status:'false', lista:['me-gusta']}
			}
		},
		{
			sku:"0101geek010101m01",
			nombre:"Goku Pasado y Presente",
			img:{name:"dm-geek-kakaroto-goku", format:"webp"},
			ico: {name:"ico-dm-geek-kakaroto-goku", format:"webp"},
			monaje:{name:"dm-geek-kakaroto-goku", format:"webp"},
			desc:"Vinil adhesivo mate o brillante con tematica de Dragon Ball donde se representa al Goku en su iconica etapa de niño con su baculo sagrado que aparecio en la primera saga de la serie llamada 'Dragon Ball' y envolviendo todo, esta el mismo personaje pero con el aspecto iconico de Súper Saiyajin ya adulto, que aparecío en las saga llamadas 'Drgon Ball Z'.",
			costo:{u:150, c:'00'},
			descuento:[
				{tipo:'2x1', costo:'150.00'},
				{tipo:'rebaja', costo:'140'}
			],
			size:[
				{h:15, w:8},
				{h:30, w:16},
				{h:60, w:32},
				{h:100, w:85.3},
				{h:150, w:79.4}
			],
			producType:"Vinil Adhesivo",
			producTypeSuB:["Decorativo"],
			cat:"Geek",
			CatSub:[
				'Anime', 'Dragon Ball', 'Goku'
			],
			propios:[
				{nombre:'invertido', valor:'true'}
			],
			user:{
				commprado: {status:'false', cantidad:0},
				carrito: {status:'false', cantidad:0},
				favoritos: {status:'false', lista:['me-gusta']}
			}
		}
		]
	},


	{
		categoria: 'naturaleza',
		categoriaID: '03',
		productos: [
		{
			sku:"0101geek010101m01",
			nombre:"Goku Pasado y Presente",
			img:{name:"dm-geek-kakaroto-goku", format:"webp"},
			ico: {name:"ico-dm-geek-kakaroto-goku", format:"webp"},
			monaje:{name:"dm-geek-kakaroto-goku", format:"webp"},
			desc:"Vinil adhesivo mate o brillante con tematica de Dragon Ball donde se representa al Goku en su iconica etapa de niño con su baculo sagrado que aparecio en la primera saga de la serie llamada 'Dragon Ball' y envolviendo todo, esta el mismo personaje pero con el aspecto iconico de Súper Saiyajin ya adulto, que aparecío en las saga llamadas 'Drgon Ball Z'.",
			costo:{u:150, c:'00'},
			descuento:[
				{tipo:'2x1', costo:'150.00'},
				{tipo:'rebaja', costo:'140'}
			],
			size:[
				{h:15, w:8},
				{h:30, w:16},
				{h:60, w:32},
				{h:100, w:85.3},
				{h:150, w:79.4}
			],
			producType:"Vinil Adhesivo",
			producTypeSuB:["Decorativo"],
			cat:"Geek",
			CatSub:[
				'Anime', 'Dragon Ball', 'Goku'
			],
			propios:[
				{nombre:'invertido', valor:'true'}
			],
			user:{
				commprado: {status:'false', cantidad:0},
				carrito: {status:'false', cantidad:0},
				favoritos: {status:'false', lista:['me-gusta']}
			}
		},
		{
			sku:"0101geek010101m01",
			nombre:"Goku Pasado y Presente",
			img:{name:"dm-geek-kakaroto-goku", format:"webp"},
			ico: {name:"ico-dm-geek-kakaroto-goku", format:"webp"},
			monaje:{name:"dm-geek-kakaroto-goku", format:"webp"},
			desc:"Vinil adhesivo mate o brillante con tematica de Dragon Ball donde se representa al Goku en su iconica etapa de niño con su baculo sagrado que aparecio en la primera saga de la serie llamada 'Dragon Ball' y envolviendo todo, esta el mismo personaje pero con el aspecto iconico de Súper Saiyajin ya adulto, que aparecío en las saga llamadas 'Drgon Ball Z'.",
			costo:{u:150, c:'00'},
			descuento:[
				{tipo:'2x1', costo:'150.00'},
				{tipo:'rebaja', costo:'140'}
			],
			size:[
				{h:15, w:8},
				{h:30, w:16},
				{h:60, w:32},
				{h:100, w:85.3},
				{h:150, w:79.4}
			],
			producType:"Vinil Adhesivo",
			producTypeSuB:["Decorativo"],
			cat:"Geek",
			CatSub:[
				'Anime', 'Dragon Ball', 'Goku'
			],
			propios:[
				{nombre:'invertido', valor:'true'}
			],
			user:{
				commprado: {status:'false', cantidad:0},
				carrito: {status:'false', cantidad:0},
				favoritos: {status:'false', lista:['me-gusta']}
			}
		},
		{
			sku:"0101geek010101m01",
			nombre:"Goku Pasado y Presente",
			img:{name:"dm-geek-kakaroto-goku", format:"webp"},
			ico: {name:"ico-dm-geek-kakaroto-goku", format:"webp"},
			monaje:{name:"dm-geek-kakaroto-goku", format:"webp"},
			desc:"Vinil adhesivo mate o brillante con tematica de Dragon Ball donde se representa al Goku en su iconica etapa de niño con su baculo sagrado que aparecio en la primera saga de la serie llamada 'Dragon Ball' y envolviendo todo, esta el mismo personaje pero con el aspecto iconico de Súper Saiyajin ya adulto, que aparecío en las saga llamadas 'Drgon Ball Z'.",
			costo:{u:150, c:'00'},
			descuento:[
				{tipo:'2x1', costo:'150.00'},
				{tipo:'rebaja', costo:'140'}
			],
			size:[
				{h:15, w:8},
				{h:30, w:16},
				{h:60, w:32},
				{h:100, w:85.3},
				{h:150, w:79.4}
			],
			producType:"Vinil Adhesivo",
			producTypeSuB:["Decorativo"],
			cat:"Geek",
			CatSub:[
				'Anime', 'Dragon Ball', 'Goku'
			],
			propios:[
				{nombre:'invertido', valor:'true'}
			],
			user:{
				commprado: {status:'false', cantidad:0},
				carrito: {status:'false', cantidad:0},
				favoritos: {status:'false', lista:['me-gusta']}
			}
		},
		{
			sku:"0101geek010101m01",
			nombre:"Goku Pasado y Presente",
			img:{name:"dm-geek-kakaroto-goku", format:"webp"},
			ico: {name:"ico-dm-geek-kakaroto-goku", format:"webp"},
			monaje:{name:"dm-geek-kakaroto-goku", format:"webp"},
			desc:"Vinil adhesivo mate o brillante con tematica de Dragon Ball donde se representa al Goku en su iconica etapa de niño con su baculo sagrado que aparecio en la primera saga de la serie llamada 'Dragon Ball' y envolviendo todo, esta el mismo personaje pero con el aspecto iconico de Súper Saiyajin ya adulto, que aparecío en las saga llamadas 'Drgon Ball Z'.",
			costo:{u:150, c:'00'},
			descuento:[
				{tipo:'2x1', costo:'150.00'},
				{tipo:'rebaja', costo:'140'}
			],
			size:[
				{h:15, w:8},
				{h:30, w:16},
				{h:60, w:32},
				{h:100, w:85.3},
				{h:150, w:79.4}
			],
			producType:"Vinil Adhesivo",
			producTypeSuB:["Decorativo"],
			cat:"Geek",
			CatSub:[
				'Anime', 'Dragon Ball', 'Goku'
			],
			propios:[
				{nombre:'invertido', valor:'true'}
			],
			user:{
				commprado: {status:'false', cantidad:0},
				carrito: {status:'false', cantidad:0},
				favoritos: {status:'false', lista:['me-gusta']}
			}
		},
		{
			sku:"0101geek010101m01",
			nombre:"Goku Pasado y Presente",
			img:{name:"dm-geek-kakaroto-goku", format:"webp"},
			ico: {name:"ico-dm-geek-kakaroto-goku", format:"webp"},
			monaje:{name:"dm-geek-kakaroto-goku", format:"webp"},
			desc:"Vinil adhesivo mate o brillante con tematica de Dragon Ball donde se representa al Goku en su iconica etapa de niño con su baculo sagrado que aparecio en la primera saga de la serie llamada 'Dragon Ball' y envolviendo todo, esta el mismo personaje pero con el aspecto iconico de Súper Saiyajin ya adulto, que aparecío en las saga llamadas 'Drgon Ball Z'.",
			costo:{u:150, c:'00'},
			descuento:[
				{tipo:'2x1', costo:'150.00'},
				{tipo:'rebaja', costo:'140'}
			],
			size:[
				{h:15, w:8},
				{h:30, w:16},
				{h:60, w:32},
				{h:100, w:85.3},
				{h:150, w:79.4}
			],
			producType:"Vinil Adhesivo",
			producTypeSuB:["Decorativo"],
			cat:"Geek",
			CatSub:[
				'Anime', 'Dragon Ball', 'Goku'
			],
			propios:[
				{nombre:'invertido', valor:'true'}
			],
			user:{
				commprado: {status:'false', cantidad:0},
				carrito: {status:'false', cantidad:0},
				favoritos: {status:'false', lista:['me-gusta']}
			}
		},
		{
			sku:"0101geek010101m01",
			nombre:"Goku Pasado y Presente",
			img:{name:"dm-geek-kakaroto-goku", format:"webp"},
			ico: {name:"ico-dm-geek-kakaroto-goku", format:"webp"},
			monaje:{name:"dm-geek-kakaroto-goku", format:"webp"},
			desc:"Vinil adhesivo mate o brillante con tematica de Dragon Ball donde se representa al Goku en su iconica etapa de niño con su baculo sagrado que aparecio en la primera saga de la serie llamada 'Dragon Ball' y envolviendo todo, esta el mismo personaje pero con el aspecto iconico de Súper Saiyajin ya adulto, que aparecío en las saga llamadas 'Drgon Ball Z'.",
			costo:{u:150, c:'00'},
			descuento:[
				{tipo:'2x1', costo:'150.00'},
				{tipo:'rebaja', costo:'140'}
			],
			size:[
				{h:15, w:8},
				{h:30, w:16},
				{h:60, w:32},
				{h:100, w:85.3},
				{h:150, w:79.4}
			],
			producType:"Vinil Adhesivo",
			producTypeSuB:["Decorativo"],
			cat:"Geek",
			CatSub:[
				'Anime', 'Dragon Ball', 'Goku'
			],
			propios:[
				{nombre:'invertido', valor:'true'}
			],
			user:{
				commprado: {status:'false', cantidad:0},
				carrito: {status:'false', cantidad:0},
				favoritos: {status:'false', lista:['me-gusta']}
			}
		}
		]
	}
];





function showPage(){
	if(window.document.body.scrollHeight < (window.document.body.clientHeight * 2)){
		if(!el.precarga.delayLoad){
			el.precarga.loadDelay();
		}
	}
	hideLoading(100);

	//Tu codigo aqui...
};


function hideLoading(time=1050){
	setTimeout(()=>{
		el.loading.classList.add('opacidad0');
		setTimeout(()=>{
			el.loading.remove();
		}, 1600);
	}, time);
}

function animacionLoading(p){
	el.loadingPorcNum.textContent = '%' + Math.round(p);
	if(p >= 100){
		setTimeout(()=>{
			showPage();
		}, 200);
	}
}


//Funciones particulares de cada seccion del sitio.
function menu(){
	this.classList.toggle('activo');
	el.menu.classList.toggle('activo');
}

function buscar(e){
	e.preventDefault();
	console.log('buscando...');
}
function colorTheme(){
	el.destacados.classList.toggle('clearActivo');
}



function soloArteActive(){
	el.destacados.classList.toggle('soloArte');
}

el.destacadoActivo = 0;
el.destacadoActivoOld = 0;
el.destacadoactivoEl = null;
el.destacadoRun = false;
function activarDestacados(e){
	if(el.destacadoRun){ return; }
	if(el.destacadoActivo == this.idaData.objeto){ return; };
	el.destacadoRun = true;
	el.destacadoActivoEl.classList.remove('activo');
	el.destacadoActivoOld = el.destacadoActivo;

	let mover = 'next';
	switch(this.idaData.objeto){
		case 'next':
			if(el.destacadoActivo >= destacadosInfo.length - 1){
				el.destacadoActivo = 0;
			} else{
				el.destacadoActivo++;
			}
		break;
		case 'back':
			if(el.destacadoActivo <= 0){
				el.destacadoActivo = destacadosInfo.length - 1;
			} else{
				el.destacadoActivo--;
			}
			mover = 'back';
		break;
		default:
			if(this.idaData.objeto < el.destacadoActivo){
				mover = 'back';
			}
			el.destacadoActivo = this.idaData.objeto;
		break;
	}
	
	el.iconoMontaje[el.destacadoActivo].classList.add('activo');
	el.destacadoActivoEl = el.iconoMontaje[el.destacadoActivo];

	let salto = false;
	if( this.idaData.objeto > el.destacadoActivoOld + 1){
		el.montaje[0].setAttribute('src', el.urlDestacados + destacadosInfo[el.destacadoActivo].img.name + '.' + destacadosInfo[el.destacadoActivo].img.format);
		salto = true;
	} else if(this.idaData.objeto < el.destacadoActivoOld - 1){
		el.montaje[2].setAttribute('src', el.urlDestacados + destacadosInfo[el.destacadoActivo].img.name + '.' + destacadosInfo[el.destacadoActivo].img.format);
		salto = true;
	}
	
	switch (mover) {
		case 'next':
			el.montaje[1].classList.add('anterior');
			el.montaje[0].classList.remove('siguiente');

			setTimeout(()=>{
				el.montaje[el.montaje.length - 1].remove();
				el.montaje.splice(-1);
				let siguinteValor = el.destacadoActivo + 1;

				if(siguinteValor > destacadosInfo.length - 1){
					siguinteValor = 0;
				}

				const montajeNext = document.createElement('img');
				montajeNext.classList.add('montaje');
				montajeNext.classList.add('siguiente');
				montajeNext.setAttribute('src', el.urlDestacados + destacadosInfo[siguinteValor].img.name + '.' + destacadosInfo[siguinteValor].img.format);
				montajeNext.setAttribute('alt', 'montaje ' + siguinteValor);
				montajeNext.setAttribute('width', 60);
				montajeNext.setAttribute('height', 60);

				destacadoMontajeBox.insertBefore(montajeNext, el.montaje[0]);
				el.montaje.unshift(montajeNext);

				if(salto){
					let actuaizar = el.destacadoActivo -1;
					if(el.destacadoActivo < 0){
						actuaizar = destacadosInfo.length - 1;
					}
					el.montaje[2].setAttribute('src', el.urlDestacados + destacadosInfo[actuaizar].img.name + '.' + destacadosInfo[actuaizar].img.format);
				}
				el.destacadoRun = false;
			}, 1500);
		break;
		case 'back':
			el.montaje[1].classList.add('siguiente');
			el.montaje[2].classList.remove('anterior');

			setTimeout(()=>{
				el.montaje[0].remove();
				el.montaje.splice(0, 1);

				let siguinteValor = el.destacadoActivo - 1;

				if(siguinteValor < 0){
					siguinteValor = destacadosInfo.length - 1;
				}

				const montajeBack = document.createElement('img');
				montajeBack.classList.add('montaje');
				montajeBack.classList.add('anterior');
				montajeBack.setAttribute('src', el.urlDestacados + destacadosInfo[siguinteValor].img.name + '.' + destacadosInfo[siguinteValor].img.format);
				montajeBack.setAttribute('alt', 'montaje ' + siguinteValor);
				montajeBack.setAttribute('width', 60);
				montajeBack.setAttribute('height', 60);

				destacadoMontajeBox.appendChild(montajeBack);
				el.montaje.push(montajeBack);

				if(salto){
					let actuaizar = el.destacadoActivo + 1;
					if(el.destacadoActivo > destacadosInfo.length - 1){
						actuaizar = 0;
					}
					el.montaje[0].setAttribute('src', el.urlDestacados + destacadosInfo[actuaizar].img.name + '.' + destacadosInfo[actuaizar].img.format);
				}
				el.destacadoRun = false;
			}, 1500);
		break;
	}

	//Colocamos la informacion el primer producto visible.
	el.destacadosTituloSpan.classList.add('out');
	el.destacadosTituloH2.classList.add('out');
	el.destacadosTituloH3.classList.add('out');

	setTimeout(()=>{
		let categoria = destacadosInfo[el.destacadoActivo].cat;
		destacadosInfo[el.destacadoActivo].CatSub.forEach(c => {
			categoria += " / " + c;
		});
		el.destacadosTituloSpan.textContent = categoria;
		el.destacadosTituloH2.textContent = destacadosInfo[el.destacadoActivo].producType;
		el.destacadosTituloH3.textContent = destacadosInfo[el.destacadoActivo].nombre;

		el.destacadosInfoGlobalPrecio.textContent = destacadosInfo[el.destacadoActivo].costo.u;
		el.destacadosInfoGlobalCentavos.textContent = '.' + destacadosInfo[el.destacadoActivo].costo.c;
		el.destacadosInfoGlobalDesc.textContent = destacadosInfo[el.destacadoActivo].desc;

		el.destacadosInfoGlobalMedidas.innerHTML = "";
		destacadosInfo[el.destacadoActivo].size.forEach(m => {
			const li = document.createElement('li');
			li.classList.add('medida');
			li.innerHTML = `h:<span class="resaltar">${m.h}</span> w:<span class="resaltar">${m.w}</span`;
			el.destacadosInfoGlobalMedidas.appendChild(li);
		});

		el.destacadosTituloSpan.classList.remove('out');
		el.destacadosTituloH2.classList.remove('out');
		el.destacadosTituloH3.classList.remove('out');
	}, 640);

}

function iniciarDestacados(){
	// Contruimos los iconos del carrusel para mostrar los productos destacados.
	destacadosInfo.forEach((d, i) => {
		const div = document.createElement('div');
		div.classList.add('articulo');
		div.setAttribute('data-sku', d.sku);

		const img = document.createElement('img');
		img.classList.add('montaje');
		img.setAttribute('src', el.urlDestacados + d.ico.name + '.' + d.ico.format );
		img.setAttribute('alt', 'icono destacado ' + i);
		img.setAttribute('width', 60);
		img.setAttribute('height', 60);

		const info = document.createElement('div');
		info.classList.add('info');
		info.textContent = d.nombre;

		div.appendChild(img);
		div.appendChild(info);

		div.idaData = {};
		div.idaData.objeto = i;
		div.addEventListener('click', activarDestacados);

		el.destacadosArticulos.appendChild(div);
		el.iconoMontaje.push(div);

		if(i == 0){ div.classList.add('activo'); el.destacadoActivoEl = div; }
	});


	// Construiremos las primeras imagenes del montaje para el inicio del carrucel.
	const montajeNext = document.createElement('img');
	montajeNext.classList.add('montaje');
	montajeNext.classList.add('siguiente');
	montajeNext.setAttribute('src', el.urlDestacados + destacadosInfo[1].img.name + '.' + destacadosInfo[1].img.format);
	montajeNext.setAttribute('alt', 'montaje ' + 1);
	montajeNext.setAttribute('width', 60);
	montajeNext.setAttribute('height', 60);

	const montaje = document.createElement('img');
	montaje.classList.add('montaje');
	montaje.setAttribute('src', el.urlDestacados + destacadosInfo[0].img.name + '.' + destacadosInfo[0].img.format);
	montaje.setAttribute('alt', 'montaje ' + 0);
	montaje.setAttribute('width', 60);
	montaje.setAttribute('height', 60);

	const montajeBack = document.createElement('img');
	montajeBack.classList.add('montaje');
	montajeBack.classList.add('anterior');
	montajeBack.setAttribute('src', el.urlDestacados + destacadosInfo[destacadosInfo.length - 1].img.name + '.' + destacadosInfo[destacadosInfo.length - 1].img.format);
	montajeBack.setAttribute('alt', 'montaje ' + (destacadosInfo.length - 1));
	montajeBack.setAttribute('width', 60);
	montajeBack.setAttribute('height', 60);
	
	destacadoMontajeBox.appendChild(montajeNext);
	destacadoMontajeBox.appendChild(montaje);
	destacadoMontajeBox.appendChild(montajeBack);

	el.montaje = [montajeNext, montaje, montajeBack];

	//Colocamos la informacion el primer producto visible.
	let categoria = destacadosInfo[0].cat;
	destacadosInfo[0].CatSub.forEach(c => {
		categoria += " / " + c;
	});
	el.destacadosTituloSpan.textContent = categoria;
	el.destacadosTituloH2.textContent = destacadosInfo[0].producType;
	el.destacadosTituloH3.textContent = destacadosInfo[0].nombre;

	el.destacadosInfoGlobalPrecio.textContent = destacadosInfo[0].costo.u;
	el.destacadosInfoGlobalCentavos.textContent = '.' + destacadosInfo[0].costo.c;
	el.destacadosInfoGlobalDesc.textContent = destacadosInfo[0].desc;

	destacadosInfo[0].size.forEach(m => {
		const li = document.createElement('li');
		li.classList.add('medida');
		li.innerHTML = `h:<span class="resaltar">${m.h}</span> w:<span class="resaltar">${m.w}</span`;
		el.destacadosInfoGlobalMedidas.appendChild(li);
	});
	
}


function loadProductos(){
	productos.forEach((c, i) => {
		const seccion = document.createElement('section');
		seccion.id = 'key-' + c.categoria.replace(/\s/g, '').trim().toLowerCase();
		const h2 = document.createElement('h2');
		h2.textContent = c.categoria.replace(/^[a-zA-ZñÑ]/, l => l.toUpperCase());

		const boxProductos = document.createElement('div');
		boxProductos.classList.add('boxProductos');
		c.productos.forEach((p, i) => {

			const producto = document.createElement('figure');
			producto.classList.add('producto');
			p.propios.forEach(pro => {
				if(pro.valor == 'true'){
					producto.classList.add(pro.nombre);
				}
			});
			
			const like = (p.user.favoritos.status == 'true') ? 'megusta' : '';
			producto.innerHTML = `
				<div class="pLike">
					<div class="corazon ${like}"><i class="fa-solid fa-heart"></i></div>
					<div class="masCarrito" data-sku="${p.sku}"><i class="fa-solid fa-plus"></i></div>
				</div>
				<a href="/producto/${p.sku}" class="pContenedor">
					<img src="${el.urlDestacados}${p.ico.name}.${p.ico.format}" width="80" height="80" />
					<figcaption>
						${p.nombre}
					</figcaption>
				</a>
				<div class="pAccion">
					<div class="pPrecio">${p.costo.u}.${p.costo.c}</div>
					<a href="/producto/${p.sku}" class="pBtnVer">Más</a>
				</div>
			`;
			boxProductos.appendChild(producto)
		});

		const footer = document.createElement('footer');
		footer.innerHTML = `<a href="/categoria/${c.categoriaID}">Ver todo</a>`

		seccion.appendChild(h2);
		seccion.appendChild(boxProductos);
		seccion.appendChild(footer);

		el.boxCatgoriasProductos.appendChild(seccion);
	});
	
}


let fPv = "";
let enviandoForm = false;
function formulario(e){
	e.preventDefault();
	if(enviandoForm){ return; }

	function enviado(j){
		el.fPv.clear();
		pop('Gracias por contactarnos, tu correo fue enviado y en breve me pondre en contacto contigo.', 'ok');
		enviandoForm = false;
	}

	function error(j){
		pop('No se puedo enviar el correo, intentolo mas tarde.', 'error');
		enviandoForm = false;
	}

	if(el.fPv.validar()){
		const formData = new FormData(el.form);
		enviandoForm = true;
		request('assets/server/form.php', formData, enviado, error);
	} else{
		pop('El formulario tiene errores que se deben corregir.', 'alert');
	}
}


function iniciar() {
	window.bodymovin = arguments[1];
	window.anime = arguments[2];
	window.Parallax = arguments[3];

	//habilitar funciones para moviles:
	if ((el.mobile = /Mobile/i.test(navigator.userAgent))) {
		if ((el.touch = Modernizr.touchevents)) {

		}
	}

	
	//Obtener elementos del html
	el.loading = document.getElementById('loading');
	el.loading.style.transition = 'all 1s ease-in-out';
	el.loadingPorcNum = document.getElementById('porcentajeNumero');

	
	el.precarga = new Precarga();
	el.precarga.progress = true;
	el.precarga.userFunc = showPage;
	el.precarga.userAni = animacionLoading;
	el.precarga.run();


	//tu codigo aqui...
	el.btnMenu = document.getElementById('btnMenu');
	el.btnMenu.addEventListener('click', menu);
	el.menu = document.getElementById('menuGlobal');
	el.btnBuscar = document.getElementById('btnBuscar');
	el.formBuscar = document.getElementById('buscarBox');
	el.btnBuscar.addEventListener('click', buscar);
	el.formBuscar.addEventListener('submite', buscar);

	el.btnDark = document.getElementById('dark');
	el.btnDark.addEventListener('click', colorTheme);
	el.destacados = document.getElementById('destacados');
	el.escenario = document.getElementById('escenario');
	el.btnSolo = document.getElementById('soloArte');
	el.btnSolo.addEventListener('click', soloArteActive);

	
	el.destacadosTitulo = document.getElementById('destacadosTitulo');
	el.destacadosTituloSpan = el.destacadosTitulo.querySelector('span');
	el.destacadosTituloH2 = el.destacadosTitulo.querySelector('h2');
	el.destacadosTituloH3 = el.destacadosTitulo.querySelector('h3');

	el.destacadosInfoGlobal = document.getElementById('destacadosInfoGlobal');
	el.destacadosInfoGlobalPrecio = document.querySelector('.precio');
	el.destacadosInfoGlobalCentavos = document.querySelector('.centavos');
	el.destacadosInfoGlobalDesc = document.querySelector('.descripcion');
	el.destacadosInfoGlobalMedidas = document.getElementById('medidas');

	el.destacadoMontajeBox = document.getElementById('destacadoMontajeBox');
	el.montaje = [];
	el.iconoMontaje = [];
	el.btnMontajeNext = document.getElementById('btnMontajeNext');
	el.btnMontajeNext.idaData = {};
	el.btnMontajeNext.idaData.objeto = 'next';
	el.btnMontajeBack = document.getElementById('btnMontajeBack');
	el.btnMontajeBack.idaData = {};
	el.btnMontajeBack.idaData.objeto = 'back';

	el.destacadosArticulos = document.getElementById('destacadosArticulos');
	el.btnMontajeNext.addEventListener('click', activarDestacados);
	el.btnMontajeBack.addEventListener('click', activarDestacados);

	el.destacadosTitulo = document.getElementById('destacadosTitulo');
	const extraIMG = [];
	el.urlDestacados = 'assets/img/home_inicio/';
	destacadosInfo.forEach(d => {
		extraIMG.push({
			img: el.urlDestacados + d.img.name + '.' + d.img.format,
		});
		extraIMG.push({
			img: el.urlDestacados + d.ico.name + '.' + d.ico.format,
		});
	});
	el.precarga.useStanByFunc = iniciarDestacados;
	el.precarga.stanby(extraIMG);

	el.boxCatgoriasProductos = document.getElementById('boxCatgoriasProductos');
	setTimeout(loadProductos, 100);



	// el.boxTimeline1.idaAniTimeline = FUNCION-A-CORRER;
	// el.boxTimeline1.idaObserverAccion = 'TIPO-ACCEION';//EJEMPLO: animationFrame o pasos
	// observerArray = [];
	// observerArray.push(el.boxTimeline1);
	// el.observer = new AnimeObserver(observerArray);
	// el.observer.areaMinima = 0.05;
	// el.observer.pasos = 20;



	//Activar las validaciones para el formulario
	el.form = document.getElementById('footerForm');
	el.form.addEventListener('submit', formulario);
	el.fPv = new ValidarForm();
	el.fPv.form = el.form;
	el.fPv.run();

}




// iniciar la solicitud de los modulos y la ejecucion inicial del sistema.
//importamos los archivos y librerias necesarios
requirejs.config({
	baseUrl: "assets/js/owner",
	paths: { a: "../animaciones", l: "../librerias", n: "/assets/node_modules"},
});
requirejs(["l/modernizr", "n/lottie-web/build/player/lottie.min", "n/animejs/lib/anime.min", "l/parallax", "precarga", "observer", "validaciones", "alertas", "peticiones"], iniciar);

