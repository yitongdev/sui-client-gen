import { String } from "../../../_dependencies/source/0x1/ascii/structs/index.js";
import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface UpdateArgs {
  self: TransactionObjectInput;
  url: string | TransactionArgument;
}

/**
 * Move function: `update`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::url`
 *
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param url - Function parameter
 */
export function update(tx: Transaction, args: UpdateArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::url::update`,
    arguments: [obj(tx, args.self), pure(tx, args.url, `${String.$typeName}`)],
  });
}
