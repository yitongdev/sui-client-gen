import { String as String1 } from "../../../_dependencies/source/0x1/ascii/structs/index.js";
import { Option } from "../../../_dependencies/source/0x1/option/structs/index.js";
import { String } from "../../../_dependencies/source/0x1/string/structs/index.js";
import { GenericArg, obj, option, pure } from "../../../_framework/util.js";
import { ID } from "../../../sui/object/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Bar } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface CreateSpecialArgs {
  string: string | TransactionArgument;
  asciiString: string | TransactionArgument;
  url: TransactionObjectInput;
  idField: string | TransactionArgument;
  uid: TransactionObjectInput;
  balance: TransactionObjectInput;
  option: bigint | TransactionArgument | TransactionArgument | null;
  optionObj: TransactionObjectInput | TransactionArgument | null;
  optionNone: bigint | TransactionArgument | TransactionArgument | null;
  balanceGeneric: TransactionObjectInput;
  optionGeneric: GenericArg | TransactionArgument | null;
  optionGenericNone: GenericArg | TransactionArgument | null;
}

/**
 * Move function: `create_special`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::fixture`
 *
 * @typeParam T - Type parameter 0
 * @typeParam U - Type parameter 1
 * @param tx - The transaction object
 * @param string - Function parameter
 * @param asciiString - Function parameter
 * @param url - Function parameter
 * @param idField - Function parameter
 * @param uid - Function parameter
 * @param balance - Function parameter
 * @param option - Function parameter
 * @param optionObj - Function parameter
 * @param optionNone - Function parameter
 * @param balanceGeneric - Function parameter
 * @param optionGeneric - Function parameter
 * @param optionGenericNone - Function parameter
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
      pure(tx, args.string, `${String.$typeName}`),
      pure(tx, args.asciiString, `${String1.$typeName}`),
      obj(tx, args.url),
      pure(tx, args.idField, `${ID.$typeName}`),
      obj(tx, args.uid),
      obj(tx, args.balance),
      pure(tx, args.option, `${Option.$typeName}<u64>`),
      option(tx, `${Bar.$typeName}`, args.optionObj),
      pure(tx, args.optionNone, `${Option.$typeName}<u64>`),
      obj(tx, args.balanceGeneric),
      option(tx, `${typeArgs[1]}`, args.optionGeneric),
      option(tx, `${typeArgs[1]}`, args.optionGenericNone),
    ],
  });
}
