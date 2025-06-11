import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `item`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param transferRequest - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function item(
  tx: Transaction,
  typeArg: string,
  transferRequest: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer_policy::item`,
    typeArguments: [typeArg],
    arguments: [obj(tx, transferRequest)],
  });
}
