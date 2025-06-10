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

export function isTransferPolicyCreated(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(
    `${PKG_V31}::transfer_policy::TransferPolicyCreated` + "<",
  );
}

export interface TransferPolicyCreatedFields<T extends PhantomTypeArgument> {
  id: ToField<ID>;
}

export type TransferPolicyCreatedReified<T extends PhantomTypeArgument> =
  Reified<TransferPolicyCreated<T>, TransferPolicyCreatedFields<T>>;

/**
 * Move struct: `TransferPolicyCreated`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T - Type parameter 0 (phantom)
 */
export class TransferPolicyCreated<T extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::transfer_policy::TransferPolicyCreated`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = TransferPolicyCreated.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::transfer_policy::TransferPolicyCreated<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = TransferPolicyCreated.$isPhantom;

  readonly id: ToField<ID>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>],
    fields: TransferPolicyCreatedFields<T>,
  ) {
    this.$fullTypeName = composeSuiType(
      TransferPolicyCreated.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::transfer_policy::TransferPolicyCreated<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): TransferPolicyCreatedReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: TransferPolicyCreated.$typeName,
      fullTypeName: composeSuiType(
        TransferPolicyCreated.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::transfer_policy::TransferPolicyCreated<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
      ],
      isPhantom: TransferPolicyCreated.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) =>
        TransferPolicyCreated.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        TransferPolicyCreated.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => TransferPolicyCreated.fromBcs(T, data),
      bcs: TransferPolicyCreated.bcs,
      fromJSONField: (field: any) =>
        TransferPolicyCreated.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) =>
        TransferPolicyCreated.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        TransferPolicyCreated.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        TransferPolicyCreated.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) =>
        TransferPolicyCreated.fetch(client, T, id),
      new: (fields: TransferPolicyCreatedFields<ToPhantomTypeArgument<T>>) => {
        return new TransferPolicyCreated([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return TransferPolicyCreated.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<
    ToTypeStr<TransferPolicyCreated<ToPhantomTypeArgument<T>>>
  > {
    return phantom(TransferPolicyCreated.reified(T));
  }
  static get p() {
    return TransferPolicyCreated.phantom;
  }

  static get bcs() {
    return bcs.struct("TransferPolicyCreated", {
      id: ID.bcs,
    });
  }

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): TransferPolicyCreated<ToPhantomTypeArgument<T>> {
    return TransferPolicyCreated.reified(typeArg).new({
      id: decodeFromFields(ID.reified(), fields.id),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): TransferPolicyCreated<ToPhantomTypeArgument<T>> {
    if (!isTransferPolicyCreated(item.type)) {
      throw new Error("not a TransferPolicyCreated type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return TransferPolicyCreated.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): TransferPolicyCreated<ToPhantomTypeArgument<T>> {
    return TransferPolicyCreated.fromFields(
      typeArg,
      TransferPolicyCreated.bcs.parse(data),
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
  ): TransferPolicyCreated<ToPhantomTypeArgument<T>> {
    return TransferPolicyCreated.reified(typeArg).new({
      id: decodeFromJSONField(ID.reified(), field.id),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): TransferPolicyCreated<ToPhantomTypeArgument<T>> {
    if (json.$typeName !== TransferPolicyCreated.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(TransferPolicyCreated.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return TransferPolicyCreated.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): TransferPolicyCreated<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isTransferPolicyCreated(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a TransferPolicyCreated object`,
      );
    }
    return TransferPolicyCreated.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): TransferPolicyCreated<ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isTransferPolicyCreated(data.bcs.type)
      ) {
        throw new Error(`object at is not a TransferPolicyCreated object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = compressSuiType(gotTypeArgs[0]);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (gotTypeArg !== compressSuiType(extractType(typeArg))) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`,
        );
      }

      return TransferPolicyCreated.fromBcs(
        typeArg,
        fromBase64(data.bcs.bcsBytes),
      );
    }
    if (data.content) {
      return TransferPolicyCreated.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<TransferPolicyCreated<ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching TransferPolicyCreated object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isTransferPolicyCreated(res.data.bcs.type)
    ) {
      throw new Error(
        `object at id ${id} is not a TransferPolicyCreated object`,
      );
    }

    return TransferPolicyCreated.fromSuiObjectData(typeArg, res.data);
  }
}
