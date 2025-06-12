import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SplitAndTransferArgs {
  coin: TransactionObjectInput;
  u64: bigint | TransactionArgument;
  address: string | TransactionArgument;
}

/**
 * Move function: `split_and_transfer`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::pay`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param coin - Function parameter
 * @param u64 - Function parameter
 * @param address - Function parameter
 * @param txContext - Function parameter
 */
export function splitAndTransfer(
  tx: Transaction,
  typeArg: string,
  args: SplitAndTransferArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::pay::split_and_transfer`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.coin), pure(tx, args.u64, `u64`), pure(tx, args.address, `address`)],
  });
}
