import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `from_int`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::uq32_32`
 *
 * @param tx - The transaction object
 * @param u32 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function fromInt(tx: Transaction, u32: number | TransactionArgument): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::uq32_32::from_int`,
    arguments: [pure(tx, u32, `u32`)],
  });
}
