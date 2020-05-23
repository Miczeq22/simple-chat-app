import { Server } from "./server";

const server = new Server();

const PORT : string|number = process.env.PORT || 5000;

server.listen(port => {
  console.log(`Server is listening on http://localhost:${port}`);
});
