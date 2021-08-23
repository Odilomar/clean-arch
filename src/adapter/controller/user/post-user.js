module.exports = function buildPostUser({ createUser }) {
  return async function postUser(request, response) {
    try {
      const { ...userInfo } = request.body;
      const posted = await createUser({ ...userInfo });

      return response.json({ ...posted });
    } catch (e) {
      console.log(e);

      return response.statusCode(400).json({ error: e.message });
    }
  };
};
