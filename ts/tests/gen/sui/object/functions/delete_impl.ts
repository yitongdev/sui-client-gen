import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `delete_impl`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object`
 *
 * @param tx - The transaction object
 * @param id - Function parameter
 */
export function deleteImpl(
  tx: Transaction,
  id: string | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object::delete_impl`,
    arguments: [pure(tx, id, `address`)],
  });
}
