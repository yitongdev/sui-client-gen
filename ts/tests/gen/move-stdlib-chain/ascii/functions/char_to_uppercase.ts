import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `char_to_uppercase`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::ascii`
 *
 * @param tx - The transaction object
 * @param u8 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function charToUppercase(
  tx: Transaction,
  u8: number | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::ascii::char_to_uppercase`,
    arguments: [pure(tx, u8, `u8`)],
  });
}
