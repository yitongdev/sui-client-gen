import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface DivideAndKeepArgs {
  coin: TransactionObjectInput;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `divide_and_keep`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::pay`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param coin - Function parameter
 * @param u64 - Function parameter
 * @param txContext - Function parameter
 */
export function divideAndKeep(
  tx: Transaction,
  typeArg: string,
  args: DivideAndKeepArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::pay::divide_and_keep`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.coin), pure(tx, args.u64, `u64`)],
  });
}
