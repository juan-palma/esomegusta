// deno-lint-ignore-file no-inferrable-types
import { Application, oakCors, green, yellow } from "./deps.ts";
import rutas from "./routes/rutas.ts";

const app = new Application();
const port:number = 1993;

app.use(
	oakCors({
		origin: /^.+0.0.0.0:1993|localhost:1993|esomegusta:7890|esomegusta.idalibre.com$/,
		optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
	})
);
app.use(rutas.routes());
app.use(rutas.allowedMethods());

app.addEventListener("listen", ({ secure, hostname, port }) => {
	const protocol = secure ? "https://" : "http://";
	const url = `${protocol}${hostname ?? "localhost"}:${port}`;
	console.log(`${yellow("Listening on:")} ${green(url)}`);
});
await app.listen({ port });