import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface JoinArgs {
  self: TransactionObjectInput;
  coin: TransactionObjectInput;
}

/**
 * Move function: `join`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::pay`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param coin - Function parameter
 */
export function join(
  tx: Transaction,
  typeArg: string,
  args: JoinArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::pay::join`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.self), obj(tx, args.coin)],
  });
}
