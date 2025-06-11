import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface DiffArgs {
  u321: number | TransactionArgument;
  u322: number | TransactionArgument;
}

/**
 * Move function: `diff`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::u32`
 *
 * @param tx - The transaction object
 * @param u321 - Function parameter
 * @param u322 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function diff(tx: Transaction, args: DiffArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::u32::diff`,
    arguments: [pure(tx, args.u321, `u32`), pure(tx, args.u322, `u32`)],
  });
}
