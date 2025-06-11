import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ValidateUtilsAndAprsArgs {
  vecU8: Array<number | TransactionArgument> | TransactionArgument;
  vecU64: Array<bigint | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `validate_utils_and_aprs`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve_config`
 *
 * @param tx - The transaction object
 * @param vecU8 - Function parameter
 * @param vecU64 - Function parameter
 */
export function validateUtilsAndAprs(
  tx: Transaction,
  args: ValidateUtilsAndAprsArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::reserve_config::validate_utils_and_aprs`,
    arguments: [
      pure(tx, args.vecU8, `vector<u8>`),
      pure(tx, args.vecU64, `vector<u64>`),
    ],
  });
}
