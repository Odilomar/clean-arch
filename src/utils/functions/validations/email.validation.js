module.exports = function validate(email) {
  const tester =
    /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  const [account, address] = email.split("@");
  const domainParts = address.split(".");

  return (
    !email ||
    email.length > 256 ||
    !tester.test(email) ||
    account.length > 64 ||
    domainParts.some((part) => part.length > 63)
  );
};
