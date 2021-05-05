import DB from "../../../database/db";

const allAvos = async (request, response) => {
  const db = new DB();
  const allEntries = await db.getAll();
  const length = allEntries.length;
  response.statusCode = 200; //ok
  response.setHeader("Content-type", "Application-json");
  response.end(JSON.stringify({ data: allEntries, length: length }));
};

export default allAvos;
