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

export function isRegulatedCoinMetadata(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::coin::RegulatedCoinMetadata` + "<");
}

export interface RegulatedCoinMetadataFields<T extends PhantomTypeArgument> {
  id: ToField<UID>;
  coinMetadataObject: ToField<ID>;
  denyCapObject: ToField<ID>;
}

export type RegulatedCoinMetadataReified<T extends PhantomTypeArgument> =
  Reified<RegulatedCoinMetadata<T>, RegulatedCoinMetadataFields<T>>;

/**
 * Move struct: `RegulatedCoinMetadata`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0 (phantom)
 */
export class RegulatedCoinMetadata<T extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::coin::RegulatedCoinMetadata`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = RegulatedCoinMetadata.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::coin::RegulatedCoinMetadata<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = RegulatedCoinMetadata.$isPhantom;

  readonly id: ToField<UID>;
  readonly coinMetadataObject: ToField<ID>;
  readonly denyCapObject: ToField<ID>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>],
    fields: RegulatedCoinMetadataFields<T>,
  ) {
    this.$fullTypeName = composeSuiType(
      RegulatedCoinMetadata.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::coin::RegulatedCoinMetadata<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.coinMetadataObject = fields.coinMetadataObject;
    this.denyCapObject = fields.denyCapObject;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): RegulatedCoinMetadataReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: RegulatedCoinMetadata.$typeName,
      fullTypeName: composeSuiType(
        RegulatedCoinMetadata.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::coin::RegulatedCoinMetadata<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
      ],
      isPhantom: RegulatedCoinMetadata.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) =>
        RegulatedCoinMetadata.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        RegulatedCoinMetadata.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => RegulatedCoinMetadata.fromBcs(T, data),
      bcs: RegulatedCoinMetadata.bcs,
      fromJSONField: (field: any) =>
        RegulatedCoinMetadata.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) =>
        RegulatedCoinMetadata.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        RegulatedCoinMetadata.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        RegulatedCoinMetadata.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) =>
        RegulatedCoinMetadata.fetch(client, T, id),
      new: (fields: RegulatedCoinMetadataFields<ToPhantomTypeArgument<T>>) => {
        return new RegulatedCoinMetadata([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return RegulatedCoinMetadata.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<
    ToTypeStr<RegulatedCoinMetadata<ToPhantomTypeArgument<T>>>
  > {
    return phantom(RegulatedCoinMetadata.reified(T));
  }
  static get p() {
    return RegulatedCoinMetadata.phantom;
  }

  static get bcs() {
    return bcs.struct("RegulatedCoinMetadata", {
      id: UID.bcs,
      coin_metadata_object: ID.bcs,
      deny_cap_object: ID.bcs,
    });
  }

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): RegulatedCoinMetadata<ToPhantomTypeArgument<T>> {
    return RegulatedCoinMetadata.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      coinMetadataObject: decodeFromFields(
        ID.reified(),
        fields.coin_metadata_object,
      ),
      denyCapObject: decodeFromFields(ID.reified(), fields.deny_cap_object),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): RegulatedCoinMetadata<ToPhantomTypeArgument<T>> {
    if (!isRegulatedCoinMetadata(item.type)) {
      throw new Error("not a RegulatedCoinMetadata type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return RegulatedCoinMetadata.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      coinMetadataObject: decodeFromFieldsWithTypes(
        ID.reified(),
        item.fields.coin_metadata_object,
      ),
      denyCapObject: decodeFromFieldsWithTypes(
        ID.reified(),
        item.fields.deny_cap_object,
      ),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): RegulatedCoinMetadata<ToPhantomTypeArgument<T>> {
    return RegulatedCoinMetadata.fromFields(
      typeArg,
      RegulatedCoinMetadata.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      id: this.id,
      coinMetadataObject: this.coinMetadataObject,
      denyCapObject: this.denyCapObject,
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
  ): RegulatedCoinMetadata<ToPhantomTypeArgument<T>> {
    return RegulatedCoinMetadata.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      coinMetadataObject: decodeFromJSONField(
        ID.reified(),
        field.coinMetadataObject,
      ),
      denyCapObject: decodeFromJSONField(ID.reified(), field.denyCapObject),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): RegulatedCoinMetadata<ToPhantomTypeArgument<T>> {
    if (json.$typeName !== RegulatedCoinMetadata.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(RegulatedCoinMetadata.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return RegulatedCoinMetadata.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): RegulatedCoinMetadata<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isRegulatedCoinMetadata(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a RegulatedCoinMetadata object`,
      );
    }
    return RegulatedCoinMetadata.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): RegulatedCoinMetadata<ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isRegulatedCoinMetadata(data.bcs.type)
      ) {
        throw new Error(`object at is not a RegulatedCoinMetadata object`);
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

      return RegulatedCoinMetadata.fromBcs(
        typeArg,
        fromBase64(data.bcs.bcsBytes),
      );
    }
    if (data.content) {
      return RegulatedCoinMetadata.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<RegulatedCoinMetadata<ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching RegulatedCoinMetadata object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isRegulatedCoinMetadata(res.data.bcs.type)
    ) {
      throw new Error(
        `object at id ${id} is not a RegulatedCoinMetadata object`,
      );
    }

    return RegulatedCoinMetadata.fromSuiObjectData(typeArg, res.data);
  }
}
