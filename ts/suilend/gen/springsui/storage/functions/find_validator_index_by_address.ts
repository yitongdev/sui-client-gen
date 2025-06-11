import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface FindValidatorIndexByAddressArgs {
  storage: TransactionObjectInput;
  address: string | TransactionArgument;
}

/**
 * Move function: `find_validator_index_by_address`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::storage`
 *
 * @param tx - The transaction object
 * @param storage - Function parameter
 * @param address - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function findValidatorIndexByAddress(
  tx: Transaction,
  args: FindValidatorIndexByAddressArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::storage::find_validator_index_by_address`,
    arguments: [obj(tx, args.storage), pure(tx, args.address, `address`)],
  });
}
