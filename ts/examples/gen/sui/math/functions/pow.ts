import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export interface PowArgs {
  base: bigint | TransactionArgument;
  exponent: number | TransactionArgument;
}

/**
 * Move function: `pow`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::math`
 *
 * @param tx - The transaction object
 * @param base - Function parameter
 * @param exponent - Function parameter
 */
export function pow(tx: Transaction, args: PowArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::math::pow`,
    arguments: [pure(tx, args.base, `u64`), pure(tx, args.exponent, `u8`)],
  });
}
