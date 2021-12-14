interface IUser {
    name: string,
    token?: string,
}

interface IUserDB extends IUser {
  id: number,
}

export {
  IUser,
  IUserDB,
};
