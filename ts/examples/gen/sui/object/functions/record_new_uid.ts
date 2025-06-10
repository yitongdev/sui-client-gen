import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

/**
 * Move function: `record_new_uid`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object`
 *
 * @param tx - The transaction object
 * @param id - Function parameter
 */
export function recordNewUid(
  tx: Transaction,
  id: string | TransactionArgument,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object::record_new_uid`,
    arguments: [pure(tx, id, `address`)],
  });
}
