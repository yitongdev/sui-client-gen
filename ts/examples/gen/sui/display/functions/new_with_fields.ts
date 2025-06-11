import { String } from "../../../_dependencies/source/0x1/string/structs/index.js";
import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface NewWithFieldsArgs {
  pub: TransactionObjectInput;
  fields: Array<string | TransactionArgument> | TransactionArgument;
  values: Array<string | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `new_with_fields`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::display`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param pub - Function parameter
 * @param fields - Function parameter
 * @param values - Function parameter
 * @param ctx - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function newWithFields(
  tx: Transaction,
  typeArg: string,
  args: NewWithFieldsArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::display::new_with_fields`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.pub),
      pure(tx, args.fields, `vector<${String.$typeName}>`),
      pure(tx, args.values, `vector<${String.$typeName}>`),
    ],
  });
}
