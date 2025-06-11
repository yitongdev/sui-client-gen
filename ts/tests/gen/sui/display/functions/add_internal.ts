import { obj, pure } from "../../../_framework/util.js";
import { String } from "../../../move-stdlib/string/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AddInternalArgs {
  display: TransactionObjectInput;
  name: string | TransactionArgument;
  value: string | TransactionArgument;
}

/**
 * Move function: `add_internal`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::display`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param display - Function parameter
 * @param name - Function parameter
 * @param value - Function parameter
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
      pure(tx, args.name, `${String.$typeName}`),
      pure(tx, args.value, `${String.$typeName}`),
    ],
  });
}
