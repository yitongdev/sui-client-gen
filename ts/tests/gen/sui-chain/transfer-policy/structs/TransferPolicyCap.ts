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
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { PKG_V31 } from "../../constants.js";
import { ID, UID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isTransferPolicyCap(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(
    `${PKG_V31}::transfer_policy::TransferPolicyCap` + "<",
  );
}

export interface TransferPolicyCapFields<T0 extends PhantomTypeArgument> {
  id: ToField<UID>;
  policyId: ToField<ID>;
}

export type TransferPolicyCapReified<T0 extends PhantomTypeArgument> = Reified<
  TransferPolicyCap<T0>,
  TransferPolicyCapFields<T0>
>;

/**
 * Move struct: `TransferPolicyCap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class TransferPolicyCap<T0 extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::transfer_policy::TransferPolicyCap`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = TransferPolicyCap.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::transfer_policy::TransferPolicyCap<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = TransferPolicyCap.$isPhantom;

  readonly id: ToField<UID>;
  readonly policyId: ToField<ID>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T0>],
    fields: TransferPolicyCapFields<T0>,
  ) {
    this.$fullTypeName = composeSuiType(
      TransferPolicyCap.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::transfer_policy::TransferPolicyCap<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.policyId = fields.policyId;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): TransferPolicyCapReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: TransferPolicyCap.$typeName,
      fullTypeName: composeSuiType(
        TransferPolicyCap.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V31}::transfer_policy::TransferPolicyCap<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T0>>,
      ],
      isPhantom: TransferPolicyCap.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) =>
        TransferPolicyCap.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        TransferPolicyCap.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => TransferPolicyCap.fromBcs(T0, data),
      bcs: TransferPolicyCap.bcs,
      fromJSONField: (field: any) => TransferPolicyCap.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) =>
        TransferPolicyCap.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        TransferPolicyCap.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        TransferPolicyCap.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) =>
        TransferPolicyCap.fetch(client, T0, id),
      new: (fields: TransferPolicyCapFields<ToPhantomTypeArgument<T0>>) => {
        return new TransferPolicyCap([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return TransferPolicyCap.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<TransferPolicyCap<ToPhantomTypeArgument<T0>>>> {
    return phantom(TransferPolicyCap.reified(T0));
  }
  static get p() {
    return TransferPolicyCap.phantom;
  }

  static get bcs() {
    return bcs.struct("TransferPolicyCap", {
      id: UID.bcs,
      policy_id: ID.bcs,
    });
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): TransferPolicyCap<ToPhantomTypeArgument<T0>> {
    return TransferPolicyCap.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      policyId: decodeFromFields(ID.reified(), fields.policy_id),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): TransferPolicyCap<ToPhantomTypeArgument<T0>> {
    if (!isTransferPolicyCap(item.type)) {
      throw new Error("not a TransferPolicyCap type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return TransferPolicyCap.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      policyId: decodeFromFieldsWithTypes(ID.reified(), item.fields.policy_id),
    });
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): TransferPolicyCap<ToPhantomTypeArgument<T0>> {
    return TransferPolicyCap.fromFields(
      typeArg,
      TransferPolicyCap.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      id: this.id,
      policyId: this.policyId,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): TransferPolicyCap<ToPhantomTypeArgument<T0>> {
    return TransferPolicyCap.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      policyId: decodeFromJSONField(ID.reified(), field.policyId),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): TransferPolicyCap<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== TransferPolicyCap.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(TransferPolicyCap.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return TransferPolicyCap.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): TransferPolicyCap<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isTransferPolicyCap(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a TransferPolicyCap object`,
      );
    }
    return TransferPolicyCap.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): TransferPolicyCap<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isTransferPolicyCap(data.bcs.type)
      ) {
        throw new Error(`object at is not a TransferPolicyCap object`);
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

      return TransferPolicyCap.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return TransferPolicyCap.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<TransferPolicyCap<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching TransferPolicyCap object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isTransferPolicyCap(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a TransferPolicyCap object`);
    }

    return TransferPolicyCap.fromSuiObjectData(typeArg, res.data);
  }
}
