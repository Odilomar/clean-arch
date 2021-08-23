module.exports = function buildMakeUser({
  validateBirth,
  validateName,
  validateEmail,
}) {
  return function makeUser({
    id,
    name,
    birth,
    email,
    created_at = new Date(),
    updated_at = new Date(),
    deleted_at = null,
  }) {
    if (validateName(name)) throw new Error("Name is invalid!");
    if (validateBirth(birth)) throw new Error("Birth is invalid!");
    if (validateEmail(email)) throw new Error("Email is invalid!");

    return Object.freeze({
      getId: () => id,
      getName: () => name,
      getBirth: () => birth,
      getEmail: () => email,
      getCreatedAt: () => created_at,
      getUpdatedAt: () => updated_at,
      getDeletedAt: () => deleted_at,
    });
  };
};
