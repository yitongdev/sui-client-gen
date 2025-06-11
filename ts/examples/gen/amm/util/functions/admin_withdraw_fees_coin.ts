import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AdminWithdrawFeesCoinArgs {
  pool: TransactionObjectInput;
  adminCap: TransactionObjectInput;
  amount: bigint | TransactionArgument;
}

/**
 * Move function: `admin_withdraw_fees_coin`
 * Module: `f917eb03d02b9221b10276064b2c10296276cb43feb24aac35113a272dd691c7::util`
 *
 * @typeParam A - Type parameter 0
 * @typeParam B - Type parameter 1
 * @param tx - The transaction object
 * @param pool - Function parameter
 * @param adminCap - Function parameter
 * @param amount - Function parameter
 * @param ctx - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function adminWithdrawFeesCoin(
  tx: Transaction,
  typeArgs: [string, string],
  args: AdminWithdrawFeesCoinArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::util::admin_withdraw_fees_coin`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.pool),
      obj(tx, args.adminCap),
      pure(tx, args.amount, `u64`),
    ],
  });
}
