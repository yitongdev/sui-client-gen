import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface MuldivU128Args {
  a: bigint | TransactionArgument;
  b: bigint | TransactionArgument;
  c: bigint | TransactionArgument;
}

/**
 * Move function: `muldiv_u128`
 * Module: `f917eb03d02b9221b10276064b2c10296276cb43feb24aac35113a272dd691c7::pool`
 *
 * @param tx - The transaction object
 * @param a - Function parameter
 * @param b - Function parameter
 * @param c - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function muldivU128(tx: Transaction, args: MuldivU128Args): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::pool::muldiv_u128`,
    arguments: [pure(tx, args.a, `u128`), pure(tx, args.b, `u128`), pure(tx, args.c, `u128`)],
  });
}
