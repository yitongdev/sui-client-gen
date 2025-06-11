import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface CollectFeesArgs {
  weightHook: TransactionObjectInput;
  weightHookAdminCap: TransactionObjectInput;
  liquidStakingInfo: TransactionObjectInput;
  suiSystemState: TransactionObjectInput;
}

/**
 * Move function: `collect_fees`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::weight`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param weightHook - Function parameter
 * @param weightHookAdminCap - Function parameter
 * @param liquidStakingInfo - Function parameter
 * @param suiSystemState - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function collectFees(
  tx: Transaction,
  typeArg: string,
  args: CollectFeesArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::weight::collect_fees`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.weightHook),
      obj(tx, args.weightHookAdminCap),
      obj(tx, args.liquidStakingInfo),
      obj(tx, args.suiSystemState),
    ],
  });
}
