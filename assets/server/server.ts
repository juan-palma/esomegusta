// deno-lint-ignore-file no-inferrable-types
import { Application, oakCors, ListenOptionsTls, green, yellow } from "./deps.ts";
import rutas from "./routes/rutas.ts";

const app = new Application();
const host:string = "esomegusta.idalibre.com";
const port:number = 444;

// app.use(
// 	oakCors({
// 		origin: /^.+0.0.0.0:1993|localhost:1993|esomegusta:7890|esomegusta.idalibre.com$/,
// 		optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// 	})
// );
app.use(oakCors());
app.use(rutas.routes());
app.use(rutas.allowedMethods());

app.addEventListener("listen", ({ secure, hostname, port }) => {
	const protocol = secure ? "https://" : "http://";
	const url = `${protocol}${hostname ?? "localhost"}:${port}`;
	console.log(`${yellow("Listening on:")} ${green(url)}`);
});

const opcionesServer: ListenOptionsTls = {
	hostname: host,
	port:port,
	certFile: "./idalibre.crt",
 	keyFile: "./idalibre.key",
	secure: true,
	alpnProtocols:["h2", "http/1.1"]
}
await app.listen(opcionesServer);


// import { serveTls } from "https://deno.land/std@0.137.0/http/server.ts";

// function handler(req: Request): Response {
// 	return new Response("Hello, World!");
// }

// serveTls(handler, {
// 	port: 443,
// 	certFile: "./idalibre.crt",
// 	keyFile: "./idalibre.key",
// });