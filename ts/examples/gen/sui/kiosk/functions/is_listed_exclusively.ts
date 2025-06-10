import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface IsListedExclusivelyArgs {
  self: TransactionObjectInput;
  id: string | TransactionArgument;
}

/**
 * Move function: `is_listed_exclusively`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param id - Function parameter
 */
export function isListedExclusively(
  tx: Transaction,
  args: IsListedExclusivelyArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::is_listed_exclusively`,
    arguments: [obj(tx, args.self), pure(tx, args.id, `${ID.$typeName}`)],
  });
}
