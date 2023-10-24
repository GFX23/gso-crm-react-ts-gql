import people from "../mongobase/database"; //get all of the available data from our database.

interface Person {
  id: number;
  name: string;
}

interface Args {
  id: number;
  name: string;
}

const Resolvers = {
  Query: {
    getAllPeople: (): Person[] => people,
    getPerson: (_: any, args: Args): Person | null => {
      console.log(args);
      const foundPerson = people.find((person) => person.id === args.id);
      return foundPerson || null;
    },
  },
  Mutation: {
    addPerson: (_: any, args: Args): Person => {
      const newPerson: Person = {
        id: people.length + 1,
        name: args.name,
      };
      people.push(newPerson);
      return newPerson;
    },
  },
}
export default Resolvers; //export this Resolver so we can use it in our project