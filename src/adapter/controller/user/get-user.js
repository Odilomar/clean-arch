module.exports = function buildGetUser({ findUser }) {
  return async function getUser(request, response) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const users = await findUser({
        userId: response.query.userId,
      });

      return response.json(users);
    } catch (e) {
      console.log(e);

      return response.statusCode(400).json({ error: e.message });
    }
  };
};
