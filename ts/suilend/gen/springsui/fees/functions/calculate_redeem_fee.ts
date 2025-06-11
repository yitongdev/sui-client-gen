import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface CalculateRedeemFeeArgs {
  feeConfig: TransactionObjectInput;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `calculate_redeem_fee`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::fees`
 *
 * @param tx - The transaction object
 * @param feeConfig - Function parameter
 * @param u64 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function calculateRedeemFee(
  tx: Transaction,
  args: CalculateRedeemFeeArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::fees::calculate_redeem_fee`,
    arguments: [obj(tx, args.feeConfig), pure(tx, args.u64, `u64`)],
  });
}
