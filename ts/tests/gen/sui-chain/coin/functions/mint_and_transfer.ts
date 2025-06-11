import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface MintAndTransferArgs {
  treasuryCap: TransactionObjectInput;
  u64: bigint | TransactionArgument;
  address: string | TransactionArgument;
}

/**
 * Move function: `mint_and_transfer`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param treasuryCap - Function parameter
 * @param u64 - Function parameter
 * @param address - Function parameter
 * @param txContext - Function parameter
 */
export function mintAndTransfer(
  tx: Transaction,
  typeArg: string,
  args: MintAndTransferArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::mint_and_transfer`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.treasuryCap),
      pure(tx, args.u64, `u64`),
      pure(tx, args.address, `address`),
    ],
  });
}
