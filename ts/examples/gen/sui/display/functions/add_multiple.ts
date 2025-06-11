import { String } from "../../../_dependencies/source/0x1/string/structs/index.js";
import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AddMultipleArgs {
  self: TransactionObjectInput;
  fields: Array<string | TransactionArgument> | TransactionArgument;
  values: Array<string | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `add_multiple`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::display`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param fields - Function parameter
 * @param values - Function parameter
 */
export function addMultiple(
  tx: Transaction,
  typeArg: string,
  args: AddMultipleArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::display::add_multiple`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.self),
      pure(tx, args.fields, `vector<${String.$typeName}>`),
      pure(tx, args.values, `vector<${String.$typeName}>`),
    ],
  });
}
