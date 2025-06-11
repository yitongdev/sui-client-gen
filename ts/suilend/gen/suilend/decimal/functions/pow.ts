import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface PowArgs {
  decimal: TransactionObjectInput;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `pow`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::decimal`
 *
 * @param tx - The transaction object
 * @param decimal - Function parameter
 * @param u64 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function pow(tx: Transaction, args: PowArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::decimal::pow`,
    arguments: [obj(tx, args.decimal), pure(tx, args.u64, `u64`)],
  });
}
