module.exports = function buildGetUser({ findUser }) {
  return async function getUser(request, response) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const id = request.params.id;
      const users = await findUser({ id });

      return response.json(users);
    } catch (e) {
      console.log(e);

      return response.statusCode(400).json({ error: e.message });
    }
  };
};
