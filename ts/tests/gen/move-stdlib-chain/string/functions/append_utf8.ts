import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { String } from "../index.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface AppendUtf8Args {
  string: string | TransactionArgument;
  vecU8: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `append_utf8`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::string`
 *
 * @param tx - The transaction object
 * @param string - Function parameter
 * @param vecU8 - Function parameter
 */
export function appendUtf8(tx: Transaction, args: AppendUtf8Args): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::string::append_utf8`,
    arguments: [pure(tx, args.string, `${String.$typeName}`), pure(tx, args.vecU8, `vector<u8>`)],
  });
}
