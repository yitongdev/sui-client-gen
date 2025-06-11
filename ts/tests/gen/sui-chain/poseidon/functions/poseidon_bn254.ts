import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `poseidon_bn254`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::poseidon`
 *
 * @param tx - The transaction object
 * @param vecU256 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function poseidonBn254(
  tx: Transaction,
  vecU256: Array<bigint | TransactionArgument> | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::poseidon::poseidon_bn254`,
    arguments: [pure(tx, vecU256, `vector<u256>`)],
  });
}
