import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `try_as_u16`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::u256`
 *
 * @param tx - The transaction object
 * @param u256 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function tryAsU16(tx: Transaction, u256: bigint | TransactionArgument): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::u256::try_as_u16`,
    arguments: [pure(tx, u256, `u256`)],
  });
}
