import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `poseidon_bn254_internal`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::poseidon`
 *
 * @param tx - The transaction object
 * @param vecVecU8 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function poseidonBn254Internal(
  tx: Transaction,
  vecVecU8: Array<Array<number | TransactionArgument> | TransactionArgument> | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::poseidon::poseidon_bn254_internal`,
    arguments: [pure(tx, vecVecU8, `vector<vector<u8>>`)],
  });
}
