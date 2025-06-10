import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export interface DiffArgs {
  x: bigint | TransactionArgument;
  y: bigint | TransactionArgument;
}

/**
 * Move function: `diff`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::math`
 *
 * @param tx - The transaction object
 * @param x - Function parameter
 * @param y - Function parameter
 */
export function diff(tx: Transaction, args: DiffArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::math::diff`,
    arguments: [pure(tx, args.x, `u64`), pure(tx, args.y, `u64`)],
  });
}
