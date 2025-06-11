import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface DestroyAndWithdrawArgs {
  transferPolicy: TransactionObjectInput;
  transferPolicyCap: TransactionObjectInput;
}

/**
 * Move function: `destroy_and_withdraw`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param transferPolicy - Function parameter
 * @param transferPolicyCap - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function destroyAndWithdraw(
  tx: Transaction,
  typeArg: string,
  args: DestroyAndWithdrawArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer_policy::destroy_and_withdraw`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.transferPolicy), obj(tx, args.transferPolicyCap)],
  });
}
