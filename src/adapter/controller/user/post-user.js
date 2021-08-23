module.exports = function buildPostUser({ createUser }) {
  return async function postUser(request, response) {
    try {
      const { ...userInfo } = request.body;
      const posted = await createUser({ ...userInfo });

      return response.json({ ...posted });
    } catch (e) {
      return response.status(400).json({ error: e.message });
    }
  };
};
