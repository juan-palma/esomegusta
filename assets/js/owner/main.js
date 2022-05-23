/*::::::::::::::::::::::::::::::
	Codigo de Juan Palma
::::::::::::::::::::::::::::::*/
const idagl = {};
idagl.elementos = {};
const el = idagl.elementos;


let entorno;
if(window.location.hostname === "esomegusta"){
	entorno = "local";
} else if(window.location.hostname === "esomegusta.idalibre.com"){
	entorno = "remoto";
}


//cabeceras y valores generales para los fetch
const myHeaders = new Headers({
	"Content-Type": "text/plain"
});
const myInit = {
	method: 'GET',
	headers: myHeaders,
	mode: 'cors',
	cache: 'no-cache'
}
const urlBase = (entorno === "local") ? "https://0.0.0.0:444" : "https://api-esomegusta.idalibre.com:444" ;





function showPage(){
	if(window.document.body.scrollHeight < (window.document.body.clientHeight * 2)){
		if(!el.precarga.delayLoad){
			el.precarga.loadDelay();
		}
	}
	hideLoading(100);

	//Tu codigo aqui...
}


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
	const v = el.buscar.value;
	if(v.length < 4){ return; }
	if(!el.validB.validar(v, "text")){ return; }

	window.location.href = `/busqueda/?f=${v}`;
}

function buscarActivo(res){
	res.splice(0,10).forEach(r => {
		const boxResult = document.createElement('div');
		boxResult.classList.add('boxResult');
		boxResult.innerHTML = `
			<a href="/producto/?i=${r._id}">${r.nombre}</a>
		`;
		el.boxResultGoogle.appendChild(boxResult);
	});
	if(res.length >= 10){
		const boxResult = document.createElement('div');
		boxResult.innerHTML = `
			<span>Ver más</span>
		`;
		boxResult.classList.add('textCenter');
		boxResult.addEventListener('click', buscar);
		el.boxResultGoogle.appendChild(boxResult);
	}
	el.formBuscar.appendChild(boxResultGoogle);
}
function buscarActivoFiltro(){
	el.boxResultGoogle.innerHTML = "";
	if(this.value.length < 4){ return; }
	if(!el.validB.validar(this.value, "text")){ return; }

	const myRequest = new Request(`${urlBase}/find/${this.value}`, myInit);
	fetch(myRequest)
	.then(response => response.json())
	.catch(error => console.error('Error:', error))
	.then(response => {
		if(response.success){ buscarActivo(response.data); }
	});
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
function activarDestacados(){
	if(el.destacadoRun){ return; }
	if(el.destacadoActivo == this.idaData.objeto){ return; }
	el.destacadoRun = true;
	el.destacadoActivoEl.classList.remove('activo');
	el.destacadoActivoOld = el.destacadoActivo;

	let mover = 'next';
	switch(this.idaData.objeto){
		case 'next':
			if(el.destacadoActivo >= el.destacadosInfo.length - 1){
				el.destacadoActivo = 0;
			} else{
				el.destacadoActivo++;
			}
		break;
		case 'back':
			if(el.destacadoActivo <= 0){
				el.destacadoActivo = el.destacadosInfo.length - 1;
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
		el.montaje[0].setAttribute('src', el.urlDestacados + el.destacadosInfo[el.destacadoActivo].montaje.name + '.' + el.destacadosInfo[el.destacadoActivo].montaje.format);
		salto = true;
	} else if(this.idaData.objeto < el.destacadoActivoOld - 1){
		el.montaje[2].setAttribute('src', el.urlDestacados + el.destacadosInfo[el.destacadoActivo].montaje.name + '.' + el.destacadosInfo[el.destacadoActivo].montaje.format);
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

				if(siguinteValor > el.destacadosInfo.length - 1){
					siguinteValor = 0;
				}

				const montajeNext = document.createElement('img');
				montajeNext.classList.add('montaje');
				montajeNext.classList.add('siguiente');
				montajeNext.setAttribute('src', el.urlDestacados + el.destacadosInfo[siguinteValor].montaje.name + '.' + el.destacadosInfo[siguinteValor].montaje.format);
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
					el.montaje[2].setAttribute('src', el.urlDestacados + el.destacadosInfo[actuaizar].montaje.name + '.' + el.destacadosInfo[actuaizar].montaje.format);
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
					siguinteValor = el.destacadosInfo.length - 1;
				}

				const montajeBack = document.createElement('img');
				montajeBack.classList.add('montaje');
				montajeBack.classList.add('anterior');
				montajeBack.setAttribute('src', el.urlDestacados + el.destacadosInfo[siguinteValor].montaje.name + '.' + el.destacadosInfo[siguinteValor].montaje.format);
				montajeBack.setAttribute('alt', 'montaje ' + siguinteValor);
				montajeBack.setAttribute('width', 60);
				montajeBack.setAttribute('height', 60);

				destacadoMontajeBox.appendChild(montajeBack);
				el.montaje.push(montajeBack);

				if(salto){
					let actuaizar = el.destacadoActivo + 1;
					if(el.destacadoActivo > el.destacadosInfo.length - 1){
						actuaizar = 0;
					}
					el.montaje[0].setAttribute('src', el.urlDestacados + el.destacadosInfo[actuaizar].montaje.name + '.' + el.destacadosInfo[actuaizar].montaje.format);
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
		let categoria = el.destacadosInfo[el.destacadoActivo].cat;
		el.destacadosInfo[el.destacadoActivo].CatSub.forEach(c => {
			categoria += " / " + c;
		});
		el.destacadosTituloSpan.textContent = categoria;
		el.destacadosTituloH2.textContent = el.destacadosInfo[el.destacadoActivo].producType;
		el.destacadosTituloH3.textContent = el.destacadosInfo[el.destacadoActivo].nombre;

		el.destacadosInfoGlobalPrecio.textContent = '$' + el.destacadosInfo[el.destacadoActivo].costo.u;
		el.destacadosInfoGlobalCentavos.textContent = '.' + el.destacadosInfo[el.destacadoActivo].costo.c;
		el.destacadosInfoGlobalDesc.textContent = el.destacadosInfo[el.destacadoActivo].desc;
		el.destacadosInfoGlobalBtnVer.setAttribute('href', `/producto/?i=${el.destacadosInfo[el.destacadoActivo]._id}`);

		el.destacadosInfoGlobalMedidas.innerHTML = "";
		el.destacadosInfo[el.destacadoActivo].variantes.size.forEach(m => {
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
	el.destacadosInfo.forEach((d, i) => {
		const div = document.createElement('div');
		div.classList.add('articulo');
		div.setAttribute('data-prodID', d.prodID);

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
	montajeNext.setAttribute('src', el.urlDestacados + el.destacadosInfo[1].montaje.name + '.' + el.destacadosInfo[1].montaje.format);
	montajeNext.setAttribute('alt', 'montaje ' + 1);
	montajeNext.setAttribute('width', 60);
	montajeNext.setAttribute('height', 60);

	const montaje = document.createElement('img');
	montaje.classList.add('montaje');
	montaje.setAttribute('src', el.urlDestacados + el.destacadosInfo[0].montaje.name + '.' + el.destacadosInfo[0].montaje.format);
	montaje.setAttribute('alt', 'montaje ' + 0);
	montaje.setAttribute('width', 60);
	montaje.setAttribute('height', 60);

	const montajeBack = document.createElement('img');
	montajeBack.classList.add('montaje');
	montajeBack.classList.add('anterior');
	montajeBack.setAttribute('src', el.urlDestacados + el.destacadosInfo[el.destacadosInfo.length - 1].montaje.name + '.' + el.destacadosInfo[el.destacadosInfo.length - 1].montaje.format);
	montajeBack.setAttribute('alt', 'montaje ' + (el.destacadosInfo.length - 1));
	montajeBack.setAttribute('width', 60);
	montajeBack.setAttribute('height', 60);
	
	destacadoMontajeBox.appendChild(montajeNext);
	destacadoMontajeBox.appendChild(montaje);
	destacadoMontajeBox.appendChild(montajeBack);

	el.montaje = [montajeNext, montaje, montajeBack];

	//Colocamos la informacion el primer producto visible.
	let categoria = el.destacadosInfo[0].cat;
	el.destacadosInfo[0].CatSub.forEach(c => {
		categoria += " / " + c;
	});
	el.destacadosTituloSpan.textContent = categoria;
	el.destacadosTituloH2.textContent = el.destacadosInfo[0].producType;
	el.destacadosTituloH3.textContent = el.destacadosInfo[0].nombre;

	el.destacadosInfoGlobalPrecio.textContent = '$' + el.destacadosInfo[0].costo.u;
	el.destacadosInfoGlobalCentavos.textContent = '.' + el.destacadosInfo[0].costo.c;
	el.destacadosInfoGlobalDesc.textContent = el.destacadosInfo[0].desc;
	el.destacadosInfoGlobalBtnVer.setAttribute('href', `/producto/?i=${el.destacadosInfo[0]._id}`);

	el.destacadosInfo[0].variantes.size.forEach(m => {
		const li = document.createElement('li');
		li.classList.add('medida');
		li.innerHTML = `h:<span class="resaltar">${m.h}</span> w:<span class="resaltar">${m.w}</span`;
		el.destacadosInfoGlobalMedidas.appendChild(li);
	});
	
}


function loadProductos(cat, prods){
	cat.forEach((c, i) => {
		const seccion = document.createElement('section');
		seccion.id = 'key-' + c.replace(/\s/g, '').trim().toLowerCase();
		const h2 = document.createElement('h2');
		h2.textContent = c.replace(/^[a-zA-ZñÑ]/, l => l.toUpperCase());

		const boxProductos = document.createElement('div');
		boxProductos.classList.add('boxProductos');
		prods[i].data.forEach(p => {
			const producto = document.createElement('figure');
			producto.classList.add('producto');
			p.particularidad.forEach(pro => {
				if(pro.valor == 'true'){
					producto.classList.add(pro.nombre);
				}
			});
			
			const like = "";//(p.user.favoritos.status == 'true') ? 'megusta' : '';
			producto.innerHTML = `
				<div class="pLike">
					<div class="corazon ${like}"><i class="fa-solid fa-heart"></i></div>
					<div class="masCarrito" data-prodID="${p._id}"><i class="fa-solid fa-plus"></i></div>
				</div>
				<a href="/producto/?i=${p._id}" class="pContenedor">
					<img src="${el.urlDestacados}${p.ico.name}.${p.ico.format}" width="80" height="80" />
					<figcaption>
						${p.nombre}
					</figcaption>
				</a>
				<div class="pAccion">
					<div class="pPrecio">$${p.costo.u}.${p.costo.c}</div>
					<a href="/producto/?i=${p._id}" class="pBtnVer">Más</a>
				</div>
			`;
			boxProductos.appendChild(producto)
		});

		const footer = document.createElement('footer');
		footer.innerHTML = `<a href="/categoria/?v=${c}">Ver todo</a>`

		seccion.appendChild(h2);
		seccion.appendChild(boxProductos);
		seccion.appendChild(footer);

		el.boxCatgoriasProductos.appendChild(seccion);
	});
	
}


let enviandoForm = false;
function formulario(e){
	e.preventDefault();
	if(enviandoForm){ return; }

	function enviado(j){
		console.log(j);
		el.fPv.clear();
		pop('Gracias por contactarnos, tu correo fue enviado y en breve me pondre en contacto contigo.', 'ok');
		enviandoForm = false;
	}

	function error(j){
		console.log(j);
		pop('No se puedo enviar el correo, intentolo mas tarde.', 'error');
		enviandoForm = false;
	}

	if(el.fPv.comprobarForm()){
		const formData = new FormData(el.form);
		enviandoForm = true;
		request('assets/server/form.php', formData, enviado, error);
	} else{
		pop('El formulario tiene errores que se deben corregir.', 'alert');
	}
}



function activeLoginRedes(){
	//Funciones para el login con google
	function handleCredentialResponseGoogle(response){
		console.log(response);
	}
	google.accounts.id.initialize({
		client_id: "974553466428-7rn34it6f65dk52ajdm32v8lp1he29is.apps.googleusercontent.com",
		callback: handleCredentialResponseGoogle
	});
	google.accounts.id.renderButton( document.getElementById("googleLogin"), { theme: "outline", size: "large" } );
	//google.accounts.id.prompt(); // also display the One Tap dialog
}
function loginUser(){
	el.loginBox.classList.add('activo');
	//verificamos si el usuario tiene credenciales para autorrellenar el formulario por el
	setTimeout(()=>{
		navigator.credentials
		.get({ 'password': true })
		.then(credential => {
			if (credential) {
				el.loginForm.username.value = credential.id;
				el.loginForm.password = credential.password;
			}
		});
	}, 350);
}
function loginUserCancel(){
	el.fLoginv.clear();
	el.loginBox.classList.remove('activo');
}
function loginUserClose(){
	logeando = false;
	el.profile = "";
	localStorage.removeItem('profile', el.profile);
	localStorage.removeItem('_id', el.profile._id);
	localStorage.removeItem('username', el.profile.user);
	el.infoUserBox.innerHTML = "";
	el.login.removeEventListener('click', loginUserClose);
	el.login.addEventListener('click', loginUser);
	el.login.textContent = "Inicar Sesión";

}

function activeLogin(){
	logeando = true;
	el.login.removeEventListener('click', loginUser);
	el.login.addEventListener('click', loginUserClose);
	el.login.textContent = "Cerrar Sesión";

	const img = (el.profile.img == "") ? "avatar.webp" : el.profile.img ;
	const infoUser = document.createElement('div');
	infoUser.id = "infoUser";
	infoUser.innerHTML = `
		<div class="col1">
			<img src="./siteData/users/img/${img}" alt="Foto Usuario" width="180" height="180" />
		</div>

		<div class="col2">
			<div class="userNombre">
				Hola <span class="nowrap">${el.profile.nombre} ${el.profile.aPaterno}</span>
			</div>
			<ul>
				<li id="userPerfil">Mis Perfil</li>
				<li id="userPedidos">Mis pedidos</li>
				<li id="userConfig">Configuración</li>
			</ul>
		</div>
	`
	el.infoUserBox.appendChild(infoUser);
}

let logeando = false;
const sendLoginForm = async function(e){
	e.preventDefault();
	//si esta corriendo un proceso de login no permitimos que el usuario pueda volver a usar el boton de enviar ni mandar otra solicitur hasta que la primera se resuelva.
	if(logeando){ return; }

	//Funcion que se ejecutara si se valida correctamente al usuario y se recieve una respuesta satisfactorai del servidor.
	function logueado(){
		//Si se permiten las credenciales en el sistema se crea una nueva credencial para el usuario y se guarda o se refuerzan los datos si es que el usuario ya cuenta con una credencial creada.
		if (window.PasswordCredential) {
			const c = Promise.resolve(new PasswordCredential(e.target));
			c.then(v => {
				navigator.credentials.store(v);
			}).catch(error => console.error('Error:', error));
		}

		activeLogin();
		el.fLoginv.clear();
		loginUserCancel();
	}

	//Funcion que se ejecuta si existe algun problema con los datos enviados.
	function error(j){
		console.log(j);
		logeando = false;
		pop(j.message, 'alert');
	}

	// se verifica que los campos enviados por el usuario esten todos correctos y se hace el la peticion de validacion al servidor API-REST
	if(el.fLoginv.comprobarForm()){
		const formData = new FormData(el.loginForm);
		logeando = true;
		try {
			const myHeaders = new Headers({
				"Accept": 'application/json'
				// "Content-Type": "multipart/form-data; boundary=multipart-form-boundary"
			});
			const myInit = {
				method: 'POST',
				headers: myHeaders,
				mode: 'cors',
				cache: 'no-cache',
				credentials: 'include',
				body: formData,
				redirect: 'follow'
			}
			const myRequest = new Request(`${urlBase}/login`, myInit);
			// fetch(myRequest)
			// .then(response => response.json())
			// .then(response => {
			// 	console.log(response);
			// })
			// .catch(error => console.error('Error:', error));
			const response = await fetch(myRequest);
			const data = await response.json();
			
			if(data.success){
				el.profile = data.data;
				localStorage.setItem('profile', JSON.stringify(el.profile));
				localStorage.setItem('_id', el.profile._id);
				localStorage.setItem('username', el.profile.user);
				logueado();
			} else{
				error(data);
			}
		} catch (error) {
			logeando = false;
			console.log(error);
		}
		
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
			console.log('is touche');
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
	el.categorias = document.getElementById('mCategorias');
	el.categoria = document.getElementById('mCategoria');

	el.login = document.getElementById('mLogin');
	el.login.addEventListener('click', loginUser);
	el.loginBox = document.getElementById('loginBox');
	el.loginForm = document.getElementById('loginForm');
	el.loginForm.addEventListener('submit', sendLoginForm);
	el.btnLoginCancel = document.getElementById('btnLoginCancel');
	el.btnLoginCancel.addEventListener('click', loginUserCancel);
	el.fLoginv = new ValidarForm();
	el.fLoginv.form = el.loginForm;
	el.fLoginv.run();
	el.infoUserBox = document.getElementById('infoUserBox');
	if(localStorage.getItem('profile')) {
		el.profile = JSON.parse(localStorage.getItem('profile'));
		console.log(el.profile);
		activeLogin();
	}
	activeLoginRedes();

	el.carrito = document.getElementById('mCarrito');
	el.personalizado = document.getElementById('mPersonalizado');
	el.contacto = document.getElementById('mContacto');
	el.categoria.addEventListener('click', function(){ this.classList.toggle('activo') } );
	el.carrito.addEventListener('click', () => { window.location.href = "/carrito"; });
	el.personalizado.addEventListener('click', () => { window.location.href = "/personalizado"; });
	el.contacto.addEventListener('click', () => { window.location.href = "/contacto"; });

	el.btnBuscar = document.getElementById('btnBuscar');
	el.formBuscar = document.getElementById('buscarBox');
	el.btnBuscar.addEventListener('click', buscar);
	el.formBuscar.addEventListener('submite', buscar);
	el.boxResultGoogle = document.getElementById('boxResultGoogle');
	el.buscar = document.getElementById('buscar');
	el.buscar.addEventListener('keyup', buscarActivoFiltro);
	el.validB = new ValidarForm();

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
	el.destacadosInfoGlobalBtnVer = document.getElementById('btnVerMas');

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
	
	const myRequest = new Request(`${urlBase}/destacados/`, myInit);
	fetch(myRequest)
	.then(response => response.json())
	.catch(error => console.error('Error:', error))
	.then(response => {
		el.destacadosInfo = response.data;
		const extraIMG = [];
		el.urlDestacados = 'assets/img/home_inicio/';
		el.destacadosInfo.forEach(d => {
			extraIMG.push({
				img: el.urlDestacados + d.montaje.name + '.' + d.montaje.format,
			});
			extraIMG.push({
				img: el.urlDestacados + d.ico.name + '.' + d.ico.format,
			});
		});
		el.precarga.useStanByFunc = iniciarDestacados;
		el.precarga.stanby(extraIMG);
	});
	

	
	
	el.boxCatgoriasProductos = document.getElementById('boxCatgoriasProductos');
	const myRequestProd = new Request(`${urlBase}/categorias/`, myInit);
	fetch(myRequestProd)
	.then(response => response.json())
	.catch(error => console.error('Error:', error))
	.then(response => {
		const productoByCat = [];
		const categorias = response.data;
		categorias.forEach(c => {
			//Preparar la ruta y generar los fetch para las promesas.
			const myRequestBy = new Request(`${urlBase}/categorias/${c}/6`, myInit);
			productoByCat.push(fetch(myRequestBy));

			//Creando los elementos e categoria del menu.
			const li = document.createElement('li');
			li.classList.add('menuItem');
			li.textContent = c.replace(/\s/g, '').toLowerCase();
			li.addEventListener('click', () => { window.location.href = `/categoria/?v=${c}`; });
			el.categorias.appendChild(li);
		});
		Promise.all(productoByCat)
			.then(responses => {
				const datas = [];
				responses.forEach( r => {datas.push( r.json() )} );
				Promise.all(datas)
					.then(data => {
						loadProductos(categorias, data);
					}).catch(reason => {
						console.log(reason)
					});
			}).catch(reason => {
				console.log(reason)
			});
	});

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
//requirejs(["l/modernizr", "n/lottie-web/build/player/lottie.min", "n/animejs/lib/anime.min", "l/parallax", "precarga", "observer", "validaciones", "alertas", "peticiones"], iniciar);
requirejs(["l/modernizr", "precarga", "observer", "validaciones", "alertas", "peticiones", "https://accounts.google.com/gsi/client"], iniciar);