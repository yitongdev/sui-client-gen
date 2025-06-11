import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface CompoundDebtArgs {
  borrow: TransactionObjectInput;
  reserve: TransactionObjectInput;
}

/**
 * Move function: `compound_debt`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::obligation`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param borrow - Function parameter
 * @param reserve - Function parameter
 */
export function compoundDebt(
  tx: Transaction,
  typeArg: string,
  args: CompoundDebtArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::obligation::compound_debt`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.borrow), obj(tx, args.reserve)],
  });
}
