import { obj, pure } from "../../../_framework/util.js";
import { String } from "../../../move-stdlib-chain/string/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AddMultipleArgs {
  display: TransactionObjectInput;
  vecString1: Array<string | TransactionArgument> | TransactionArgument;
  vecString2: Array<string | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `add_multiple`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::display`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param display - Function parameter
 * @param vecString1 - Function parameter
 * @param vecString2 - Function parameter
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
      obj(tx, args.display),
      pure(tx, args.vecString1, `vector<${String.$typeName}>`),
      pure(tx, args.vecString2, `vector<${String.$typeName}>`),
    ],
  });
}
