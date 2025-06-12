import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `hex_char_value`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::address`
 *
 * @param tx - The transaction object
 * @param u8 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function hexCharValue(tx: Transaction, u8: number | TransactionArgument): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::address::hex_char_value`,
    arguments: [pure(tx, u8, `u8`)],
  });
}
