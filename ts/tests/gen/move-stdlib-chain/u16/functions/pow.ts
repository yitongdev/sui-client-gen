import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface PowArgs {
  u16: number | TransactionArgument;
  u8: number | TransactionArgument;
}

/**
 * Move function: `pow`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::u16`
 *
 * @param tx - The transaction object
 * @param u16 - Function parameter
 * @param u8 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function pow(tx: Transaction, args: PowArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::u16::pow`,
    arguments: [pure(tx, args.u16, `u16`), pure(tx, args.u8, `u8`)],
  });
}
