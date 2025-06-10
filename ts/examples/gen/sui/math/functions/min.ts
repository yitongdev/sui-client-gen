import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export interface MinArgs {
  x: bigint | TransactionArgument;
  y: bigint | TransactionArgument;
}

/**
 * Move function: `min`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::math`
 *
 * @param tx - The transaction object
 * @param x - Function parameter
 * @param y - Function parameter
 */
export function min(tx: Transaction, args: MinArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::math::min`,
    arguments: [pure(tx, args.x, `u64`), pure(tx, args.y, `u64`)],
  });
}
