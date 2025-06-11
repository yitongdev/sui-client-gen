import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { String } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SubstringArgs {
  string: string | TransactionArgument;
  u641: bigint | TransactionArgument;
  u642: bigint | TransactionArgument;
}

/**
 * Move function: `substring`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::ascii`
 *
 * @param tx - The transaction object
 * @param string - Function parameter
 * @param u641 - Function parameter
 * @param u642 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function substring(
  tx: Transaction,
  args: SubstringArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::ascii::substring`,
    arguments: [
      pure(tx, args.string, `${String.$typeName}`),
      pure(tx, args.u641, `u64`),
      pure(tx, args.u642, `u64`),
    ],
  });
}
