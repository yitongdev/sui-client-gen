import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface TransferArgs {
  token: TransactionObjectInput;
  address: string | TransactionArgument;
}

/**
 * Move function: `transfer`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param token - Function parameter
 * @param address - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function transfer(
  tx: Transaction,
  typeArg: string,
  args: TransferArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::transfer`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.token), pure(tx, args.address, `address`)],
  });
}
