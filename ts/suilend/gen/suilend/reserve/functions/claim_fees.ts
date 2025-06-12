import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface ClaimFeesArgs {
  reserve: TransactionObjectInput;
  suiSystemState: TransactionObjectInput;
}

/**
 * Move function: `claim_fees`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param reserve - Function parameter
 * @param suiSystemState - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function claimFees(
  tx: Transaction,
  typeArgs: [string, string],
  args: ClaimFeesArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::reserve::claim_fees`,
    typeArguments: typeArgs,
    arguments: [obj(tx, args.reserve), obj(tx, args.suiSystemState)],
  });
}
