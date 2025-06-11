import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `peel_enum_tag`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bcs`
 *
 * @param tx - The transaction object
 * @param bcs - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function peelEnumTag(
  tx: Transaction,
  bcs: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bcs::peel_enum_tag`,
    arguments: [obj(tx, bcs)],
  });
}
