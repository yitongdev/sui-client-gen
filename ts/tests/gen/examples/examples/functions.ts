import { pure, vector } from "../../_framework/util.js";
import { String } from "../../move-stdlib/ascii/structs.js";
import { Option } from "../../move-stdlib/option/structs.js";
import { String as String1 } from "../../move-stdlib/string/structs.js";
import { ID } from "../../sui/object/structs.js";
import { PUBLISHED_AT } from "../constants.js";
import { ExampleStruct } from "./structs.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export function createExampleStruct(tx: Transaction) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::examples::create_example_struct`,
    arguments: [],
  });
}

export interface SpecialTypesArgs {
  asciiString: string | TransactionArgument;
  utf8String: string | TransactionArgument;
  vectorOfU64: Array<bigint | TransactionArgument> | TransactionArgument;
  vectorOfObjects: Array<TransactionObjectInput> | TransactionArgument;
  idField: string | TransactionArgument;
  address: string | TransactionArgument;
  optionSome: bigint | TransactionArgument | TransactionArgument | null;
  optionNone: bigint | TransactionArgument | TransactionArgument | null;
}

export function specialTypes(tx: Transaction, args: SpecialTypesArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::examples::special_types`,
    arguments: [
      pure(tx, args.asciiString, `${String.$typeName}`),
      pure(tx, args.utf8String, `${String1.$typeName}`),
      pure(tx, args.vectorOfU64, `vector<u64>`),
      vector(tx, `${ExampleStruct.$typeName}`, args.vectorOfObjects),
      pure(tx, args.idField, `${ID.$typeName}`),
      pure(tx, args.address, `address`),
      pure(tx, args.optionSome, `${Option.$typeName}<u64>`),
      pure(tx, args.optionNone, `${Option.$typeName}<u64>`),
    ],
  });
}
