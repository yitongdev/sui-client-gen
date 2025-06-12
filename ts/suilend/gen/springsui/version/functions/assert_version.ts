import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AssertVersionArgs {
  version: TransactionObjectInput;
  u16: number | TransactionArgument;
}

/**
 * Move function: `assert_version`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::version`
 *
 * @param tx - The transaction object
 * @param version - Function parameter
 * @param u16 - Function parameter
 */
export function assertVersion(tx: Transaction, args: AssertVersionArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::version::assert_version`,
    arguments: [obj(tx, args.version), pure(tx, args.u16, `u16`)],
  });
}
