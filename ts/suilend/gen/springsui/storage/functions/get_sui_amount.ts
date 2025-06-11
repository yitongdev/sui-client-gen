import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface GetSuiAmountArgs {
  poolTokenExchangeRate: TransactionObjectInput;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `get_sui_amount`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::storage`
 *
 * @param tx - The transaction object
 * @param poolTokenExchangeRate - Function parameter
 * @param u64 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function getSuiAmount(
  tx: Transaction,
  args: GetSuiAmountArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::storage::get_sui_amount`,
    arguments: [obj(tx, args.poolTokenExchangeRate), pure(tx, args.u64, `u64`)],
  });
}
