import { IncomingMessage, ServerResponse } from "http";
import DB from "@database";

const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
  const db = new DB();
  response.end(JSON.stringify({ hello: "world" }));
};

export default allAvos;
