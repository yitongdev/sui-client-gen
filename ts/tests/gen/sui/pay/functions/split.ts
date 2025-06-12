import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SplitArgs {
  coin: TransactionObjectInput;
  splitAmount: bigint | TransactionArgument;
}

/**
 * Move function: `split`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::pay`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param coin - Function parameter
 * @param splitAmount - Function parameter
 * @param ctx - Function parameter
 */
export function split(tx: Transaction, typeArg: string, args: SplitArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::pay::split`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.coin), pure(tx, args.splitAmount, `u64`)],
  });
}
