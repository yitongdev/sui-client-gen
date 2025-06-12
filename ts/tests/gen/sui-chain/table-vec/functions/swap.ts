import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SwapArgs {
  tableVec: TransactionObjectInput;
  u641: bigint | TransactionArgument;
  u642: bigint | TransactionArgument;
}

/**
 * Move function: `swap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::table_vec`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param tableVec - Function parameter
 * @param u641 - Function parameter
 * @param u642 - Function parameter
 */
export function swap(tx: Transaction, typeArg: string, args: SwapArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::table_vec::swap`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.tableVec), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`)],
  });
}
