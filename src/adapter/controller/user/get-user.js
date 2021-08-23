export default function buildGetUser({ findUser }) {
  return async function getUser(response) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const users = await findUser({
        userId: response.query.userId,
      });

      return {
        headers,
        statusCode: 200,
        body: users,
      };
    } catch (e) {
      console.log(e);

      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
}
