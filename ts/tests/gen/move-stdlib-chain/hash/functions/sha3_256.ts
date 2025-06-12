import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `sha3_256`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::hash`
 *
 * @param tx - The transaction object
 * @param vecU8 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function sha3256(
  tx: Transaction,
  vecU8: Array<number | TransactionArgument> | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::hash::sha3_256`,
    arguments: [pure(tx, vecU8, `vector<u8>`)],
  });
}
