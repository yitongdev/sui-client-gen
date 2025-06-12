import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface FromQuotientArgs {
  u1281: bigint | TransactionArgument;
  u1282: bigint | TransactionArgument;
}

/**
 * Move function: `from_quotient`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::uq64_64`
 *
 * @param tx - The transaction object
 * @param u1281 - Function parameter
 * @param u1282 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function fromQuotient(tx: Transaction, args: FromQuotientArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::uq64_64::from_quotient`,
    arguments: [pure(tx, args.u1281, `u128`), pure(tx, args.u1282, `u128`)],
  });
}
