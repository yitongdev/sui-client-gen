import { GenericArg, pure, vector } from "../../../_framework/util.js";
import { String as String1 } from "../../../move-stdlib/ascii/structs/index.js";
import { Option } from "../../../move-stdlib/option/structs/index.js";
import { String } from "../../../move-stdlib/string/structs/index.js";
import { ID } from "../../../sui/object/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Bar } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface CreateSpecialInVectorsArgs {
  string: Array<string | TransactionArgument> | TransactionArgument;
  asciiString: Array<string | TransactionArgument> | TransactionArgument;
  idField: Array<string | TransactionArgument> | TransactionArgument;
  bar: Array<TransactionObjectInput> | TransactionArgument;
  option: Array<bigint | TransactionArgument | null> | TransactionArgument;
  optionGeneric:
    | Array<GenericArg | TransactionArgument | null>
    | TransactionArgument;
}

/**
 * Move function: `create_special_in_vectors`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::fixture`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param string - Function parameter
 * @param asciiString - Function parameter
 * @param idField - Function parameter
 * @param bar - Function parameter
 * @param option - Function parameter
 * @param optionGeneric - Function parameter
 * @param txContext - Function parameter
 */
export function createSpecialInVectors(
  tx: Transaction,
  typeArg: string,
  args: CreateSpecialInVectorsArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::fixture::create_special_in_vectors`,
    typeArguments: [typeArg],
    arguments: [
      pure(tx, args.string, `vector<${String.$typeName}>`),
      pure(tx, args.asciiString, `vector<${String1.$typeName}>`),
      pure(tx, args.idField, `vector<${ID.$typeName}>`),
      vector(tx, `${Bar.$typeName}`, args.bar),
      pure(tx, args.option, `vector<${Option.$typeName}<u64>>`),
      vector(tx, `${Option.$typeName}<${typeArg}>`, args.optionGeneric),
    ],
  });
}
