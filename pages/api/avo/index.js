import DB from "../../../database/db";

const allAvos = async (request, response) => {
  const db = new DB();
  const allEntries = await db.getAll();
  response.statusCode = 200; //ok
  response.setHeader("Content-type", "Application-json");
  response.end(JSON.stringify({ data: allEntries }));
};

export default allAvos;
