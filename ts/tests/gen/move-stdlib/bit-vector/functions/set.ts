import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SetArgs {
  bitvector: TransactionObjectInput;
  bitIndex: bigint | TransactionArgument;
}

/**
 * Move function: `set`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::bit_vector`
 *
 * @param tx - The transaction object
 * @param bitvector - Function parameter
 * @param bitIndex - Function parameter
 */
export function set(tx: Transaction, args: SetArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bit_vector::set`,
    arguments: [obj(tx, args.bitvector), pure(tx, args.bitIndex, `u64`)],
  });
}
