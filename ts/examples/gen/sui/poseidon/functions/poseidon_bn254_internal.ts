import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

/**
 * Move function: `poseidon_bn254_internal`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::poseidon`
 *
 * @param tx - The transaction object
 * @param data - Function parameter
 */
export function poseidonBn254Internal(
  tx: Transaction,
  data:
    | Array<Array<number | TransactionArgument> | TransactionArgument>
    | TransactionArgument,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::poseidon::poseidon_bn254_internal`,
    arguments: [pure(tx, data, `vector<vector<u8>>`)],
  });
}
