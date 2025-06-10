import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface TransferArgs {
  t: TransactionObjectInput;
  recipient: string | TransactionArgument;
}

/**
 * Move function: `transfer`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param t - Function parameter
 * @param recipient - Function parameter
 * @param ctx - Function parameter
 */
export function transfer(tx: Transaction, typeArg: string, args: TransferArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::transfer`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.t), pure(tx, args.recipient, `address`)],
  });
}
