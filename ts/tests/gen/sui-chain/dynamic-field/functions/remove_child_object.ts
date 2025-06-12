import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface RemoveChildObjectArgs {
  address1: string | TransactionArgument;
  address2: string | TransactionArgument;
}

/**
 * Move function: `remove_child_object`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::dynamic_field`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param address1 - Function parameter
 * @param address2 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function removeChildObject(
  tx: Transaction,
  typeArg: string,
  args: RemoveChildObjectArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::dynamic_field::remove_child_object`,
    typeArguments: [typeArg],
    arguments: [pure(tx, args.address1, `address`), pure(tx, args.address2, `address`)],
  });
}
