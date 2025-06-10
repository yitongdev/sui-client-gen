import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

/**
 * Move function: `poseidon_bn254`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::poseidon`
 *
 * @param tx - The transaction object
 * @param data - Function parameter
 */
export function poseidonBn254(
  tx: Transaction,
  data: Array<bigint | TransactionArgument> | TransactionArgument,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::poseidon::poseidon_bn254`,
    arguments: [pure(tx, data, `vector<u256>`)],
  });
}
