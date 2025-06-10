import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface SplitVecArgs {
  self: TransactionObjectInput;
  splitAmounts: Array<bigint | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `split_vec`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::pay`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param splitAmounts - Function parameter
 * @param ctx - Function parameter
 */
export function splitVec(tx: Transaction, typeArg: string, args: SplitVecArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::pay::split_vec`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.self), pure(tx, args.splitAmounts, `vector<u64>`)],
  });
}
