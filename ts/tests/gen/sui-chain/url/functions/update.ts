import { obj, pure } from "../../../_framework/util.js";
import { String } from "../../../move-stdlib-chain/ascii/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface UpdateArgs {
  url: TransactionObjectInput;
  string: string | TransactionArgument;
}

/**
 * Move function: `update`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::url`
 *
 * @param tx - The transaction object
 * @param url - Function parameter
 * @param string - Function parameter
 */
export function update(tx: Transaction, args: UpdateArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::url::update`,
    arguments: [obj(tx, args.url), pure(tx, args.string, `${String.$typeName}`)],
  });
}
