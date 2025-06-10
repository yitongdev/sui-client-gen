import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface DivideIntoNArgs {
  self: TransactionObjectInput;
  n: bigint | TransactionArgument;
}

/**
 * Move function: `divide_into_n`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param n - Function parameter
 * @param ctx - Function parameter
 */
export function divideIntoN(
  tx: Transaction,
  typeArg: string,
  args: DivideIntoNArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::divide_into_n`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.self), pure(tx, args.n, `u64`)],
  });
}
