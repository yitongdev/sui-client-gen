import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

/**
 * Move function: `from_ascii_bytes`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::address`
 *
 * @param tx - The transaction object
 * @param bytes - Function parameter
 */
export function fromAsciiBytes(
  tx: Transaction,
  bytes: Array<number | TransactionArgument> | TransactionArgument,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::address::from_ascii_bytes`,
    arguments: [pure(tx, bytes, `vector<u8>`)],
  });
}
