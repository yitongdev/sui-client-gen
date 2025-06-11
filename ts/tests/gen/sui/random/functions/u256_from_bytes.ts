import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface U256FromBytesArgs {
  g: TransactionObjectInput;
  numOfBytes: number | TransactionArgument;
}

/**
 * Move function: `u256_from_bytes`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::random`
 *
 * @param tx - The transaction object
 * @param g - Function parameter
 * @param numOfBytes - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function u256FromBytes(
  tx: Transaction,
  args: U256FromBytesArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::random::u256_from_bytes`,
    arguments: [obj(tx, args.g), pure(tx, args.numOfBytes, `u8`)],
  });
}
