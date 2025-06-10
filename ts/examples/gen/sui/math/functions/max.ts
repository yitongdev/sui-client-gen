import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export interface MaxArgs {
  x: bigint | TransactionArgument;
  y: bigint | TransactionArgument;
}

/**
 * Move function: `max`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::math`
 *
 * @param tx - The transaction object
 * @param x - Function parameter
 * @param y - Function parameter
 */
export function max(tx: Transaction, args: MaxArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::math::max`,
    arguments: [pure(tx, args.x, `u64`), pure(tx, args.y, `u64`)],
  });
}
