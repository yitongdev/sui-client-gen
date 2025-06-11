import { GenericArg, obj, option, pure } from "../../../_framework/util.js";
import { String as String1 } from "../../../move-stdlib-chain/ascii/structs/index.js";
import { Option } from "../../../move-stdlib-chain/option/structs/index.js";
import { String } from "../../../move-stdlib-chain/string/structs/index.js";
import { ID } from "../../../sui-chain/object/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Bar } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface CreateSpecialArgs {
  string1: string | TransactionArgument;
  string2: string | TransactionArgument;
  url: TransactionObjectInput;
  id: string | TransactionArgument;
  uid: TransactionObjectInput;
  balance1: TransactionObjectInput;
  option1: bigint | TransactionArgument | TransactionArgument | null;
  option2: TransactionObjectInput | TransactionArgument | null;
  option3: bigint | TransactionArgument | TransactionArgument | null;
  balance2: TransactionObjectInput;
  option4: GenericArg | TransactionArgument | null;
  option5: GenericArg | TransactionArgument | null;
}

/**
 * Move function: `create_special`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::fixture`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param string1 - Function parameter
 * @param string2 - Function parameter
 * @param url - Function parameter
 * @param id - Function parameter
 * @param uid - Function parameter
 * @param balance1 - Function parameter
 * @param option1 - Function parameter
 * @param option2 - Function parameter
 * @param option3 - Function parameter
 * @param balance2 - Function parameter
 * @param option4 - Function parameter
 * @param option5 - Function parameter
 * @param txContext - Function parameter
 */
export function createSpecial(
  tx: Transaction,
  typeArgs: [string, string],
  args: CreateSpecialArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::fixture::create_special`,
    typeArguments: typeArgs,
    arguments: [
      pure(tx, args.string1, `${String.$typeName}`),
      pure(tx, args.string2, `${String1.$typeName}`),
      obj(tx, args.url),
      pure(tx, args.id, `${ID.$typeName}`),
      obj(tx, args.uid),
      obj(tx, args.balance1),
      pure(tx, args.option1, `${Option.$typeName}<u64>`),
      option(tx, `${Bar.$typeName}`, args.option2),
      pure(tx, args.option3, `${Option.$typeName}<u64>`),
      obj(tx, args.balance2),
      option(tx, `${typeArgs[1]}`, args.option4),
      option(tx, `${typeArgs[1]}`, args.option5),
    ],
  });
}
