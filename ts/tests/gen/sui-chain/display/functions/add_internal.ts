import { obj, pure } from "../../../_framework/util.js";
import { String } from "../../../move-stdlib-chain/string/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AddInternalArgs {
  display: TransactionObjectInput;
  string1: string | TransactionArgument;
  string2: string | TransactionArgument;
}

/**
 * Move function: `add_internal`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::display`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param display - Function parameter
 * @param string1 - Function parameter
 * @param string2 - Function parameter
 */
export function addInternal(
  tx: Transaction,
  typeArg: string,
  args: AddInternalArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::display::add_internal`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.display),
      pure(tx, args.string1, `${String.$typeName}`),
      pure(tx, args.string2, `${String.$typeName}`),
    ],
  });
}
