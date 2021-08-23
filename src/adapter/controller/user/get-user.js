module.exports = function buildGetUser({ findUser }) {
  return async function getUser(request, response) {
    try {
      const id = request.params.id;
      const user = await findUser({ id });

      if (!user) {
        return response.status(404).json({ message: "User don´t exists!" });
      }

      return response.json(user);
    } catch (e) {
      console.log(e);

      return response.status(400).json({ error: e.message });
    }
  };
};
