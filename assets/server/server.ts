import { Application, oakCors, green, yellow } from "./deps.ts";
import todoRouter from "./routes/todo.ts";

const app = new Application();
const port:number = 1993;

app.use(
	oakCors({
		origin: /^.+localhost:1993|esomegusta:7890|esomegusta.idalibre.com$/,
		optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
	}),
);
app.use(todoRouter.routes());
app.use(todoRouter.allowedMethods());

app.addEventListener("listen", ({ secure, hostname, port }) => {
	const protocol = secure ? "https://" : "http://";
	const url = `${protocol}${hostname ?? "localhost"}:${port}`;
	console.log(`${yellow("Listening on:")} ${green(url)}`);
});
await app.listen({ port });