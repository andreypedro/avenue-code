import data from "../data/mockData.js";

export const Person = {
  getById(req, res, next) {
    const id = req.params.id;
    let dataFiltered = data.filter((row) => Number(row.id) === Number(id));
    res.json(dataFiltered);
  },
  getList(req, res, next) {
    const { firstName, lastName } = req.query;

    let dataFiltered = data;

    if (firstName) {
      dataFiltered = data.filter((row) => row.firstName.includes(firstName));
    }

    if (lastName) {
      dataFiltered = data.filter((row) => row.lastName.includes(lastName));
    }

    res.json(dataFiltered);
  },
  create(req, res, next) {
    try {
      const firstName = req.body.firstName;
      const lastName = req.body.lastName;

      if (!firstName || !lastName) {
        throw new Error("First name and last name are required!");
      }

      const lastId = data.reduce(
        (max, current) => (current.id > max ? (max = current.id) : max),
        0
      );
      const id = lastId + 1;

      const people = {
        id,
        firstName,
        lastName,
      };

      data.push(people);

      res.json(people);
    } catch (err) {
      next(err);
    }
  },
};
