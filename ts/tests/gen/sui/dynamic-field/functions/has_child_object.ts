import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface HasChildObjectArgs {
  parent: string | TransactionArgument;
  id: string | TransactionArgument;
}

/**
 * Move function: `has_child_object`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::dynamic_field`
 *
 * @param tx - The transaction object
 * @param parent - Function parameter
 * @param id - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function hasChildObject(
  tx: Transaction,
  args: HasChildObjectArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::dynamic_field::has_child_object`,
    arguments: [pure(tx, args.parent, `address`), pure(tx, args.id, `address`)],
  });
}
