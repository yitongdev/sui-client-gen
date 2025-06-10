import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface DivideAndKeepArgs {
  self: TransactionObjectInput;
  n: bigint | TransactionArgument;
}

/**
 * Move function: `divide_and_keep`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::pay`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param n - Function parameter
 * @param ctx - Function parameter
 */
export function divideAndKeep(
  tx: Transaction,
  typeArg: string,
  args: DivideAndKeepArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::pay::divide_and_keep`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.self), pure(tx, args.n, `u64`)],
  });
}
