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
import { ID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isTransferPolicyDestroyed(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(
    `${PKG_V31}::transfer_policy::TransferPolicyDestroyed` + "<",
  );
}

export interface TransferPolicyDestroyedFields<T extends PhantomTypeArgument> {
  id: ToField<ID>;
}

export type TransferPolicyDestroyedReified<T extends PhantomTypeArgument> =
  Reified<TransferPolicyDestroyed<T>, TransferPolicyDestroyedFields<T>>;

/**
 * Move struct: `TransferPolicyDestroyed`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T - Type parameter 0 (phantom)
 */
export class TransferPolicyDestroyed<T extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::transfer_policy::TransferPolicyDestroyed`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = TransferPolicyDestroyed.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::transfer_policy::TransferPolicyDestroyed<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = TransferPolicyDestroyed.$isPhantom;

  readonly id: ToField<ID>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>],
    fields: TransferPolicyDestroyedFields<T>,
  ) {
    this.$fullTypeName = composeSuiType(
      TransferPolicyDestroyed.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::transfer_policy::TransferPolicyDestroyed<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): TransferPolicyDestroyedReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: TransferPolicyDestroyed.$typeName,
      fullTypeName: composeSuiType(
        TransferPolicyDestroyed.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::transfer_policy::TransferPolicyDestroyed<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
      ],
      isPhantom: TransferPolicyDestroyed.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) =>
        TransferPolicyDestroyed.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        TransferPolicyDestroyed.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => TransferPolicyDestroyed.fromBcs(T, data),
      bcs: TransferPolicyDestroyed.bcs,
      fromJSONField: (field: any) =>
        TransferPolicyDestroyed.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) =>
        TransferPolicyDestroyed.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        TransferPolicyDestroyed.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        TransferPolicyDestroyed.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) =>
        TransferPolicyDestroyed.fetch(client, T, id),
      new: (
        fields: TransferPolicyDestroyedFields<ToPhantomTypeArgument<T>>,
      ) => {
        return new TransferPolicyDestroyed([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return TransferPolicyDestroyed.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<
    ToTypeStr<TransferPolicyDestroyed<ToPhantomTypeArgument<T>>>
  > {
    return phantom(TransferPolicyDestroyed.reified(T));
  }
  static get p() {
    return TransferPolicyDestroyed.phantom;
  }

  static get bcs() {
    return bcs.struct("TransferPolicyDestroyed", {
      id: ID.bcs,
    });
  }

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): TransferPolicyDestroyed<ToPhantomTypeArgument<T>> {
    return TransferPolicyDestroyed.reified(typeArg).new({
      id: decodeFromFields(ID.reified(), fields.id),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): TransferPolicyDestroyed<ToPhantomTypeArgument<T>> {
    if (!isTransferPolicyDestroyed(item.type)) {
      throw new Error("not a TransferPolicyDestroyed type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return TransferPolicyDestroyed.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): TransferPolicyDestroyed<ToPhantomTypeArgument<T>> {
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

  static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    field: any,
  ): TransferPolicyDestroyed<ToPhantomTypeArgument<T>> {
    return TransferPolicyDestroyed.reified(typeArg).new({
      id: decodeFromJSONField(ID.reified(), field.id),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): TransferPolicyDestroyed<ToPhantomTypeArgument<T>> {
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

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): TransferPolicyDestroyed<ToPhantomTypeArgument<T>> {
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

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): TransferPolicyDestroyed<ToPhantomTypeArgument<T>> {
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

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<TransferPolicyDestroyed<ToPhantomTypeArgument<T>>> {
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
