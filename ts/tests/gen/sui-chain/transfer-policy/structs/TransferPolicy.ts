import * as reified from "../../../_framework/reified.js";
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
import { TypeName } from "../../../move-stdlib-chain/type-name/structs/index.js";
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

export interface TransferPolicyFields<T0 extends PhantomTypeArgument> {
  id: ToField<UID>;
  balance: ToField<Balance<ToPhantom<SUI>>>;
  rules: ToField<VecSet<TypeName>>;
}

export type TransferPolicyReified<T0 extends PhantomTypeArgument> = Reified<
  TransferPolicy<T0>,
  TransferPolicyFields<T0>
>;

/**
 * Move struct: `TransferPolicy`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class TransferPolicy<T0 extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::transfer_policy::TransferPolicy`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = TransferPolicy.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::transfer_policy::TransferPolicy<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = TransferPolicy.$isPhantom;

  readonly id: ToField<UID>;
  readonly balance: ToField<Balance<ToPhantom<SUI>>>;
  readonly rules: ToField<VecSet<TypeName>>;

  private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: TransferPolicyFields<T0>) {
    this.$fullTypeName = composeSuiType(
      TransferPolicy.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::transfer_policy::TransferPolicy<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.balance = fields.balance;
    this.rules = fields.rules;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): TransferPolicyReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: TransferPolicy.$typeName,
      fullTypeName: composeSuiType(
        TransferPolicy.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V31}::transfer_policy::TransferPolicy<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>],
      isPhantom: TransferPolicy.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) => TransferPolicy.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => TransferPolicy.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => TransferPolicy.fromBcs(T0, data),
      bcs: TransferPolicy.bcs,
      fromJSONField: (field: any) => TransferPolicy.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => TransferPolicy.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) => TransferPolicy.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) => TransferPolicy.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) => TransferPolicy.fetch(client, T0, id),
      new: (fields: TransferPolicyFields<ToPhantomTypeArgument<T0>>) => {
        return new TransferPolicy([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return TransferPolicy.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<TransferPolicy<ToPhantomTypeArgument<T0>>>> {
    return phantom(TransferPolicy.reified(T0));
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

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): TransferPolicy<ToPhantomTypeArgument<T0>> {
    return TransferPolicy.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      balance: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.balance),
      rules: decodeFromFields(VecSet.reified(TypeName.reified()), fields.rules),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): TransferPolicy<ToPhantomTypeArgument<T0>> {
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

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): TransferPolicy<ToPhantomTypeArgument<T0>> {
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

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): TransferPolicy<ToPhantomTypeArgument<T0>> {
    return TransferPolicy.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      balance: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.balance),
      rules: decodeFromJSONField(VecSet.reified(TypeName.reified()), field.rules),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): TransferPolicy<ToPhantomTypeArgument<T0>> {
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

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): TransferPolicy<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isTransferPolicy(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a TransferPolicy object`);
    }
    return TransferPolicy.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): TransferPolicy<ToPhantomTypeArgument<T0>> {
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

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<TransferPolicy<ToPhantomTypeArgument<T0>>> {
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
