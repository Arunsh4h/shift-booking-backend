import Hapi from "hapi";

const server = new Hapi.Server({
  host: "shift-booking-backend.vercel.app/",
  port: " ",
  routes: {
    cors: { origin: "ignore" },
  },
});

async function main() {
  await server.register([
    {
      plugin: require("./shifts-mock-api"),
      routes: { prefix: "/shifts" },
    },
  ]);

  await server.start();

  console.info(
    `✅  API server is listening at ${server.info.uri.toLowerCase()}`
  );
}

main();
