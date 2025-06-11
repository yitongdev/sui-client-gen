import { String } from "../../../_dependencies/source/0x1/ascii/structs/index.js";
import { Option } from "../../../_dependencies/source/0x1/option/structs/index.js";
import { String as String1 } from "../../../_dependencies/source/0x1/string/structs/index.js";
import { pure, vector } from "../../../_framework/util.js";
import { ID } from "../../../sui/object/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import { ExampleStruct } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SpecialTypesArgs {
  asciiString: string | TransactionArgument;
  utf8String: string | TransactionArgument;
  vectorOfU64: Array<bigint | TransactionArgument> | TransactionArgument;
  vectorOfObjects: Array<TransactionObjectInput> | TransactionArgument;
  idField: string | TransactionArgument;
  address: string | TransactionArgument;
  optionSome: bigint | TransactionArgument | TransactionArgument | null;
  optionNone: bigint | TransactionArgument | TransactionArgument | null;
}

/**
 * Move function: `special_types`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::examples`
 *
 * @param tx - The transaction object
 * @param asciiString - Function parameter
 * @param utf8String - Function parameter
 * @param vectorOfU64 - Function parameter
 * @param vectorOfObjects - Function parameter
 * @param idField - Function parameter
 * @param address - Function parameter
 * @param optionSome - Function parameter
 * @param optionNone - Function parameter
 * @param ctx - Function parameter
 */
export function specialTypes(
  tx: Transaction,
  args: SpecialTypesArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::examples::special_types`,
    arguments: [
      pure(tx, args.asciiString, `${String.$typeName}`),
      pure(tx, args.utf8String, `${String1.$typeName}`),
      pure(tx, args.vectorOfU64, `vector<u64>`),
      vector(tx, `${ExampleStruct.$typeName}`, args.vectorOfObjects),
      pure(tx, args.idField, `${ID.$typeName}`),
      pure(tx, args.address, `address`),
      pure(tx, args.optionSome, `${Option.$typeName}<u64>`),
      pure(tx, args.optionNone, `${Option.$typeName}<u64>`),
    ],
  });
}
