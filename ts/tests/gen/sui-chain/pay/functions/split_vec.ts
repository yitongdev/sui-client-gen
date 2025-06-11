import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SplitVecArgs {
  coin: TransactionObjectInput;
  vecU64: Array<bigint | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `split_vec`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::pay`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param coin - Function parameter
 * @param vecU64 - Function parameter
 * @param txContext - Function parameter
 */
export function splitVec(
  tx: Transaction,
  typeArg: string,
  args: SplitVecArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::pay::split_vec`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.coin), pure(tx, args.vecU64, `vector<u64>`)],
  });
}
