import { pure, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Element } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SumArgs {
  u8: number | TransactionArgument;
  vecElement: Array<TransactionObjectInput> | TransactionArgument;
}

/**
 * Move function: `sum`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::group_ops`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param u8 - Function parameter
 * @param vecElement - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function sum(tx: Transaction, typeArg: string, args: SumArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::group_ops::sum`,
    typeArguments: [typeArg],
    arguments: [
      pure(tx, args.u8, `u8`),
      vector(tx, `${Element.$typeName}<${typeArg}>`, args.vecElement),
    ],
  });
}
