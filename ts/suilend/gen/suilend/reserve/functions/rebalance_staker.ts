import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface RebalanceStakerArgs {
  reserve: TransactionObjectInput;
  suiSystemState: TransactionObjectInput;
}

/**
 * Move function: `rebalance_staker`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param reserve - Function parameter
 * @param suiSystemState - Function parameter
 * @param txContext - Function parameter
 */
export function rebalanceStaker(
  tx: Transaction,
  typeArg: string,
  args: RebalanceStakerArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::reserve::rebalance_staker`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.reserve), obj(tx, args.suiSystemState)],
  });
}
