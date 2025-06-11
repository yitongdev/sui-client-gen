import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AdminWithdrawFeesArgs {
  pool: TransactionObjectInput;
  adminCap: TransactionObjectInput;
  amount: bigint | TransactionArgument;
}

/**
 * Move function: `admin_withdraw_fees`
 * Module: `f917eb03d02b9221b10276064b2c10296276cb43feb24aac35113a272dd691c7::pool`
 *
 * @typeParam A - Type parameter 0
 * @typeParam B - Type parameter 1
 * @param tx - The transaction object
 * @param pool - Function parameter
 * @param adminCap - Function parameter
 * @param amount - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function adminWithdrawFees(
  tx: Transaction,
  typeArgs: [string, string],
  args: AdminWithdrawFeesArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::pool::admin_withdraw_fees`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.pool),
      obj(tx, args.adminCap),
      pure(tx, args.amount, `u64`),
    ],
  });
}
