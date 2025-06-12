import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `g2_from_bytes`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bls12381`
 *
 * @param tx - The transaction object
 * @param bytes - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function g2FromBytes(
  tx: Transaction,
  bytes: Array<number | TransactionArgument> | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bls12381::g2_from_bytes`,
    arguments: [pure(tx, bytes, `vector<u8>`)],
  });
}
