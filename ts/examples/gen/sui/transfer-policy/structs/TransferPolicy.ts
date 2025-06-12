import * as reified from "../../../_framework/reified.js";
import { TypeName } from "../../../_dependencies/source/0x1/type-name/structs/index.js";
import {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  phantom,
  ToTypeStr as ToPhantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { Balance } from "../../balance/structs/index.js";
import { PKG_V31 } from "../../constants.js";
import { UID } from "../../object/structs/index.js";
import { SUI } from "../../sui/structs/index.js";
import { VecSet } from "../../vec-set/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isTransferPolicy(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::transfer_policy::TransferPolicy` + "<");
}

export interface TransferPolicyFields<T extends PhantomTypeArgument> {
  id: ToField<UID>;
  balance: ToField<Balance<ToPhantom<SUI>>>;
  rules: ToField<VecSet<TypeName>>;
}

export type TransferPolicyReified<T extends PhantomTypeArgument> = Reified<
  TransferPolicy<T>,
  TransferPolicyFields<T>
>;

/**
 * Move struct: `TransferPolicy`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T - Type parameter 0 (phantom)
 */
export class TransferPolicy<T extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::transfer_policy::TransferPolicy`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = TransferPolicy.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::transfer_policy::TransferPolicy<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = TransferPolicy.$isPhantom;

  readonly id: ToField<UID>;
  readonly balance: ToField<Balance<ToPhantom<SUI>>>;
  readonly rules: ToField<VecSet<TypeName>>;

  private constructor(typeArgs: [PhantomToTypeStr<T>], fields: TransferPolicyFields<T>) {
    this.$fullTypeName = composeSuiType(
      TransferPolicy.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::transfer_policy::TransferPolicy<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.balance = fields.balance;
    this.rules = fields.rules;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): TransferPolicyReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: TransferPolicy.$typeName,
      fullTypeName: composeSuiType(
        TransferPolicy.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::transfer_policy::TransferPolicy<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>],
      isPhantom: TransferPolicy.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) => TransferPolicy.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => TransferPolicy.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => TransferPolicy.fromBcs(T, data),
      bcs: TransferPolicy.bcs,
      fromJSONField: (field: any) => TransferPolicy.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => TransferPolicy.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) => TransferPolicy.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) => TransferPolicy.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) => TransferPolicy.fetch(client, T, id),
      new: (fields: TransferPolicyFields<ToPhantomTypeArgument<T>>) => {
        return new TransferPolicy([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return TransferPolicy.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<ToTypeStr<TransferPolicy<ToPhantomTypeArgument<T>>>> {
    return phantom(TransferPolicy.reified(T));
  }
  static get p() {
    return TransferPolicy.phantom;
  }

  static get bcs() {
    return bcs.struct("TransferPolicy", {
      id: UID.bcs,
      balance: Balance.bcs,
      rules: VecSet.bcs(TypeName.bcs),
    });
  }

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): TransferPolicy<ToPhantomTypeArgument<T>> {
    return TransferPolicy.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      balance: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.balance),
      rules: decodeFromFields(VecSet.reified(TypeName.reified()), fields.rules),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): TransferPolicy<ToPhantomTypeArgument<T>> {
    if (!isTransferPolicy(item.type)) {
      throw new Error("not a TransferPolicy type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return TransferPolicy.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      balance: decodeFromFieldsWithTypes(
        Balance.reified(reified.phantom(SUI.reified())),
        item.fields.balance,
      ),
      rules: decodeFromFieldsWithTypes(VecSet.reified(TypeName.reified()), item.fields.rules),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): TransferPolicy<ToPhantomTypeArgument<T>> {
    return TransferPolicy.fromFields(typeArg, TransferPolicy.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      balance: this.balance.toJSONField(),
      rules: this.rules.toJSONField(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    field: any,
  ): TransferPolicy<ToPhantomTypeArgument<T>> {
    return TransferPolicy.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      balance: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.balance),
      rules: decodeFromJSONField(VecSet.reified(TypeName.reified()), field.rules),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): TransferPolicy<ToPhantomTypeArgument<T>> {
    if (json.$typeName !== TransferPolicy.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(TransferPolicy.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return TransferPolicy.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): TransferPolicy<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isTransferPolicy(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a TransferPolicy object`);
    }
    return TransferPolicy.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): TransferPolicy<ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isTransferPolicy(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a TransferPolicy object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = gotTypeArgs[0] as string;
      const compressedGotType = compressSuiType(gotTypeArg);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (compressedGotType !== expectedTypeArg) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
        );
      }

      return TransferPolicy.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return TransferPolicy.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<TransferPolicy<ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching TransferPolicy object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isTransferPolicy(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a TransferPolicy object`);
    }

    return TransferPolicy.fromSuiObjectData(typeArg, res.data);
  }
}
