import { EntitySchema } from "typeorm";
export class Example {
  constructor() {}
}

export const ExampleSchema = new EntitySchema({
  name: "",
  target: Example,
  columns: {
    // id: {
    //   primary: true,
    //   type: "int",
    //   generated: "increment",
    // },
    // company: {
    //   type: "varchar",
    //   enum: ["ikea", "liddy", "caressa"],
    // },
    // createdAt: {
    //   type: "timestamp",
    //   createDate: true,
    // },
  },
});
