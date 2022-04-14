/*::::::::::::::::::::::::::::::
	Codigo de Juan Palma
::::::::::::::::::::::::::::::*/
const idagl = {};
idagl.elementos = {};
const el = idagl.elementos;






function showPage(){
	console.log('pagin lista para comenzar');
	//Tu codigo aqui...
};


function animacionLoading(p){
	el.loadingPorcNum.textContent = '%' + Math.round(p);
	if(p >= 100){
		setTimeout(()=>{
			showPage();
		}, 200);
	}
}


function iniciar() {
	//habilitar funciones para moviles:
	if ((el.mobile = /Mobile/i.test(navigator.userAgent))) {
		if ((el.touch = Modernizr.touchevents)) {

		}
	}


	//Obtener elementos del html
	el.loading = document.getElementById('loading');
	el.loadingPorcNum = document.getElementById('porcentajeNumero');

	
	el.precarga = new Precarga();
	el.precarga.progress = true;
	el.precarga.userAni = animacionLoading;
	el.precarga.run();
	


	// el.boxTimeline1.idaAniTimeline = FUNCION-A-CORRER;
	// el.boxTimeline1.idaObserverAccion = 'TIPO-ACCEION';//EJEMPLO: animationFrame o pasos
	// observerArray = [];
	// observerArray.push(el.boxTimeline1);
	// el.observer = new AnimeObserver(observerArray);
	// el.observer.areaMinima = 0.05;
	// el.observer.pasos = 20;



	//Activar las validaciones para el formulario
	// el.form = document.getElementById('form');
	// el.form.addEventListener('submit', formulario);
	// el.fPv = new ValidarForm();
	// el.fPv.form = el.form;
	// el.fPv.run();

}




// iniciar la solicitud de los modulos y la ejecucion inicial del sistema.
//importamos los archivos y librerias necesarios
requirejs.config({
	baseUrl: "assets/js/owner",
	paths: { a: "../animaciones", l: "../librerias", n: "/node_modules"},
});
requirejs(["l/modernizr", "n/lottie-web/build/player/lottie.min", "n/animejs/lib/anime.min", "l/parallax", "l/precarga", "observer", "validaciones", "alertas", "peticiones"], iniciar);

