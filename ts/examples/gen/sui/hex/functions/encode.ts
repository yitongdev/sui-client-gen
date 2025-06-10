import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

/**
 * Move function: `encode`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::hex`
 *
 * @param tx - The transaction object
 * @param bytes - Function parameter
 */
export function encode(
  tx: Transaction,
  bytes: Array<number | TransactionArgument> | TransactionArgument,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::hex::encode`,
    arguments: [pure(tx, bytes, `vector<u8>`)],
  });
}
