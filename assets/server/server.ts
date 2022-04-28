// import { Application, Router } from "https://deno.land/x/oak/mod.ts";
// import { green, yellow } from "https://deno.land/std@0.53.0/fmt/colors.ts";
import { Application } from "./deps.ts";
import { green, yellow } from "./deps.ts";
import todoRouter from "./routes/todo.ts";

console.log('hola mundo');

const app = new Application();
const port: number = 8000;

app.use(todoRouter.routes());
app.use(todoRouter.allowedMethods());

app.addEventListener("listen", ({ secure, hostname, port }) => {
	const protocol = secure ? "https://" : "http://";
	const url = `${protocol}${hostname ?? "localhost"}:${port}`;
	console.log(`${yellow("Listening on:")} ${green(url)}`);
});
await app.listen({ port });