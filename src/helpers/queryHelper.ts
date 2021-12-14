const generateSelect = ({ table }: {table: string}) => `SELECT * FROM "${table}"`;

export {
  generateSelect,
};
