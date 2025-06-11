import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface UnsetArgs {
  bitVector: TransactionObjectInput;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `unset`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::bit_vector`
 *
 * @param tx - The transaction object
 * @param bitVector - Function parameter
 * @param u64 - Function parameter
 */
export function unset(tx: Transaction, args: UnsetArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bit_vector::unset`,
    arguments: [obj(tx, args.bitVector), pure(tx, args.u64, `u64`)],
  });
}
