import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `keccak256`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::hash`
 *
 * @param tx - The transaction object
 * @param data - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function keccak256(
  tx: Transaction,
  data: Array<number | TransactionArgument> | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::hash::keccak256`,
    arguments: [pure(tx, data, `vector<u8>`)],
  });
}
