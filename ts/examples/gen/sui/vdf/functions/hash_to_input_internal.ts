import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

/**
 * Move function: `hash_to_input_internal`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::vdf`
 *
 * @param tx - The transaction object
 * @param message - Function parameter
 */
export function hashToInputInternal(
  tx: Transaction,
  message: Array<number | TransactionArgument> | TransactionArgument,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vdf::hash_to_input_internal`,
    arguments: [pure(tx, message, `vector<u8>`)],
  });
}
