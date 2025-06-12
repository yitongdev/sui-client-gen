import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface UnstakeNSuiArgs {
  staker: TransactionObjectInput;
  suiSystemState: TransactionObjectInput;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `unstake_n_sui`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::staker`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param staker - Function parameter
 * @param suiSystemState - Function parameter
 * @param u64 - Function parameter
 * @param txContext - Function parameter
 */
export function unstakeNSui(
  tx: Transaction,
  typeArg: string,
  args: UnstakeNSuiArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::staker::unstake_n_sui`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.staker), obj(tx, args.suiSystemState), pure(tx, args.u64, `u64`)],
  });
}
