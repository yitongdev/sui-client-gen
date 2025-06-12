import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface ClaimFeesArgs {
  staker: TransactionObjectInput;
  suiSystemState: TransactionObjectInput;
}

/**
 * Move function: `claim_fees`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::staker`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param staker - Function parameter
 * @param suiSystemState - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function claimFees(
  tx: Transaction,
  typeArg: string,
  args: ClaimFeesArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::staker::claim_fees`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.staker), obj(tx, args.suiSystemState)],
  });
}
