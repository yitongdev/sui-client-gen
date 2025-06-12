import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface WithdrawArgs {
  staker: TransactionObjectInput;
  u64: bigint | TransactionArgument;
  suiSystemState: TransactionObjectInput;
}

/**
 * Move function: `withdraw`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::staker`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param staker - Function parameter
 * @param u64 - Function parameter
 * @param suiSystemState - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function withdraw(tx: Transaction, typeArg: string, args: WithdrawArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::staker::withdraw`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.staker), pure(tx, args.u64, `u64`), obj(tx, args.suiSystemState)],
  });
}
