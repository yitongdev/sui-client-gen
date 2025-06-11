import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface RebalanceArgs {
  weightHook: TransactionObjectInput;
  suiSystemState: TransactionObjectInput;
  liquidStakingInfo: TransactionObjectInput;
}

/**
 * Move function: `rebalance`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::weight`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param weightHook - Function parameter
 * @param suiSystemState - Function parameter
 * @param liquidStakingInfo - Function parameter
 * @param txContext - Function parameter
 */
export function rebalance(
  tx: Transaction,
  typeArg: string,
  args: RebalanceArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::weight::rebalance`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.weightHook),
      obj(tx, args.suiSystemState),
      obj(tx, args.liquidStakingInfo),
    ],
  });
}
