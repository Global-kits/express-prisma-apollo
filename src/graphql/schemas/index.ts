import { readFileSync } from "fs";
import { gql } from "graphql-tag";
import { resolve } from "path";

const testSchema = readFileSync(resolve(__dirname, "test.graphql"), {
  encoding: "utf-8",
});

export const typeDefs = gql`
  ${testSchema}
`;
