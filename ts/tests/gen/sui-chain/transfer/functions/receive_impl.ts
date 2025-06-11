import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ReceiveImplArgs {
  address: string | TransactionArgument;
  id: string | TransactionArgument;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `receive_impl`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param address - Function parameter
 * @param id - Function parameter
 * @param u64 - Function parameter
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
      pure(tx, args.address, `address`),
      pure(tx, args.id, `${ID.$typeName}`),
      pure(tx, args.u64, `u64`),
    ],
  });
}
