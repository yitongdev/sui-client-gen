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
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../../../_framework/util.js";
import { PKG_V35 } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isTransferPolicyDestroyed(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(
    `${PKG_V35}::transfer_policy::TransferPolicyDestroyed` + "<",
  );
}

export interface TransferPolicyDestroyedFields<T0 extends PhantomTypeArgument> {
  id: ToField<ID>;
}

export type TransferPolicyDestroyedReified<T0 extends PhantomTypeArgument> =
  Reified<TransferPolicyDestroyed<T0>, TransferPolicyDestroyedFields<T0>>;

/**
 * Move struct: `TransferPolicyDestroyed`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class TransferPolicyDestroyed<T0 extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::transfer_policy::TransferPolicyDestroyed`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = TransferPolicyDestroyed.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::transfer_policy::TransferPolicyDestroyed<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = TransferPolicyDestroyed.$isPhantom;

  readonly id: ToField<ID>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T0>],
    fields: TransferPolicyDestroyedFields<T0>,
  ) {
    this.$fullTypeName = composeSuiType(
      TransferPolicyDestroyed.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::transfer_policy::TransferPolicyDestroyed<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): TransferPolicyDestroyedReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: TransferPolicyDestroyed.$typeName,
      fullTypeName: composeSuiType(
        TransferPolicyDestroyed.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V35}::transfer_policy::TransferPolicyDestroyed<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T0>>,
      ],
      isPhantom: TransferPolicyDestroyed.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) =>
        TransferPolicyDestroyed.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        TransferPolicyDestroyed.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => TransferPolicyDestroyed.fromBcs(T0, data),
      bcs: TransferPolicyDestroyed.bcs,
      fromJSONField: (field: any) =>
        TransferPolicyDestroyed.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) =>
        TransferPolicyDestroyed.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        TransferPolicyDestroyed.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        TransferPolicyDestroyed.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) =>
        TransferPolicyDestroyed.fetch(client, T0, id),
      new: (
        fields: TransferPolicyDestroyedFields<ToPhantomTypeArgument<T0>>,
      ) => {
        return new TransferPolicyDestroyed([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return TransferPolicyDestroyed.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<
    ToTypeStr<TransferPolicyDestroyed<ToPhantomTypeArgument<T0>>>
  > {
    return phantom(TransferPolicyDestroyed.reified(T0));
  }
  static get p() {
    return TransferPolicyDestroyed.phantom;
  }

  static get bcs() {
    return bcs.struct("TransferPolicyDestroyed", {
      id: ID.bcs,
    });
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): TransferPolicyDestroyed<ToPhantomTypeArgument<T0>> {
    return TransferPolicyDestroyed.reified(typeArg).new({
      id: decodeFromFields(ID.reified(), fields.id),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): TransferPolicyDestroyed<ToPhantomTypeArgument<T0>> {
    if (!isTransferPolicyDestroyed(item.type)) {
      throw new Error("not a TransferPolicyDestroyed type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return TransferPolicyDestroyed.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id),
    });
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): TransferPolicyDestroyed<ToPhantomTypeArgument<T0>> {
    return TransferPolicyDestroyed.fromFields(
      typeArg,
      TransferPolicyDestroyed.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      id: this.id,
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
  ): TransferPolicyDestroyed<ToPhantomTypeArgument<T0>> {
    return TransferPolicyDestroyed.reified(typeArg).new({
      id: decodeFromJSONField(ID.reified(), field.id),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): TransferPolicyDestroyed<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== TransferPolicyDestroyed.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(TransferPolicyDestroyed.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return TransferPolicyDestroyed.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): TransferPolicyDestroyed<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isTransferPolicyDestroyed(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a TransferPolicyDestroyed object`,
      );
    }
    return TransferPolicyDestroyed.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): TransferPolicyDestroyed<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isTransferPolicyDestroyed(data.bcs.type)
      ) {
        throw new Error(`object at is not a TransferPolicyDestroyed object`);
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

      return TransferPolicyDestroyed.fromBcs(
        typeArg,
        fromBase64(data.bcs.bcsBytes),
      );
    }
    if (data.content) {
      return TransferPolicyDestroyed.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<TransferPolicyDestroyed<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching TransferPolicyDestroyed object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isTransferPolicyDestroyed(res.data.bcs.type)
    ) {
      throw new Error(
        `object at id ${id} is not a TransferPolicyDestroyed object`,
      );
    }

    return TransferPolicyDestroyed.fromSuiObjectData(typeArg, res.data);
  }
}
