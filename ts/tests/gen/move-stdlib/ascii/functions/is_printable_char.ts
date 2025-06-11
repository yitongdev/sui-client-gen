import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `is_printable_char`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::ascii`
 *
 * @param tx - The transaction object
 * @param byte - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function isPrintableChar(
  tx: Transaction,
  byte: number | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::ascii::is_printable_char`,
    arguments: [pure(tx, byte, `u8`)],
  });
}
