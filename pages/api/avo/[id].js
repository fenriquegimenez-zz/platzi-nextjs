import DB from "../../../database/db";

const allAvos = async (request, response) => {
  const db = new DB();
  const id = request.query.id;
  const avo = await db.getById(id);

  response.status(200).json(avo);
};

export default allAvos;
