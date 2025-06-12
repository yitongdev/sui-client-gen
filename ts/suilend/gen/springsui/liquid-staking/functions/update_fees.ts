import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface UpdateFeesArgs {
  liquidStakingInfo: TransactionObjectInput;
  adminCap: TransactionObjectInput;
  feeConfig: TransactionObjectInput;
}

/**
 * Move function: `update_fees`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::liquid_staking`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param liquidStakingInfo - Function parameter
 * @param adminCap - Function parameter
 * @param feeConfig - Function parameter
 */
export function updateFees(
  tx: Transaction,
  typeArg: string,
  args: UpdateFeesArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::liquid_staking::update_fees`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.liquidStakingInfo), obj(tx, args.adminCap), obj(tx, args.feeConfig)],
  });
}
