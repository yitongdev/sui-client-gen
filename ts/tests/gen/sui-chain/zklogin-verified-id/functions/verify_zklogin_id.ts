import { pure } from "../../../_framework/util.js";
import { String } from "../../../move-stdlib-chain/string/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface VerifyZkloginIdArgs {
  string1: string | TransactionArgument;
  string2: string | TransactionArgument;
  string3: string | TransactionArgument;
  string4: string | TransactionArgument;
  u256: bigint | TransactionArgument;
}

/**
 * Move function: `verify_zklogin_id`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::zklogin_verified_id`
 *
 * @param tx - The transaction object
 * @param string1 - Function parameter
 * @param string2 - Function parameter
 * @param string3 - Function parameter
 * @param string4 - Function parameter
 * @param u256 - Function parameter
 * @param txContext - Function parameter
 */
export function verifyZkloginId(tx: Transaction, args: VerifyZkloginIdArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::zklogin_verified_id::verify_zklogin_id`,
    arguments: [
      pure(tx, args.string1, `${String.$typeName}`),
      pure(tx, args.string2, `${String.$typeName}`),
      pure(tx, args.string3, `${String.$typeName}`),
      pure(tx, args.string4, `${String.$typeName}`),
      pure(tx, args.u256, `u256`),
    ],
  });
}
