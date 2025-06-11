import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface FromQuotientArgs {
  u641: bigint | TransactionArgument;
  u642: bigint | TransactionArgument;
}

/**
 * Move function: `from_quotient`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::uq32_32`
 *
 * @param tx - The transaction object
 * @param u641 - Function parameter
 * @param u642 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function fromQuotient(
  tx: Transaction,
  args: FromQuotientArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::uq32_32::from_quotient`,
    arguments: [pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`)],
  });
}
