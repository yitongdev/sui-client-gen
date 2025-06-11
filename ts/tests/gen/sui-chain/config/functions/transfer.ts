import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface TransferArgs {
  config: TransactionObjectInput;
  address: string | TransactionArgument;
}

/**
 * Move function: `transfer`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::config`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param config - Function parameter
 * @param address - Function parameter
 */
export function transfer(
  tx: Transaction,
  typeArg: string,
  args: TransferArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::config::transfer`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.config), pure(tx, args.address, `address`)],
  });
}
