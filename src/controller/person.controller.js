import data from "../data/mockData.js";

export const Person = {
  getById(req, res, next) {
    const id = req.params.id;
    const person = data.filter((row) => Number(row.id) === Number(id))[0];
    res.json(person);
  },
  getList(req, res, next) {
    const { firstName, lastName } = req.query;

    let persons = data;

    if (firstName) {
      persons = data.filter((row) => row.firstName.includes(firstName));
    }

    if (lastName) {
      persons = data.filter((row) => row.lastName.includes(lastName));
    }

    res.json(persons);
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

      const person = {
        id,
        firstName,
        lastName,
      };

      data.push(person);

      res.status(201).json(person);
    } catch (err) {
      next(err);
    }
  },
};
