import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SaturatingSubArgs {
  decimal1: TransactionObjectInput;
  decimal2: TransactionObjectInput;
}

/**
 * Move function: `saturating_sub`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::decimal`
 *
 * @param tx - The transaction object
 * @param decimal1 - Function parameter
 * @param decimal2 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function saturatingSub(
  tx: Transaction,
  args: SaturatingSubArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::decimal::saturating_sub`,
    arguments: [obj(tx, args.decimal1), obj(tx, args.decimal2)],
  });
}
