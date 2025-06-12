import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `decode_byte`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::hex`
 *
 * @param tx - The transaction object
 * @param u8 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function decodeByte(tx: Transaction, u8: number | TransactionArgument): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::hex::decode_byte`,
    arguments: [pure(tx, u8, `u8`)],
  });
}
