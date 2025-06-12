import { GenericArg, generic, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface PublicTransferArgs {
  obj: GenericArg;
  recipient: string | TransactionArgument;
}

/**
 * Move function: `public_transfer`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param obj - Function parameter
 * @param recipient - Function parameter
 */
export function publicTransfer(
  tx: Transaction,
  typeArg: string,
  args: PublicTransferArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer::public_transfer`,
    typeArguments: [typeArg],
    arguments: [generic(tx, `${typeArg}`, args.obj), pure(tx, args.recipient, `address`)],
  });
}
