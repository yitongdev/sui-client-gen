import { String } from "../../../_dependencies/source/0x1/string/structs/index.js";
import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface StringBytesLtArgs {
  a: string | TransactionArgument;
  b: string | TransactionArgument;
}

/**
 * Move function: `string_bytes_lt`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::authenticator_state`
 *
 * @param tx - The transaction object
 * @param a - Function parameter
 * @param b - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function stringBytesLt(tx: Transaction, args: StringBytesLtArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::authenticator_state::string_bytes_lt`,
    arguments: [pure(tx, args.a, `${String.$typeName}`), pure(tx, args.b, `${String.$typeName}`)],
  });
}
