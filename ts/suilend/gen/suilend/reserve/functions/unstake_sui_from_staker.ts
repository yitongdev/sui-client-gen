import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface UnstakeSuiFromStakerArgs {
  reserve: TransactionObjectInput;
  liquidityRequest: TransactionObjectInput;
  suiSystemState: TransactionObjectInput;
}

/**
 * Move function: `unstake_sui_from_staker`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param reserve - Function parameter
 * @param liquidityRequest - Function parameter
 * @param suiSystemState - Function parameter
 * @param txContext - Function parameter
 */
export function unstakeSuiFromStaker(
  tx: Transaction,
  typeArgs: [string, string],
  args: UnstakeSuiFromStakerArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::reserve::unstake_sui_from_staker`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.reserve),
      obj(tx, args.liquidityRequest),
      obj(tx, args.suiSystemState),
    ],
  });
}
