import { GenericArg, generic, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface TransferArgs {
  t0: GenericArg;
  address: string | TransactionArgument;
}

/**
 * Move function: `transfer`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param t0 - Function parameter
 * @param address - Function parameter
 */
export function transfer(
  tx: Transaction,
  typeArg: string,
  args: TransferArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer::transfer`,
    typeArguments: [typeArg],
    arguments: [
      generic(tx, `${typeArg}`, args.t0),
      pure(tx, args.address, `address`),
    ],
  });
}
