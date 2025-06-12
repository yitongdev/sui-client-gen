import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `liquid_staking_info_id`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::registry`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param entry - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function liquidStakingInfoId(
  tx: Transaction,
  typeArg: string,
  entry: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::registry::liquid_staking_info_id`,
    typeArguments: [typeArg],
    arguments: [obj(tx, entry)],
  });
}
