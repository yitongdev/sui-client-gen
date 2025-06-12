import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface SimulatedCompoundInterestArgs {
  reserve: TransactionObjectInput;
  clock: TransactionObjectInput;
}

/**
 * Move function: `simulated_compound_interest`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param reserve - Function parameter
 * @param clock - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function simulatedCompoundInterest(
  tx: Transaction,
  typeArg: string,
  args: SimulatedCompoundInterestArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::reserve::simulated_compound_interest`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.reserve), obj(tx, args.clock)],
  });
}
