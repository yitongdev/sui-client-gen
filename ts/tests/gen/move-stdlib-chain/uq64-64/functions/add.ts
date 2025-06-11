import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AddArgs {
  uq64641: TransactionObjectInput;
  uq64642: TransactionObjectInput;
}

/**
 * Move function: `add`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::uq64_64`
 *
 * @param tx - The transaction object
 * @param uq64641 - Function parameter
 * @param uq64642 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function add(tx: Transaction, args: AddArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::uq64_64::add`,
    arguments: [obj(tx, args.uq64641), obj(tx, args.uq64642)],
  });
}
