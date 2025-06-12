import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SetPermissionsArgs {
  party: TransactionObjectInput;
  address: string | TransactionArgument;
  permissions: TransactionObjectInput;
}

/**
 * Move function: `set_permissions`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::party`
 *
 * @param tx - The transaction object
 * @param party - Function parameter
 * @param address - Function parameter
 * @param permissions - Function parameter
 */
export function setPermissions(tx: Transaction, args: SetPermissionsArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::party::set_permissions`,
    arguments: [obj(tx, args.party), pure(tx, args.address, `address`), obj(tx, args.permissions)],
  });
}
