import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

/**
 * Move function: `decode`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::hex`
 *
 * @param tx - The transaction object
 * @param hex - Function parameter
 */
export function decode(
  tx: Transaction,
  hex: Array<number | TransactionArgument> | TransactionArgument,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::hex::decode`,
    arguments: [pure(tx, hex, `vector<u8>`)],
  });
}
