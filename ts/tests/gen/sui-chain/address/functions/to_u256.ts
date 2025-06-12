import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `to_u256`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::address`
 *
 * @param tx - The transaction object
 * @param address - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function toU256(tx: Transaction, address: string | TransactionArgument): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::address::to_u256`,
    arguments: [pure(tx, address, `address`)],
  });
}
