import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `to_raw`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::uq64_64`
 *
 * @param tx - The transaction object
 * @param uq6464 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function toRaw(
  tx: Transaction,
  uq6464: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::uq64_64::to_raw`,
    arguments: [obj(tx, uq6464)],
  });
}
