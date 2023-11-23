import md5 from "md5-hash";

export const makeUserId = (enteredFirstName: string) => {
  let newId = "";

  function makeid(length: number) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      newId += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return newId;
  }

  const newHash = md5(enteredFirstName + makeid(5));

  return newHash;
};
