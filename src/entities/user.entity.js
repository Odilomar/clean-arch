export default function buildMakeUser({ Birth, Name, Email }) {
  return function makeUser({
    id,
    name,
    birth,
    email,
    created_at = new Date(),
    updated_at = new Date(),
  }) {
    if (Name.validate(name)) throw new Error("Name is invalid!");
    if (Birth.validate(birth)) throw new Error("Birth is invalid!");
    if (Email.validate(email)) throw new Error("Email is invalid!");

    return Object.freeze({
      getId: () => id,
      getName: () => name,
      getBirth: () => birth,
      getEmail: () => email,
      getCreatedAt: () => created_at,
      getUpdatedAt: () => updated_at,
    });
  };
}
