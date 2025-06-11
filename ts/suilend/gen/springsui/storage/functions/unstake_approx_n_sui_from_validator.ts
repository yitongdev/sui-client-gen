import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface UnstakeApproxNSuiFromValidatorArgs {
  storage: TransactionObjectInput;
  suiSystemState: TransactionObjectInput;
  u641: bigint | TransactionArgument;
  u642: bigint | TransactionArgument;
}

/**
 * Move function: `unstake_approx_n_sui_from_validator`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::storage`
 *
 * @param tx - The transaction object
 * @param storage - Function parameter
 * @param suiSystemState - Function parameter
 * @param u641 - Function parameter
 * @param u642 - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function unstakeApproxNSuiFromValidator(
  tx: Transaction,
  args: UnstakeApproxNSuiFromValidatorArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::storage::unstake_approx_n_sui_from_validator`,
    arguments: [
      obj(tx, args.storage),
      obj(tx, args.suiSystemState),
      pure(tx, args.u641, `u64`),
      pure(tx, args.u642, `u64`),
    ],
  });
}
