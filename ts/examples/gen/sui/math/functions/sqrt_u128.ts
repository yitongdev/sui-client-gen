import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

/**
 * Move function: `sqrt_u128`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::math`
 *
 * @param tx - The transaction object
 * @param x - Function parameter
 */
export function sqrtU128(tx: Transaction, x: bigint | TransactionArgument) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::math::sqrt_u128`,
    arguments: [pure(tx, x, `u128`)],
  });
}
