import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `record_new_uid`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object`
 *
 * @param tx - The transaction object
 * @param address - Function parameter
 */
export function recordNewUid(
  tx: Transaction,
  address: string | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object::record_new_uid`,
    arguments: [pure(tx, address, `address`)],
  });
}
