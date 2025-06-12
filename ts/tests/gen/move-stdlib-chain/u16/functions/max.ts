import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface MaxArgs {
  u161: number | TransactionArgument;
  u162: number | TransactionArgument;
}

/**
 * Move function: `max`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::u16`
 *
 * @param tx - The transaction object
 * @param u161 - Function parameter
 * @param u162 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function max(tx: Transaction, args: MaxArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::u16::max`,
    arguments: [pure(tx, args.u161, `u16`), pure(tx, args.u162, `u16`)],
  });
}
