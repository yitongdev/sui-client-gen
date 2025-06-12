import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface ReceiveImplArgs {
  parent: string | TransactionArgument;
  toReceive: string | TransactionArgument;
  version: bigint | TransactionArgument;
}

/**
 * Move function: `receive_impl`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param parent - Function parameter
 * @param toReceive - Function parameter
 * @param version - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function receiveImpl(
  tx: Transaction,
  typeArg: string,
  args: ReceiveImplArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer::receive_impl`,
    typeArguments: [typeArg],
    arguments: [
      pure(tx, args.parent, `address`),
      pure(tx, args.toReceive, `${ID.$typeName}`),
      pure(tx, args.version, `u64`),
    ],
  });
}
