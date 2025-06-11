import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `peel_u32`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bcs`
 *
 * @param tx - The transaction object
 * @param bcs - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function peelU32(
  tx: Transaction,
  bcs: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bcs::peel_u32`,
    arguments: [obj(tx, bcs)],
  });
}
